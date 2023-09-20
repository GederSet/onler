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
                <div class="products__card" value="${product.id}">
                    <div class="products__shell-image">
                        <div class="products__image">
                            <img src="${product.url}" alt="${product.name}">
                        </div>
                    </div>
                    <div class="products__shell-info">
                        <div class="products__rows">
                            <div class="products__page" id="products__page-1">
                                <div class="products__name">${product.name}</div>
                                <div class="products__price">${product.price} ₽</div>
                            </div>
                            <div class="products__page">
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