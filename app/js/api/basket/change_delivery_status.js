export async function changeProductStatus(userId, productId) {

    const url = 'http://localhost/onler_2/api/delivery/change_product_status.php';
    const data = {
        user_id: userId,
        product_id: productId,
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
            throw await response.json();
        }

    }
    catch (error) {
        console.log(error);
    }
}