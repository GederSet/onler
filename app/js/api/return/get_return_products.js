export async function showReturnProducts() {

    const userId = localStorage.getItem('userId');
    const url = 'http://localhost/onler_2/api/history/get_return_products.php';
    const data = {
        id_user: userId,
    }
    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    }


    const response = await fetch(url, options)
    const products = await response.json();
    console.log(products);
    const returnBody = document.querySelector('.return__body');
    if (returnBody && products.count !== 0) {
        returnBody.innerHTML = '';
        products.forEach(product => {
            returnBody.innerHTML +=
                `
                <div class="return__card-body product-card-shell" value="${product.id}">
                    <div class="return__card product-card">
                        <div class="product-card__shell-image">
                            <div class="product-card__image">
                                <img src="app/img/01 main page/${product.url}" alt="${product.name}">
                            </div>
                            ${getCountProduct(product.count)}
                        </div>
                        <div class="product-card__shell-info">
                            <div class="return__card-rows product-card__rows">
                                <div class="product-card__page return__product-page" id="product-card__page-1">
                                    <div class="return__rows">
                                        <div class="return__product-name product-card__name products-card-name">${product.name}</div>
                                    </div>
                                    <div class="return__product-price">${product.price} ₽</div>
                                    <div class="return__page">
                                        <div class="return__order-text">Заказ:</div>
                                        <div class="return__order-date">${changeDate('order', product.order_date)}</div>
                                    </div>
                                    <div class="return__page">
                                        <div class="return__order-text">Получен:</div>
                                        <div class="return__order-date">${changeDate('purchase', product.purchase_date)}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
        });
    }
    else if (returnBody && products.count === 0) {
        returnBody.innerHTML =
            `
            <div class="basket__null">${products.message}<div>
            `
    }

}

showReturnProducts();



function changeDate(typeDate, dateProduct) {

    let dateBuy;

    if (typeDate === 'order') {
        dateBuy = dateProduct;
    } else if (typeDate === 'purchase') {
        dateBuy = dateProduct;
    }

    const changeDate = dateBuy.split(', ')[0];
    return changeDate;

}

function getCountProduct(count) {
    if (count > 1) {
        return `<div class="product-card__count">${count}</div>`
    } else {
        return `<div class="product-card__count product-card__count_disabled"></div>`;
    }
}