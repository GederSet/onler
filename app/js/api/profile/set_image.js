import { changeImage } from "./change_image.js";
import { prepareImageInput } from "../../app/pages_site/profile_page/functions/prepare_image_input.js";


document.addEventListener('click', setImage);


export async function prepareImage() {

    const image = document.querySelector('.profile__photo');
    image.addEventListener('change', () => {
        document.querySelector('.popup__image-select').classList.add('hide');
        document.querySelector('.popup__image-confirm').classList.remove('hide');
    });

}

async function setImage(e) {

    if (e.target.closest('.popup__image-confirm')) {

        const img = document.querySelector('.profile__photo').files[0];
        const id_user = localStorage.getItem('userId');

        const formData = new FormData();
        formData.append('img', img);
        formData.append('id_user', id_user);

        const url = 'http://localhost/onler_2/api/profile/set_image.php';
        const options = {
            method: 'POST',
            body: formData
        }

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw response.text();
            }
            const info = await response.text();
            console.log(info);
            await changeImage();
            await prepareImageInput();
            await prepareImage();
            document.querySelector('.popup__image-select').classList.remove('hide');
            document.querySelector('.popup__image-confirm').classList.add('hide');
        }

        catch (error) {
            console.log(error);
        }

    }

}