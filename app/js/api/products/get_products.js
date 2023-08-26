window.addEventListener('load', showProducts);

async function showProducts() {

    const response = await fetch('http://localhost/onler_2/api/products/get_products.php');
    const products = await response.json();

    const productsBody = document.querySelector('.products__body');
    products.forEach(products => {

        productsBody.innerHTML +=
            `
            <div class="products__card" value="${products.id}">
                <div class="products__image">
                    <img src="${products.url_image}" alt="${products.name}">
                </div>
                <div class="products__rows">
                    <div class="products__page">
                        <div class="products__name">${products.name}</div>
                        <div class="products__price">${products.price} ₽</div>
                    </div>
                    <div class="products__page">
                        <div class="products__basket _icon-basket-add _schowIcon"></div>
                    </div>
                </div>
            </div>
            `
    });

}