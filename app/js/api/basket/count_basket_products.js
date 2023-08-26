export async function getCountPropducts() {

    const url = 'http://localhost/onler_2/api/basket/cout_basket_products.php';
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
    const basketCounter = document.querySelector('.header-info__count');

    if (count > 0) {
        basketCounter.classList.add('show');
        basketCounter.textContent = count;
    } else if (count === 0) {
        basketCounter.classList.remove('show');
        basketCounter.textContent = '';
    }
}

getCountPropducts();