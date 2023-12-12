import { addInformationElement } from "../../app/functions/add_information_element.js";
import { createPassword } from "../../app/pages_site/profile_page/functions/create_password.js";


export async function changePassword(idUser, password) {

    const url = 'http://localhost/onler_2/api/profile/change_password.php';

    const data = {
        id_user: idUser,
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
        const bodySuccess = document.querySelector('#current-password').closest('.profile__box').querySelector('.profile__sub-title').nextElementSibling;
        addInformationElement(bodySuccess, info.message, 'profile__successfully');
        createPassword();
        console.log(info);
    }

    catch (error) {
        const errorMesage = await error;
        console.error(errorMesage.message);
        const bodyError = document.querySelector('#new-password').closest('.profile__box').querySelector('.profile__sub-title').nextElementSibling;
        addInformationElement(bodyError, errorMesage.message, 'profile__error');
    }

}
