<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Montserrat:500&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Inter:regular,500&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Rubik:regular,700,900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="app/styles/files/css/icons-font.css">
    <link rel="stylesheet" href="app/styles/files/css/style.css">
    <title>Document</title>
</head>

<body>
    <div class="wrapper">
        <?php require_once('app/html/header.php')?>
        <main class="main">
            <section class="delivery">
                <div class="delivery__container">
                    <div class="delivery__hat">
                        <nav class="menu-info">
                            <ul class="menu-info__list">
                                <li class="menu-info__items active">
                                    <a href="" class="menu-info__links">Доставки</a>
                                </li>
                                <li class="menu-info__items">
                                    <a href="" class="menu-info__links">Покупки</a>
                                </li>
                                <li class="menu-info__items">
                                    <a href="" class="menu-info__links">Возвраты</a>
                                </li>
                            </ul>
                        </nav>
                        <div class="delivery__box">
                            <div class="delivery__rows delivery-total-price"></div>
                            <div class="delivery__rows">
                                <div class="delivery__text">Код получения:</div>
                                <div class="delivery__text">90520</div>
                            </div>
                        </div>
                    </div>
                    <div class="delivery__body"></div>
                </div>
            </section>
        </main>
        <?php require_once('app/html/popup_user.php')?>
        <?php require_once('app/html/popup_order_status.php')?>
        <script type="module" src="app/js/app/script.js"></script>
        <script type="module" src="app/js/app/pages_site/delivery_page/delivery_script.js"></script>
    </div>
</body>

</html>