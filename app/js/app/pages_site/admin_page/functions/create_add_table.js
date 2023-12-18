import { createAddTable } from "../../../../api/admin/create_add_table.js";
import { prepareCreateForm } from "../../../../api/admin/create_product.js";



export async function createAddPanel() {
    console.log('add panel');
    const body = document.querySelector('.admin__body');
    body.innerHTML =
        `
        <div class="admin__rows">
            <button class="admin__create" id="allProducts">
                <div class="admin__create-icon"></div>
                <div class="admin__create-text">Все товары</div>
            </button>
        </div>
        <form class="admin__create-form">
            <div class="admin__table-edit"></div>
            <button class="admin__create">
                <div class="admin__create-text">Создать</div>
            </button>
        </form>
        `;

    await createAddTable();
    await prepareCreateForm();

}