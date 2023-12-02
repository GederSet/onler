export async function getAdminProducts(nameProduct) {

    const url = 'http://localhost/onler_2/api/admin/get_admin_products.php';
    const data = {
        name_product: nameProduct,
    }
    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    }

    const table = document.querySelector('tbody');

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw await response.json();
        }
        const products = await response.json();

        table.innerHTML =
            `
            <tr>
                <th class="admin__table-img-header">Картинка</th>
                <th class="admin__table-name-header">Название</th>
                <th class="admin__table-price-header">Цена</th>
                <th class="admin__table-description-header">Описание</th>
                <th class="admin__table-action-header">Действие</th>
            </tr>
            `;
        products.forEach(product => {

            table.innerHTML +=
                `
                <tr value="${product.id}" class="admin__tr-row">
                    <td class="admin__image">
                        <img src="app/img/01 main page/${product.url}" alt="${product.name}">
                    </td>
                    <td class="admin__name-product">${product.name}</td>
                    <td class="admin__price">${product.price} ₽</td>
                    <td class="admin__description">
                        <div class="admin__description-text">${product.description}</div>
                    </td>
                    <td class="admin__table-buttons">
                        <button class="admin__edit" id="editProduct">
                            <div class="admin__create-text">Редактировать</div>
                        </button>
                        <button class="admin__delete open-popup" value="warning">
                            <div class="admin__create-text">Удалить</div>
                        </button>
                    </td>
                </tr>
                `
        });
    }
    catch (error) {
        table.innerHTML = `<div class="products__null">${error['message']}</div>`;
        console.log(error);
        console.log(url);
    }

}