export async function showProducts() {

    const userId = localStorage.getItem('userId');
    const url = 'http://localhost/onler_2/api/delivery/get_delivery_products.php';
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
    const deliveryBody = document.querySelector('.delivery__body');
    if (deliveryBody && products.count !== 0) {
        const deliveryHeader = document.querySelector('.delivery__box');
        deliveryHeader.innerHTML =
            `
            <div class="delivery__rows delivery-total-price">
                <div class="delivery__text">Итого:</div>
                <div class="delivery__text">${products[1].total_price} ₽</div>
            </div>
            <div class="delivery__rows">
                <div class="delivery__text">Код получения:</div>
                <div class="delivery__text">${products[2].code}</div>
            </div>
            `
        products[0].forEach(product => {
            deliveryBody.innerHTML +=
                `
                <div class="delivery__card product-card" value="${product.id}" data-order-date="${product.order_date}" data-arrival-date="${product.arrival_date}">
                    <div class="product-card__shell-image">
                        <div class="product-card__image">
                            <img src="${product.url}" alt="${product.name}">
                        </div>
                        ${getCountProduct(product.count)}
                    </div>
                    <div class="product-card__shell-info">
                        <div class="delivery__card-rows product-card__rows">
                            <div class="product-card__page delivery__product-page" id="product-card__page-1">
                                <div class="delivery__product-name product-card__name">${product.name}</div>
                                <div class="delivery__product-price">${product.price} ₽</div>
                                ${getStatus(product.status)}
                            </div>
                        </div>
                    </div>
                </div>
                `
        });
    }
    else if (deliveryBody && products.count === 0) {
        deliveryBody.innerHTML =
            `
            <div class="basket__null">${products.message}<div>
            `
    }

}


function getStatus(status) {

    if (status === 'Готов к выдаче') {
        return `
                <div value="orderStatus" class="delivery__text-body open-popup active">
                    <span class="delivery__product-status active">${status}</span>
                </div>
                `
    } else {
        return `
                <div value="orderStatus" class="delivery__text-body open-popup">
                    <span class="delivery__product-status">${status}</span>
                </div>
                `
    }

}


function getCountProduct(count) {
    if (count > 1) {
        return `<div class="product-card__count">${count}</div>`
    } else {
        return `<div class="product-card__count product-card__count_disabled"></div>`;
    }
}