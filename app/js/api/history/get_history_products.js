async function showProducts() {

    const userId = localStorage.getItem('userId');
    const url = 'http://localhost/onler_2/api/history/get_history_products.php';
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
    const historyBody = document.querySelector('.history__body');
    if (historyBody && products.count !== 0) {
        products.forEach(product => {
            historyBody.innerHTML +=
                `
                    <div class="history__card product-card" value="${product.id}">
                        <div class="product-card__shell-image">
                            <div class="product-card__image">
                                <img src="${product.url}" alt="${product.name}">
                            </div>
                            ${getCountProduct(product.count)}
                        </div>
                        <div class="product-card__shell-info">
                            <div class="history__card-rows product-card__rows">
                                <div class="product-card__page history__product-page" id="product-card__page-1">
                                    <div class="history__product-name product-card__name">${product.name}</div>
                                    <div class="history__product-price">${product.price} ₽</div>
                                    <div class="history__page">
                                        <div class="history__order-text">Заказ:</div>
                                        <div class="history__order-date">${changeDate('order', product.order_date)}</div>
                                    </div>
                                    ${getStatus(product.status, product)}
                                </div>
                            </div>
                        </div>
                    </div>
                `
        });
    }
    else if (historyBody && products.count === 0) {
        historyBody.innerHTML =
            `
            <div class="basket__null">${products.message}<div>
            `
    }

}

showProducts();



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

function getStatus(status, product) {

    if (status == 'Куплен') {
        return `
        <div class="history__page">
            <div class="history__order-text">Получен:</div>
            <div class="history__order-date">${changeDate('purchase', product.purchase_date)}</div>
        </div>`
    } else {
        return `<div class="history__status active">${product.status}</div>`
    }

}


function getCountProduct(count) {
    if (count > 1) {
        return `<div class="product-card__count">${count}</div>`
    } else {
        return `<div class="product-card__count product-card__count_disabled"></div>`;
    }
}