import { getAdminProducts } from "../../../../api/admin/get_admin_products.js";


export function getSearch() {
    const searchInput = document.querySelector('.admin__search-input');

    if (searchInput) {
        searchInput.addEventListener('input', searchProducts);
    }


    function searchProducts() {
        if (searchInput.value.length > 0) {
            getAdminProducts(`%${searchInput.value}%`);
        } else if (searchInput.value.length === 0) {
            getAdminProducts(`%`);
        }
    }
}