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
        <?php require_once('app/html/preloader.php')?>
        <?php require_once('app/html/header.php')?>
        <main class="main main__return">
            <section class="return">
                <div class="return__container">
                    <div class="return__hat">
                        <nav class="menu-info">
                            <ul class="menu-info__list">
                                <li class="menu-info__items">
                                    <a href="delivery.php" class="menu-info__links">Доставки</a>
                                </li>
                                <li class="menu-info__items">
                                    <a href="history.php" class="menu-info__links">Покупки</a>
                                </li>
                                <li class="menu-info__items active">
                                    <a href="return.php" class="menu-info__links">Возвраты</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="return__body" id="products-body"></div>
                </div>
            </section>
        </main>
        <?php require_once('app/html/popup_user.php')?>
        <script type="module" src="app/js/app/script.js"></script>
        <script type="module" src="app/js/app/pages_site/return_page/return_script.js"></script>
    </div>
</body>

</html>