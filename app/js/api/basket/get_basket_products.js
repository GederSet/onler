import { dinamicAdapt } from "../../app/functions/dinamic_adapt.js";
import { disabledMinus } from "../../app/pages_site/basket_page/functions/counter.js";
import { changeBusketNumbers } from "../../app/pages_site/basket_page/functions/counter.js";

async function getBasketPropducts() {

    const url = 'http://localhost/onler_2/api/basket/get_basket_porducts.php';
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

    const response = await fetch(url, options)
    const products = await response.json();
    const basketBody = document.querySelector('.basket__body');
    if (basketBody && products.count !== 0) {
        basketBody.innerHTML =
            `
            <div class="basket__page">
                <div class="basket__columns basket__columns_products"></div>
            </div>
            <div class="basket__page">
                <div class="basket__columns basket__columns_info">
                    <div class="basket__info page">Товаров: <div>${products[1][0].count_products}</div>
                    </div>
                    <div class="basket__total page">Итого: <div><span>${products[1][0].total_price}</span> ₽</div>
                    </div>
                    <button class="basket__pay page main-button" data-ripple>Оплатить заказ</button>
                </div>
            </div>
            `
        const basket = document.querySelector('.basket__columns_products');
        products[0].forEach(product => {
            basket.innerHTML +=
                `
            <div class="basket__wrapper page" value="${product.id}">
                <div class="basket__rows">
                    <div class="basket__column basket__column_short basket__column_image">
                        <div class="basket__image">
                            <img src="app/img/01 main page/${product.url}" alt="${product.name}">
                        </div>
                    </div>
                    <div class="basket__column basket__column_name basket__column_name-${product.id}">
                        <div class="basket__name">${product.name}</div>
                    </div>
                    <div class="basket__row" data-da="basket__under-${product.id},last,700">
                        <button class="basket__change" data-counter="minus"></button>
                        <input class="basket__number" type="text" value="${product.basket_count}" max="${product.stock_quantity}"
                            inputmode="numeric">
                        <button class="basket__change" data-counter="plus"></button>
                    </div>
                    <div class="basket__column basket__column_price">
                        <div class="basket__price" data-da="basket__column_name-${product.id},first,700" data-min-price="${product.minimal_price}" data-current-price="${product.total_price}"><span>${product.total_price}</span> ₽
                        </div>
                        <div class="basket__icon _icon-basket-delete _schowIcon"
                            data-da="basket__under-${product.id},first,700">
                        </div>
                    </div>
                </div>
                <div class="basket__under basket__under-${product.id}"></div>
            </div>
        `
        });
    }
    else if (basketBody && products.count === 0) {
        basketBody.innerHTML =
            `
            <div class="basket__null">${products.message}<div>
            `
    }
}



export async function startFunctions() {
    await getBasketPropducts();
    await disabledMinus();
    await changeBusketNumbers();
    await dinamicAdapt();
}

startFunctions();