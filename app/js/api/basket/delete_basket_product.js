import { startFunctions } from "./get_basket_products.js";
import { getCountPropducts } from "./count_basket_products.js";

document.addEventListener('click', getProductId);

function getProductId(event) {

    const targetElement = event.target;
    const userId = localStorage.getItem('userId');

    if (targetElement.closest('.basket__icon') && userId) {
        const product = targetElement.closest('.basket__wrapper');
        deleteBasketProduct(userId, product);
    }

}

async function deleteBasketProduct(userId, product) {

    const productId = product.getAttribute('value');
    const url = 'http://localhost/onler_2/api/basket/delete_basket_product.php';
    const data = {
        user_id: userId,
        product_id: productId,
    }
    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    }

    const response = await fetch(url, options);
    const info = await response.text();
    if (info) {
        startFunctions();
        getCountPropducts();
    }
    console.log(info);

}