import { changePassword } from "./change_password.js";
import { addInformationElement } from "../../app/functions/add_information_element.js";
import { validatePassword } from "../../app/pages_site/profile_page/functions/validate_password.js";



export async function preparePasswordForm() {

    const passwordForm = document.querySelector('.profile__password-form');

    passwordForm.addEventListener('submit', checkPassword);

    async function checkPassword(event) {

        event.preventDefault();

        if (validatePassword(this) === false) {
            return;
        }

        const name = document.querySelector('.profile__name').textContent;
        const password = passwordForm.querySelector('#current-password').value;

        const url = 'http://localhost/onler_2/api/profile/check_password.php';

        const data = {
            name: name,
            password: password,
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
                throw response.json();
            }
            const info = await response.json();
            const idUser = localStorage.getItem('userId');
            const newPassword = passwordForm.querySelector('#new-password').value;
            changePassword(idUser, newPassword);
            console.log(info);
        }

        catch (error) {
            const errorMesage = await error;
            console.error(errorMesage.message);
            const bodyError = document.querySelector('#current-password').closest('.profile__box').querySelector('.profile__sub-title').nextElementSibling;
            addInformationElement(bodyError, errorMesage.message, 'profile__error');
        }

    }

}