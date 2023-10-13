export async function showProducts(idProducts, minPrice, maxPrice, gender, strapMaterial, strapColor, faceColor, mechanism) {

    const url = 'http://localhost/onler_2/api/products/get_products.php';
    const data = {
        id_products: idProducts,
        min_price: minPrice,
        max_price: maxPrice,
        gender: gender,
        strap_material: strapMaterial,
        strap_color: strapColor,
        face_color: faceColor,
        mechanism: mechanism,
    }
    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    }

    const productsBody = document.querySelector('.products__body');

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw await response.json();
        }
        const products = await response.json();

        productsBody.innerHTML = '';
        products.forEach(product => {

            productsBody.innerHTML +=
                `
                <div class="products__card product-card" value="${product.id}">
                    <div class="product-card__shell-image" id="products__shell-image">
                        <div class="product-card__image">
                            <img src="${product.url}" alt="${product.name}">
                        </div>
                    </div>
                    <div class="product-card__shell-info" id="products__shell-info">
                        <div class="product-card__rows">
                            <div class="product-card__page" id="product-card__page-1">
                                <div class="product-card__name products__name">${product.name}</div>
                                <div class="product-card__price">${product.price} ₽</div>
                            </div>
                            <div class="product-card__page products__page">
                                <div class="products__basket _icon-basket-add _schowIcon"></div>
                            </div>
                        </div>
                    </div>
                </div>
                `
        });
    }
    catch (error) {
        productsBody.innerHTML = `<div class="products__null">${error['message']}</div>`;
        console.log(error);
    }

}