import { returnProduct } from "../../../../api/history/return_product.js";


document.addEventListener('click', prepareReturn);


function prepareReturn(e) {

    if (e.target.closest('.history__menu')) {

        const idUser = localStorage.getItem('userId');
        const idProduct = e.target.closest('.history__card-body').getAttribute('value');

        returnProduct(idUser, idProduct);

    }

}