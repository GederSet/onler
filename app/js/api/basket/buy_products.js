import { startFunctions } from "./get_basket_products.js";
import { getCountPropducts } from "./count_basket_products.js";
import { changeProductStatus } from "./change_delivery_status.js";
import { getCountDeliveryPropducts } from "../delivery/count_delivery_products.js";

document.addEventListener('click', actionElement);

async function actionElement(e) {

    const userId = localStorage.getItem('userId');
    if (e.target.closest('.basket__pay') && userId) {

        let productId = [];
        let newProductId = [];
        const products = document.querySelectorAll('.basket__wrapper');

        for (let i = 0; i < products.length; i++) {
            productId.push(parseInt(products[i].getAttribute('value')));
            newProductId.push(getRandomInt(1, 18000000000000000));
        }

        const code = getRandomInt(100000, 999999);

        await buyProducts(userId, productId, newProductId, code);
        await changeProductStatus(userId, newProductId);
    }

}


async function buyProducts(userId, productId, newProductId, code) {

    const url = 'http://localhost/onler_2/api/basket/buy_products.php';
    const data = {
        user_id: userId,
        product_id: productId,
        new_product_id: newProductId,
        code: code,
    }
    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    }

    try {

        const response = await fetch(url, options);
        if (!response.ok) {
            throw await response.text();
        }
        const info = await response.text();
        console.log(info);
        startFunctions();
        getCountPropducts();
        getCountDeliveryPropducts();

    }
    catch (error) {
        console.log(error);
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
