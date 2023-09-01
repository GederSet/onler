export async function showProducts(minPrice, maxPrice, gender, strapMaterial, strapColor, faceColor, mechanism) {

    const url = 'http://localhost/onler_2/api/products/get_products.php';
    const data = {
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
        console.log(products);

        productsBody.innerHTML = '';
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
    catch (error) {
        productsBody.innerHTML = `<div class="products__null">${error['message']}</div>`;
        console.log(error);
    }

}