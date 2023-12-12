<div class="popup-user popup" id="signIn">
    <div class="popup-user__content popup__content">
        <form class="popup-user__sign" method="POST">
            <div class="popup-user__close _icon-close close-popup"></div>
            <div class="popup-user__title">Вход</div>
            <div class="popup-user__rows">
                <div class="popup-user__icon _icon-user"></div>
                <input name="name" type="text" class="popup-user__input" placeholder="Имя">
            </div>
            <div class="popup-user__rows">
                <div class="popup-user__icon _icon-password"></div>
                <input name="password" type="password" class="popup-user__input" placeholder="Пароль"
                    autocomplete="off">
                <div class="popup-user__icon popup-user__icon_eye _icon-eye password-eye">
                    <span></span>
                </div>
            </div>
            <button class="popup-user__main-button main-button" id="buttonSignIn" type="submit">Войти</button>
            <button type="button" class="popup-user__info">Зарегистрироваться</button>
        </form>
        <form class="popup-user__register" method="POST" action="#">
            <div class="popup-user__close _icon-close close-popup"></div>
            <div class="popup-user__title">Регистрация</div>
            <div class="popup-user__rows">
                <div class="popup-user__icon _icon-user"></div>
                <input name="name" type="text" class="popup-user__input" placeholder="Имя">
            </div>
            <div class="popup-user__rows">
                <div class="popup-user__icon _icon-password"></div>
                <input name="password" type="password" class="popup-user__input" placeholder="Пароль"
                    autocomplete="off">
                <div class="popup-user__icon popup-user__icon_eye _icon-eye password-eye">
                    <span></span>
                </div>
            </div>
            <div class="popup-user__rows">
                <div class="popup-user__icon _icon-password"></div>
                <input name="repeatPassword" type="password" class="popup-user__input" placeholder="Повторите пароль"
                    autocomplete="off">
                <div class="popup-user__icon popup-user__icon_eye _icon-eye password-eye">
                    <span></span>
                </div>
            </div>
            <button class="popup-user__main-button main-button" id="buttonRegister" type="submit">Зарегистрироваться</button>
            <button class="popup-user__info" type="button">Войти</button>
        </form>
    </div>
</div>