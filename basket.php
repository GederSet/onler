<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:500&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Lato:regular,700&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Rubik:regular,700,900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="app/styles/files/css/icons-font.css">
    <link rel="stylesheet" href="app/styles/files/css/style.css">
    <title>Document</title>
</head>

<body>
    <div class="wrapper">
        <?php require_once('app/html/header.php')?>
        <main class="main">
            <section class="basket">
                <div class="basket__container">
                    <div class="basket__title">Корзина</div>
                    <div class="basket__body"></div>
                </div>
            </section>
        </main>
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
                        <input name="password" type="password" class="popup__input" placeholder="Пароль">
                        <div class="popup__icon popup__icon_eye _icon-eye">
                            <span></span>
                        </div>
                    </div>
                    <button class="popup__main-button" id="buttonSignIn" type="submit">Войти</button>
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
                        <input name="password" type="password" class="popup__input" placeholder="Пароль">
                        <div class="popup__icon popup__icon_eye _icon-eye">
                            <span></span>
                        </div>
                    </div>
                    <div class="popup__rows">
                        <div class="popup__icon _icon-password"></div>
                        <input name="repeatPassword" type="password" class="popup__input"
                            placeholder="Повторите пароль">
                        <div class="popup__icon popup__icon_eye _icon-eye">
                            <span></span>
                        </div>
                    </div>
                    <button class="popup__main-button" id="buttonRegister" type="submit">Зарегистрироваться</button>
                    <button class="button popup__info" type="button">Войти</button>
                </form>
            </div>
        </div>
        <script type="module" src="app/js/app/script.js"></script>

    </div>
</body>

</html>