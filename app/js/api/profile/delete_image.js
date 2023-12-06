import { prepareImage } from "./set_image.js";
import { changeImage } from "./change_image.js";
import { prepareImageInput } from "../../app/pages_site/profile_page/functions/prepare_image_input.js";


document.addEventListener('click', deleteImage);


async function deleteImage(e) {

    if (e.target.closest('.popup__image-delete')) {

        const idUser = localStorage.getItem('userId');
        const url = 'http://localhost/onler_2/api/profile/delete_image.php';

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

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw await response.json();
            }
            const info = await response.json();
            await changeImage();
            await prepareImageInput();
            await prepareImage();

        }
        catch (error) {
            console.log(error);
            console.log(url);
        }

    }

}