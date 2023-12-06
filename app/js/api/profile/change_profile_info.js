import { setOrder } from "../../app/pages_site/profile_page/functions/01functions_order.js";
import { validateProfile } from "../../app/pages_site/profile_page/functions/validate_profile.js";



export async function prepareProfileForm() {

    const profileForm = document.querySelector('.profile__form');

    profileForm.addEventListener('submit', changeProfileInfo);

    async function changeProfileInfo(event) {

        event.preventDefault();

        if (validateProfile(this) === false) {
            return;
        }

        const idUser = localStorage.getItem('userId');
        const name = profileForm.querySelector('[name="name"]').value;
        const phoneNumber = profileForm.querySelector('[name="phone"]').value;
        const deliveryAddres = profileForm.querySelector('[name="addres"]').value;

        const url = 'http://localhost/onler_2/api/profile/change_profile_info.php';

        const data = {
            id_user: idUser,
            name: name,
            phone_number: phoneNumber,
            delivery_addres: deliveryAddres,
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
                throw response.text();
            }
            const info = await response.text();
            setOrder();
        }

        catch (error) {
            console.log(error);
        }

    }

}