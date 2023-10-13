import { closePopup } from "../../../functions/popup.js";
document.addEventListener('click', actionElement);

function actionElement(e) {

    if (e.target.closest('.pupup-status__button')) {
        closePopup(document.querySelector('.pupup-status'));
    }

}

