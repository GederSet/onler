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
        <main class="main">
            <section class="profile">
                <div class="profile__container">
                    <div class="profile__body"></div>
                </div>
            </section>
        </main>
        <?php require_once('app/html/popup_user.php')?>
        <?php require_once('app/html/popup_set_image.php')?>
        <script type="module" src="app/js/app/script.js"></script>
        <script type="module" src="app/js/app/pages_site/profile_page/profile_script.js"></script>
        <script src="https://unpkg.com/imask"></script>
    </div>
</body>

</html>