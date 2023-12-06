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
        createPassword();
        console.log(info);
    }

    catch (error) {
        const errorMesage = await error;
        console.error(errorMesage.message);
        const bodyError = document.querySelector('#new-password');
        addInformationElement(bodyError, errorMesage.message, 'profile__error');
    }

}
