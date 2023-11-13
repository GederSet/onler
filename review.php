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
            <section class="review review_page">
                <div class="review__container">
                    <div class="review__body">
                        <div class="review__columns review__columns_comments"></div>
                        <div class="review__columns">
                            <div class="review__page">
                                <div class="review__shell"></div>
                                <button value="review" class="review__button-page open-popup" id="button-send">Оставить комментарий</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <?php require_once('app/html/popup_user.php')?>
        <?php require_once('app/html/popup_review.php')?>
        <?php require_once('app/html/popup_no_review.php')?>
        <script type="module" src="app/js/app/script.js"></script>
        <script type="module" src="app/js/app/pages_site/comments_page/comments_script.js"></script>
    </div>
</body>

</html>