import { prepareEditForm } from "../../../../api/admin/edit_product.js";
import { createEditTable } from "../../../../api/admin/create_edit_table.js";



export async function createEditPanel(idProduct) {

    const body = document.querySelector('.admin__body');
    body.innerHTML =
        `
        <div class="admin__rows">
            <button class="admin__create" id="allProducts">
                <div class="admin__create-icon"></div>
                <div class="admin__create-text">Все товары</div>
            </button>
        </div>
        <form class="admin__edit-form">
            <div class="admin__table-edit"></div>
            <button class="admin__create">
                <div class="admin__create-text">Редактировать</div>
            </button>
        </form>
        `;

    await createEditTable(idProduct);
    await prepareEditForm();

}