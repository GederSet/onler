import { checkValue } from "../../app/pages_site/profile_page/functions/checkValue.js";
import { checkImage } from "../../app/pages_site/profile_page/functions/check_image.js";


export async function setProfileData(idUser) {
    const url = 'http://localhost/onler_2/api/profile/get_user_info.php';
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

    const body = document.querySelector('.profile__body');

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw await response.json();
        }
        const info = await response.json();
        body.innerHTML = '';
        body.innerHTML =
            `
            <div class="profile__columns profile__columns_image">
                <div class="profile__wrapper">
                    <label class="profile__image open-popup" value="image">
                        <div class="profile__hide">
                            <div class="profile__hide-icon _icon-photo"></div>
                        </div>
                        ${checkImage(info.image_user, info.name)}
                    </label>
                    <div class="profile__name">${info.name}</div>
                </div>
                <div class="profile__sections">
                    <button class="profile__section active" id="profilePage">Профиль</button>
                    <button class="profile__section" id="passwordPage">Пароль</button>
                </div>
            </div>
            <div class="profile__columns profile__columns_info">
                <div class="profile__title">Профиль</div>
                <form class="profile__form">
                    <div class="profile__box">
                        <div class="profile__sub-title">Имя</div>
                        <input class="profile__input profile__input-validate" type="text" name="name" value="${info.name}" maxlength="50">
                    </div>
                    <div class="profile__box">
                        <div class="profile__sub-title">Номер телефона</div>
                        <input class="profile__input" id="profile-phone" type="tel" name="phone" value="${checkValue(info.phone_number)}" maxlength="50" placeholder="+7(000)000-00-00">
                    </div>
                    <div class="profile__box">
                        <div class="profile__sub-title">Адрес пункта выдачи</div>
                        <input class="profile__input" type="text" name="addres" value="${checkValue(info.delivery_addres)}" maxlength="100">
                    </div>
                    <button class="profile__button">Сохранить</button>
                </form>
            </div>
            `
    }
    catch (error) {
        console.log(error);
    }
}