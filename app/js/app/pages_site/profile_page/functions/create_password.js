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
                <div class="profile__rows">
                    <div class="profile__hide"></div>
                    <input type="password" id="current-password" class="profile__input-password profile__input-validate" autocomplete="off" maxlength="50">
                    <div class="profile__icon profile__icon_eye _icon-eye password-eye">
                        <span></span>
                    </div>
                </div>
            </div>
            <div class="profile__box">
                <div class="profile__sub-title">Новый пароль</div>
                    <div class="profile__rows">
                        <input name="password" type="password" id="new-password" class="profile__input-password profile__input-validate" autocomplete="off" maxlength="50">
                        <div class="profile__icon profile__icon_eye _icon-eye password-eye">
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="profile__box">
                <div class="profile__sub-title">Повторите пароль</div>
                    <div class="profile__rows">
                        <input name="repeatPassword" type="password" class="profile__input-password profile__input-validate" autocomplete="off" maxlength="50">
                        <div class="profile__icon profile__icon_eye _icon-eye password-eye">
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
            <button class="profile__button">Сохранить</button>
        </form>
        `

    await preparePasswordForm();

}