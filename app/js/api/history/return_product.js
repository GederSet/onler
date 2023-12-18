import { showProducts } from "./get_history_products.js";


export async function returnProduct(idUser, idProduct) {
    const url = 'http://localhost/onler_2/api/history/return_product.php';
    const data = {
        id_user: idUser,
        id_product: idProduct,
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
            throw await response.json();
        }
        const productInfo = await response.json();
        console.log(productInfo);
        showProducts();

    }
    catch (error) {
        console.log(error);
        console.log(url);
    }
}