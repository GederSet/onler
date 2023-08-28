export async function updateCountProduct(productId, productCount) {

    const userId = localStorage.getItem('userId');
    const url = 'http://localhost/onler_2/api/basket/update_count_product.php';
    const data = {
        user_id: userId,
        product_id: productId,
        product_count: productCount,
    }
    const options = {
        method: 'PATCH',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw response.json();
        }
        const info = await response.text();
        console.log(info);
    }
    catch (error) {
        const messageError = await error.text();
        console.log(messageError);
    }

}