import { createAddPanel } from "./create_add_table.js";
import { createEditPanel } from "./create_edit_table.js";
import { createAdminPanel } from "./create_admin_panel.js";



document.addEventListener('click', changePage);



function changePage(e) {

    if (e.target.closest('#allProducts')) {
        createAdminPanel();
    } else if (e.target.closest('#createProducts')) {
        createAddPanel();
    } else if (e.target.closest('#editProduct')) {
        const buttonBody = e.target.closest('.admin__tr-row');
        const idProduct = buttonBody.getAttribute('value');
        createEditPanel(idProduct);
    }

}