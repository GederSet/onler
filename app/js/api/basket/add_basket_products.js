import { getCountPropducts } from "./count_basket_products.js";

document.addEventListener('click', actionElement);

function actionElement(event) {

    const targetElement = event.target;
    const userId = localStorage.getItem('userId');

    if (targetElement.closest('.products__basket') && userId) {
        const product = targetElement.closest('.products__card');
        addElementDatabase(userId, product);
    }

}

async function addElementDatabase(userId, product) {

    const url = 'http://localhost/onler_2/api/basket/add_products.php';
    const productId = product.getAttribute('value');
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
        getCountPropducts();
    }
    console.log(info);

}
