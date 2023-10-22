async function showProducts() {

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
        const deliveryHeader = document.querySelector('.delivery-total-price');
        deliveryHeader.innerHTML =
            `
            <div class="delivery__text">Итого:</div>
            <div class="delivery__text">${products[1][0].total_price} ₽</div>
            `
        products[0].forEach(product => {
            deliveryBody.innerHTML +=
                `
                <div class="delivery__card product-card" value="${product.id}" data-order-date="${product.order_date}" data-arrival-date="${product.arrival_date}">
                    <div class="product-card__shell-image">
                        <div class="product-card__image">
                            <img src="${product.url}" alt="${product.name}">
                        </div>
                    </div>
                    <div class="product-card__shell-info">
                        <div class="product-card__rows">
                            <div class="product-card__page delivery__product-page" id="product-card__page-1">
                                <div class="delivery__product-name product-card__name">${product.name}</div>
                                <div class="delivery__product-price">${product.price} ₽</div>
                                <div value="orderStatus" class="delivery__text-body open-popup active">
                                    <span class="delivery__product-status active">${product.status}</span>
                                </div>
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

showProducts();