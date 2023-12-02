import { getSearch } from "./search_admin_products.js";
import { getAdminProducts } from "../../../../api/admin/get_admin_products.js";



export function createAdminPanel() {

    const body = document.querySelector('.admin__body');
    body.innerHTML =
        `
        <div class="admin__rows">
            <div class="admin__search-body">
                <input type="text" class="admin__search-input" placeholder="Поиск">
                <div class="admin__search-button _icon-magnifier"></div>
            </div>
            <button class="admin__create" id="createProducts">
                <div class="admin__create-text">Создать товар</div>
            </button>
        </div>
        <table class="admin__table">
            <tbody>
                <tr>
                    <th class="admin__table-img-header">Картинка</th>
                    <th class="admin__table-name-header">Название</th>
                    <th class="admin__table-price-header">Цена</th>
                    <th class="admin__table-description-header">Описание</th>
                    <th class="admin__table-action-header">Действие</th>
                </tr>
            </tbody>
        </table>
        `;

    getSearch();
    getAdminProducts('%');

}

createAdminPanel();