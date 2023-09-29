<div class="popup" id="signIn">
    <div class="popup__content">
        <form class="popup__sign" method="POST">
            <div class="popup__close _icon-close close-popup"></div>
            <div class="popup__title">Вход</div>
            <div class="popup__rows">
                <div class="popup__icon _icon-user"></div>
                <input name="name" type="text" class="popup__input" placeholder="Имя">
            </div>
            <div class="popup__rows">
                <div class="popup__icon _icon-password"></div>
                <input name="password" type="password" class="popup__input" placeholder="Пароль"
                    autocomplete="off">
                <div class="popup__icon popup__icon_eye _icon-eye">
                    <span></span>
                </div>
            </div>
            <button class="popup__main-button main-button" id="buttonSignIn" type="submit">Войти</button>
            <button type="button" class="popup__info">Зарегистрироваться</button>
        </form>
        <form class="popup__register" method="POST" action="#">
            <div class="popup__close _icon-close close-popup"></div>
            <div class="popup__title">Регистрация</div>
            <div class="popup__rows">
                <div class="popup__icon _icon-user"></div>
                <input name="name" type="text" class="popup__input" placeholder="Имя">
            </div>
            <div class="popup__rows">
                <div class="popup__icon _icon-password"></div>
                <input name="password" type="password" class="popup__input" placeholder="Пароль"
                    autocomplete="off">
                <div class="popup__icon popup__icon_eye _icon-eye">
                    <span></span>
                </div>
            </div>
            <div class="popup__rows">
                <div class="popup__icon _icon-password"></div>
                <input name="repeatPassword" type="password" class="popup__input" placeholder="Повторите пароль"
                    autocomplete="off">
                <div class="popup__icon popup__icon_eye _icon-eye">
                    <span></span>
                </div>
            </div>
            <button class="popup__main-button main-button" id="buttonRegister" type="submit">Зарегистрироваться</button>
            <button class="button popup__info" type="button">Войти</button>
        </form>
    </div>
</div>