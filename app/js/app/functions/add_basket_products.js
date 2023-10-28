import { addElementDatabase } from "../../api/basket/add_basket_products.js";

document.addEventListener('click', actionElement);

function actionElement(e) {

    const userId = localStorage.getItem('userId');

    if (e.target.closest('.products__basket') && userId) {
        const productId = e.target.closest('.products__card').getAttribute('value');
        addElementDatabase(userId, productId);
    } else if (e.target.closest('.product__add') && userId) {
        const productId = document.querySelector('.info__main-img').getAttribute('id-product');
        addElementDatabase(userId, productId);
    }

}