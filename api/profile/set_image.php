<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    require_once '../config/Database.php';
    require_once '../objects/User.php';

    $database = new Database();
    $conn = $database->getConnection();

    $user = new User($conn);

     // Добавление картинок в папку с картинками

     $targetDir = "../../app/img/02 profile/"; // Папка, в которую будут сохраняться загруженные картинки

     if (!empty($_FILES['img'])) {
          $tempFile = $_FILES['img']['tmp_name'];
          $targetFile = $targetDir . $_FILES['img']['name'];

          // Перемещаем загруженный файл в папку
          if (move_uploaded_file($tempFile, $targetFile)) {
               http_response_code(200);
               echo json_encode(['message'=>'Картинка 1 успешно загружена'], JSON_UNESCAPED_UNICODE);
          } else {
               http_response_code(404);
               echo json_encode(['message'=>'Произошла 1 ошибка при загрузке картинки'], JSON_UNESCAPED_UNICODE);
          }
     } else {
          http_response_code(404);
          echo json_encode(['message'=>'Картинка 1 не была загружена'], JSON_UNESCAPED_UNICODE);
     }

    $id_user = $_POST['id_user'];
    $img = $_FILES['img']['name'];

    $user->addImages($img, $id_user);
    