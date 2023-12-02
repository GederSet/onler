import { deleteProduct } from "../../../../api/admin/delete_product.js";


document.addEventListener('click', startDeleteProduct);


function startDeleteProduct(e) {

    if (e.target.closest('.admin__delete')) {
        const idProduct = e.target.closest('.admin__tr-row').getAttribute('value');
        window.localStorage.setItem('idDeleteProduct', idProduct);
    }

    if (e.target.closest('.popup__confirm')) {
        const idProduct = window.localStorage.getItem('idDeleteProduct');
        deleteProduct(idProduct);
    }



}