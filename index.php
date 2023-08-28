<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:500&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Lato:regular&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Rubik:regular,700,900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="app/styles/files/css/icons-font.css">
    <link rel="stylesheet" href="app/styles/files/css/style.css">
    <title>Document</title>
</head>

<body>
    <div class="wrapper">
        <?php require_once('app/html/header.php')?>
        <main class="main">
            <section class="products">
                <div class="products__container">
                    <div class="products__filter filter">
                        <div class="filter__body">
                            <div class="filter__button" data-spoiler>
                                <div class="filter__icon _icon-filter"></div>
                                <div class="filter__text">Фильтр</div>
                            </div>
                            <div class="filter__page">
                                <div class="filter__options">
                                    <div class="filter__title">Цена</div>
                                    <div class="filter__rows">
                                        <input type="number" class="filter__price-min" max="100000" value="25000">
                                        <input type="number" class="filter__price-max" max="100000" value="75000">
                                    </div>
                                    <div class="filter__slider">
                                        <div class="filter__range"></div>
                                    </div>
                                    <div class="filter__range-input">
                                        <input type="range" min="1000" max="100000" value="25000"
                                            class="filter__range-min" step="1000">
                                        <input type="range" min="1000" max="100000" value="75000"
                                            class="filter__range-max" step="1000">
                                    </div>
                                    <div class="filter__spoiler spoiler">
                                        <div class="spoiler__title" data-spoiler>
                                            <div class="spoiler__name">Пол</div>
                                            <div class="spoiler__arrow _icon-arrow"></div>
                                        </div>
                                        <div class="spoiler__body">
                                            <div class="spoiler__content">
                                                <label class="spoiler__rows">
                                                    <input class="spoiler__checkbox" type="checkbox">
                                                    <div class="spoiler__true-checkbox">
                                                        <span class="spoiler__check _icon-check"></span>
                                                    </div>
                                                    <div class="spoiler__property">Мужской</div>
                                                </label>
                                                <label class="spoiler__rows">
                                                    <input class="spoiler__checkbox" type="checkbox">
                                                    <div class="spoiler__true-checkbox">
                                                        <span class="spoiler__check _icon-check"></span>
                                                    </div>
                                                    <div class="spoiler__property">Женский</div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="filter__spoiler spoiler">
                                        <div class="spoiler__title" data-spoiler>
                                            <div class="spoiler__name">Материал ремешка</div>
                                            <div class="spoiler__arrow _icon-arrow"></div>
                                        </div>
                                        <div class="spoiler__body">
                                            <div class="spoiler__content">
                                                <label class="spoiler__rows">
                                                    <input class="spoiler__checkbox" type="checkbox">
                                                    <div class="spoiler__true-checkbox">
                                                        <span class="spoiler__check _icon-check"></span>
                                                    </div>
                                                    <div class="spoiler__property">Стальной</div>
                                                </label>
                                                <label class="spoiler__rows">
                                                    <input class="spoiler__checkbox" type="checkbox">
                                                    <div class="spoiler__true-checkbox">
                                                        <span class="spoiler__check _icon-check"></span>
                                                    </div>
                                                    <div class="spoiler__property">Кожанный</div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="filter__spoiler spoiler">
                                        <div class="spoiler__title" data-spoiler>
                                            <div class="spoiler__name">Цвет ремешка</div>
                                            <div class="spoiler__arrow _icon-arrow"></div>
                                        </div>
                                        <div class="spoiler__body">
                                            <div class="spoiler__content">
                                                <label class="spoiler__rows">
                                                    <input class="spoiler__checkbox" type="checkbox">
                                                    <div class="spoiler__true-checkbox">
                                                        <span class="spoiler__check _icon-check"></span>
                                                    </div>
                                                    <div class="spoiler__property">Чёрный</div>
                                                </label>
                                                <label class="spoiler__rows">
                                                    <input class="spoiler__checkbox" type="checkbox">
                                                    <div class="spoiler__true-checkbox">
                                                        <span class="spoiler__check _icon-check"></span>
                                                    </div>
                                                    <div class="spoiler__property">Серый</div>
                                                </label>
                                                <label class="spoiler__rows">
                                                    <input class="spoiler__checkbox" type="checkbox">
                                                    <div class="spoiler__true-checkbox">
                                                        <span class="spoiler__check _icon-check"></span>
                                                    </div>
                                                    <div class="spoiler__property">Коричневый</div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="filter__spoiler spoiler">
                                        <div class="spoiler__title" data-spoiler>
                                            <div class="spoiler__name">Цвет циферблата</div>
                                            <div class="spoiler__arrow _icon-arrow"></div>
                                        </div>
                                        <div class="spoiler__body">
                                            <div class="spoiler__content">
                                                <label class="spoiler__rows">
                                                    <input class="spoiler__checkbox" type="checkbox">
                                                    <div class="spoiler__true-checkbox">
                                                        <span class="spoiler__check _icon-check"></span>
                                                    </div>
                                                    <div class="spoiler__property">Белый</div>
                                                </label>
                                                <label class="spoiler__rows">
                                                    <input class="spoiler__checkbox" type="checkbox">
                                                    <div class="spoiler__true-checkbox">
                                                        <span class="spoiler__check _icon-check"></span>
                                                    </div>
                                                    <div class="spoiler__property">Чёрный</div>
                                                </label>
                                                <label class="spoiler__rows">
                                                    <input class="spoiler__checkbox" type="checkbox">
                                                    <div class="spoiler__true-checkbox">
                                                        <span class="spoiler__check _icon-check"></span>
                                                    </div>
                                                    <div class="spoiler__property">Синий</div>
                                                </label>
                                                <label class="spoiler__rows">
                                                    <input class="spoiler__checkbox" type="checkbox">
                                                    <div class="spoiler__true-checkbox">
                                                        <span class="spoiler__check _icon-check"></span>
                                                    </div>
                                                    <div class="spoiler__property">Серебристый</div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="filter__spoiler spoiler">
                                        <div class="spoiler__title" data-spoiler>
                                            <div class="spoiler__name">Механизм</div>
                                            <div class="spoiler__arrow _icon-arrow"></div>
                                        </div>
                                        <div class="spoiler__body">
                                            <div class="spoiler__content">
                                                <label class="spoiler__rows">
                                                    <input class="spoiler__checkbox" type="checkbox">
                                                    <div class="spoiler__true-checkbox">
                                                        <span class="spoiler__check _icon-check"></span>
                                                    </div>
                                                    <div class="spoiler__property">Кварцевый</div>
                                                </label>
                                                <label class="spoiler__rows">
                                                    <input class="spoiler__checkbox" type="checkbox">
                                                    <div class="spoiler__true-checkbox">
                                                        <span class="spoiler__check _icon-check"></span>
                                                    </div>
                                                    <div class="spoiler__property">Автоматический подзавод</div>
                                                </label>
                                                <label class="spoiler__rows">
                                                    <input class="spoiler__checkbox" type="checkbox">
                                                    <div class="spoiler__true-checkbox">
                                                        <span class="spoiler__check _icon-check"></span>
                                                    </div>
                                                    <div class="spoiler__property">Механический с ручным подзаводом
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="products__body"></div>
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
                        <input name="password" type="password" class="popup__input" placeholder="Пароль"
                            autocomplete="off">
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
                    <button class="popup__main-button" id="buttonRegister" type="submit">Зарегистрироваться</button>
                    <button class="button popup__info" type="button">Войти</button>
                </form>
            </div>
        </div>
        <script type="module" src="app/js/app/script.js"></script>
        <script type="module" src="app/js/app/pages_site/home_script.js"></script>
    </div>
</body>

</html>