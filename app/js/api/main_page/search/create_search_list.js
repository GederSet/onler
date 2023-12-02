export async function getSearchProducts(nameProduct) {

    const url = 'http://localhost/onler_2/api/search/get_search_products.php';
    const data = {
        name_product: nameProduct.trim(),
    }
    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    }

    const searchBody = document.querySelector('.search__body');

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw await response.json();
        }
        const products = await response.json();

        searchBody.innerHTML = '';
        products.forEach(product => {

            searchBody.innerHTML +=
                `
                <div class="search__shell" value="${product.id}">
                    <div class="search__row">
                        <div class="search__img">
                            <img src="app/img/01 main page/${product.url}" alt="${product.name}">
                        </div>
                        <div class="search__column">
                            <div class="search__name">${product.name}</div>
                            <div class="search__price">${product.price} ₽</div>
                        </div>
                    </div>
                </div>
                `
        });
    }
    catch (error) {
        searchBody.innerHTML = `<div class="search__zero">${error['message']}</div>`;
        console.log(error);
    }

}