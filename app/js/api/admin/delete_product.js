import { createAdminPanel } from "../../app/pages_site/admin_page/functions/create_admin_panel.js";


export async function deleteProduct(idProduct) {

    const url = 'http://localhost/onler_2/api/admin/delete_product.php';
    const data = {
        id_product: idProduct,
    }
    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    }

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw await response.json();
        }
        const info = await response.text();
        createAdminPanel();

    }
    catch (error) {
        console.log(error);
        console.log(url);
    }

}