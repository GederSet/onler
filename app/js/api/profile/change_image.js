import { checkImage } from "../../app/pages_site/profile_page/functions/check_image.js";



export async function changeImage() {

    const idUser = localStorage.getItem('userId');
    const url = 'http://localhost/onler_2/api/profile/get_image.php';

    const data = {
        id_user: idUser,
    }

    const options = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(data)
    }

    const imageBody = document.querySelector('.profile__image');

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw await response.json();
        }
        const info = await response.json();

        imageBody.innerHTML = '';
        imageBody.innerHTML =
            `
            <div class="profile__hide">
                <div class="profile__hide-icon _icon-photo"></div>
            </div>
            ${checkImage(info.image_user, info.name)}
            `;

    }
    catch (error) {
        console.log(error);
        console.log(url);
    }

}