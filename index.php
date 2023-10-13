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
                            <div class="filter__button main-button" data-spoiler>
                                <div class="filter__icon _icon-filter"></div>
                                <div class="filter__text">Фильтры</div>
                            </div>
                            <div class="filter__page">
                                <div class="filter__options">
                                    <div class="filter__title">Цена</div>
                                    <div class="filter__rows">
                                        <input type="number" class="filter__price-min" max="100000" value="25000" placeholder="1000">
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
                                    <div class="filter__spoiler spoiler" id="filter-gender">
                                        <div class="spoiler__title" data-spoiler>
                                            <div class="spoiler__name">Пол</div>
                                            <div class="spoiler__arrow _icon-arrow"></div>
                                        </div>
                                        <div class="spoiler__body">
                                            <div class="spoiler__content">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="filter__spoiler spoiler" id="filter-strap-material">
                                        <div class="spoiler__title" data-spoiler>
                                            <div class="spoiler__name">Материал ремешка</div>
                                            <div class="spoiler__arrow _icon-arrow"></div>
                                        </div>
                                        <div class="spoiler__body">
                                            <div class="spoiler__content">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="filter__spoiler spoiler" id="filter-strap-color">
                                        <div class="spoiler__title" data-spoiler>
                                            <div class="spoiler__name">Цвет ремешка</div>
                                            <div class="spoiler__arrow _icon-arrow"></div>
                                        </div>
                                        <div class="spoiler__body">
                                            <div class="spoiler__content"></div>
                                        </div>
                                    </div>
                                    <div class="filter__spoiler spoiler" id="filter-face-color">
                                        <div class="spoiler__title" data-spoiler>
                                            <div class="spoiler__name">Цвет циферблата</div>
                                            <div class="spoiler__arrow _icon-arrow"></div>
                                        </div>
                                        <div class="spoiler__body">
                                            <div class="spoiler__content"></div>
                                        </div>
                                    </div>
                                    <div class="filter__spoiler spoiler" id="filter-mechanism">
                                        <div class="spoiler__title" data-spoiler>
                                            <div class="spoiler__name">Механизм</div>
                                            <div class="spoiler__arrow _icon-arrow"></div>
                                        </div>
                                        <div class="spoiler__body">
                                            <div class="spoiler__content"></div>
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
        <?php require_once('app/html/popup_user.php')?>
        <script type="module" src="app/js/app/script.js"></script>
        <script type="module" src="app/js/app/pages_site/home_page/home_script.js"></script>
    </div>
</body>

</html>