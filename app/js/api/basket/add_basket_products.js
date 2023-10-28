import { getCountPropducts } from "./count_basket_products.js";

export async function addElementDatabase(userId, productId) {

    const url = 'http://localhost/onler_2/api/basket/add_products.php';
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
