import { openPopup } from "./popup.js";


document.addEventListener('click', showBasketPopup);


function showBasketPopup(e) {

    const idUser = localStorage.getItem('userId');
    if (e.target.closest('.buy-product') && !idUser) {
        openPopup(e.target.closest('.buy-product'));
    }

}