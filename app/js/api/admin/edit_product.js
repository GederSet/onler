import { createAdminPanel } from "../../app/pages_site/admin_page/functions/create_admin_panel.js";
import { validateAdminFormErrors } from "../../app/pages_site/admin_page/functions/validation_admin_form_errors.js";


export async function prepareEditForm() {

    const editProductForm = document.querySelector('.admin__edit-form');

    editProductForm.addEventListener('submit', editProduct);

    async function editProduct(event) {

        event.preventDefault();

        if (validateAdminFormErrors(this) === false) {
            return;
        }

        const id = editProductForm.querySelector('[name="id"]').getAttribute('value');
        const name = editProductForm.querySelector('[name="name"]').value;
        const img_1 = editProductForm.querySelector('[name="img_1"]').files[0];
        const img_2 = editProductForm.querySelector('[name="img_2"]').files[0];
        const img_3 = editProductForm.querySelector('[name="img_3"]').files[0];
        const img_not_edit_1 = editProductForm.querySelector('#img_text_1').getAttribute('value');
        const img_not_edit_2 = editProductForm.querySelector('#img_text_2').getAttribute('value');
        const img_not_edit_3 = editProductForm.querySelector('#img_text_3').getAttribute('value');
        const price = editProductForm.querySelector('[name="price"]').value;
        const description = editProductForm.querySelector('[name="description"]').value;
        const weight = editProductForm.querySelector('[name="weight"]').value;
        const watertight = editProductForm.querySelector('[name="watertight"]').value;
        const stock_quantity = editProductForm.querySelector('[name="stock_quantity"]').value;
        const case_glass = editProductForm.querySelector('[name="case_glass"]').value;
        const case_width = editProductForm.querySelector('[name="case_width"]').value;
        const case_length = editProductForm.querySelector('[name="case_length"]').value;
        const case_thickness = editProductForm.querySelector('[name="case_thickness"]').value;
        const stones_mechanism = editProductForm.querySelector('[name="stones_mechanism"]').value;
        const caliber_diametr_mechanism = editProductForm.querySelector('[name="caliber_diametr_mechanism"]').value;
        const id_mechanism = editProductForm.querySelector('[name="id_mechanism"]').getAttribute('value');
        const id_strap_color = editProductForm.querySelector('[name="id_strap_color"]').getAttribute('value');
        const id_strap_material = editProductForm.querySelector('[name="id_strap_material"]').getAttribute('value');
        const id_face_color = editProductForm.querySelector('[name="id_face_color"]').getAttribute('value');
        const id_gender = editProductForm.querySelector('[name="id_gender"]').getAttribute('value');

        let formData = new FormData();
        formData.append('id_product', id);
        formData.append('img_1', img_1);
        formData.append('img_2', img_2);
        formData.append('img_3', img_3);
        formData.append('img_not_edit_1', img_not_edit_1);
        formData.append('img_not_edit_2', img_not_edit_2);
        formData.append('img_not_edit_3', img_not_edit_3);
        formData.append('name', name);
        formData.append('price', price);
        formData.append('description', description);
        formData.append('weight', weight);
        formData.append('watertight', watertight);
        formData.append('stock_quantity', stock_quantity);
        formData.append('case_glass', case_glass);
        formData.append('case_width', case_width);
        formData.append('case_length', case_length);
        formData.append('case_thickness', case_thickness);
        formData.append('stones_mechanism', stones_mechanism);
        formData.append('caliber_diametr_mechanism', caliber_diametr_mechanism);
        formData.append('id_mechanism', id_mechanism);
        formData.append('id_strap_color', id_strap_color);
        formData.append('id_strap_material', id_strap_material);
        formData.append('id_face_color', id_face_color);
        formData.append('id_gender', id_gender);


        const url = 'http://localhost/onler_2/api/admin/edit_product.php';
        const options = {
            method: 'POST',
            body: formData
        }

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw response.text();
            }
            const info = await response.text();
            console.log(info);
            createAdminPanel();
        }

        catch (error) {
            console.log(error);
        }

    }

}