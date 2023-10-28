export async function getCountDeliveryPropducts() {

    const url = 'http://localhost/onler_2/api/delivery/cout_delivery_products.php';
    const userId = localStorage.getItem('userId');

    const data = {
        user_id: userId,
    }
    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    }

    const response = await fetch(url, options);
    const countProduct = await response.json();
    const count = parseInt(countProduct.count_products);
    const deliveryCounter = document.querySelector('.header-info__count-delivery');

    if (count > 0) {
        deliveryCounter.classList.add('show');
        deliveryCounter.textContent = count;
    } else {
        deliveryCounter.classList.remove('show');
        deliveryCounter.textContent = '';
    }
}

getCountDeliveryPropducts();