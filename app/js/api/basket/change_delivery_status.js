document.addEventListener('click', actionElement);

function actionElement(e) {

    const userId = localStorage.getItem('userId');
    if (e.target.closest('.basket__pay') && userId) {

        let productId = [];
        const products = document.querySelectorAll('.basket__wrapper');

        for (let i = 0; i < products.length; i++) {
            productId.push(products[i].getAttribute('value'));
        }

        changeProductStatus(userId, productId);
    }

}


async function changeProductStatus(userId, productId) {

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
        const info = await response.text();
        console.log(info);

    }
    catch (error) {
        console.log(error);
    }
}