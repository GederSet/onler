import { createAddPanel } from "../../app/pages_site/admin_page/functions/create_add_table.js";
import { validateAdminFormErrors } from "../../app/pages_site/admin_page/functions/validation_admin_form_errors.js";


export async function prepareCreateForm() {

    const createProductForm = document.querySelector('.admin__create-form');

    createProductForm.addEventListener('submit', createProduct);

    async function createProduct(event) {

        event.preventDefault();

        if (validateAdminFormErrors(this) === false) {
            return;
        }

        const name = createProductForm.querySelector('[name="name"]').value;
        const inputImgArray = document.querySelectorAll('.admin__file');
        const price = createProductForm.querySelector('[name="price"]').value;
        const description = createProductForm.querySelector('[name="description"]').value;
        const weight = createProductForm.querySelector('[name="weight"]').value;
        const watertight = createProductForm.querySelector('[name="watertight"]').value;
        const stock_quantity = createProductForm.querySelector('[name="stock_quantity"]').value;
        const case_glass = createProductForm.querySelector('[name="case_glass"]').value;
        const case_width = createProductForm.querySelector('[name="case_width"]').value;
        const case_length = createProductForm.querySelector('[name="case_length"]').value;
        const case_thickness = createProductForm.querySelector('[name="case_thickness"]').value;
        const stones_mechanism = createProductForm.querySelector('[name="stones_mechanism"]').value;
        const caliber_diametr_mechanism = createProductForm.querySelector('[name="caliber_diametr_mechanism"]').value;
        const id_mechanism = createProductForm.querySelector('[name="id_mechanism"]').getAttribute('value');
        const id_strap_color = createProductForm.querySelector('[name="id_strap_color"]').getAttribute('value');
        const id_strap_material = createProductForm.querySelector('[name="id_strap_material"]').getAttribute('value');
        const id_face_color = createProductForm.querySelector('[name="id_face_color"]').getAttribute('value');
        const id_gender = createProductForm.querySelector('[name="id_gender"]').getAttribute('value');

        let formData = new FormData();
        for (let i = 0; i < inputImgArray.length; i++) {
            if (inputImgArray[i].files[0] != undefined) {
                formData.append([i], inputImgArray[i].files[0]);
            }
        }
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


        const url = 'http://localhost/onler_2/api/admin/create_product.php';
        const options = {
            method: 'POST',
            body: formData
        }

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw response.text();
            }
            const info = await response.json();
            createAddPanel();
            console.log(info);
        }

        catch (error) {
            console.log(error);
            console.log(url);
        }

    }

}