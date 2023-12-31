import { checkInput } from "../../app/functions/form_validation.js";
import { addInformationElement } from "../../app/functions/add_information_element.js";

const inputForm = document.querySelector('.popup-user__sign');
inputForm.addEventListener('submit', registerUser);

async function registerUser(event) {

    event.preventDefault();

    if (checkInput(this) === false) {
        return;
    }

    const name = inputForm.querySelector('[name="name"]');
    const password = inputForm.querySelector('[name="password"]');
    const parent = name.closest('.popup-user__rows');

    const url = 'http://localhost/onler_2/api/user/login_user.php';
    const data = {
        name: name.value,
        password: password.value,
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
        console.log(info);
        localStorage.setItem('userId', info.user_id);
        addInformationElement(parent, 'Вы вошли в аккаунт', 'form-successfully');
        location.reload();
    }

    catch (error) {
        const errorMesage = await error;
        console.error(errorMesage.message);
        addInformationElement(parent, errorMesage.message, 'form-error');
    }

}