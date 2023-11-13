import { closePopup } from "./popup.js";
import { sendComment } from "../../api/functions/send_comment.js";

document.addEventListener('click', getCommentData);

function getCommentData(e) {
    if (e.target.closest('.pupup-review__button')) {

        const popup = e.target.closest('.popup');
        const button = document.querySelector('.pupup-review__button');
        const userRating = document.querySelector('.pupup-review__stars').getAttribute('value');
        const comment = document.querySelector('.pupup-review__text').value.trim();
        const idUser = localStorage.getItem('userId');
        const idProduct = localStorage.getItem('idSelectedProduct');
        if (userRating && !button.classList.contains('disabled')) {
            sendComment(idUser, idProduct, userRating, comment);
            closePopup(popup);
        }
        else {
            console.log('выберите оценку');
        }

    }
}