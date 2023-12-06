import { preparePasswordForm } from "../../../../api/profile/check_password.js";


export async function createPassword() {

    const body = document.querySelector('.profile__columns_info');
    body.innerHTML = '';
    body.innerHTML =
        `
        <div class="profile__title">Пароль</div>
        <form class="profile__password-form">
            <div class="profile__box">
                <div class="profile__sub-title">Текущий пароль</div>
                <input class="profile__input profile__input-validate" id="current-password" type="text" maxlength="50">
            </div>
            <div class="profile__box">
                <div class="profile__sub-title">Новый пароль</div>
                <input class="profile__input profile__input-validate" id="new-password" name="password" type="text" maxlength="50">
            </div>
            <div class="profile__box">
                <div class="profile__sub-title">Повторите пароль</div>
                <input class="profile__input profile__input-validate" name="repeatPassword" type="text" maxlength="50">
            </div>
            <button class="profile__button">Сохранить</button>
        </form>
        `

    await preparePasswordForm();

}