<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    require_once '../config/Database.php';
    require_once '../objects/Admin.php';

    $database = new Database();
    $conn = $database->getConnection();

    $name = $_POST['name'];
    $price = $_POST['price'];
    $description = $_POST['description'];
    $weight = $_POST['weight'];
    $water_tight = $_POST['watertight'];
    $stock_quantity = $_POST['stock_quantity'];
    $case_glass = $_POST['case_glass'];
    $case_width = $_POST['case_width'];
    $case_length = $_POST['case_length'];
    $case_thickness = $_POST['case_thickness'];
    $stones_mechanism = $_POST['stones_mechanism'];
    $caliber_diametr_mechanism = $_POST['caliber_diametr_mechanism'];
    $id_mechanism = $_POST['id_mechanism'];
    $id_strap_color = $_POST['id_strap_color'];
    $id_strap_material = $_POST['id_strap_material'];
    $id_face_color = $_POST['id_face_color'];
    $id_gender = $_POST['id_gender'];

    $admin = new Admin($conn);
    $id_product = $admin->createProduct($name, $price, $description, $weight, $water_tight, 
            $stock_quantity, $case_glass, $case_width, $case_length, $case_thickness, 
            $stones_mechanism, $caliber_diametr_mechanism, $id_mechanism, $id_strap_color, 
            $id_strap_material, $id_face_color, $id_gender);


     // Добавление картинок в папку с картинками

     $targetDir = "../../app/img/01 main page/"; // Папка, в которую будут сохраняться загруженные картинки

     if (!empty($_FILES['img_1'])) {
          $tempFile = $_FILES['img_1']['tmp_name'];
          $targetFile = $targetDir . $_FILES['img_1']['name'];

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

     if (!empty($_FILES['img_2'])) {
          $tempFile = $_FILES['img_2']['tmp_name'];
          $targetFile = $targetDir . $_FILES['img_2']['name'];

          // Перемещаем загруженный файл в папку
          if (move_uploaded_file($tempFile, $targetFile)) {
               http_response_code(200);
               echo json_encode(['message'=>'Картинка 2 успешно загружена'], JSON_UNESCAPED_UNICODE);
          } else {
               http_response_code(404);
               echo json_encode(['message'=>'Произошла 2 ошибка при загрузке картинки'], JSON_UNESCAPED_UNICODE);
          }
     } else {
          http_response_code(404);
          echo json_encode(['message'=>'Картинка 2 не была загружена'], JSON_UNESCAPED_UNICODE);
     }

     if (!empty($_FILES['img_3'])) {
          $tempFile = $_FILES['img_3']['tmp_name'];
          $targetFile = $targetDir . $_FILES['img_3']['name'];

          // Перемещаем загруженный файл в папку
          if (move_uploaded_file($tempFile, $targetFile)) {
               http_response_code(200);
               echo json_encode(['message'=>'Картинка 3 успешно загружена'], JSON_UNESCAPED_UNICODE);
          } else {
               http_response_code(404);
               echo json_encode(['message'=>'Произошла 3 ошибка при загрузке картинки'], JSON_UNESCAPED_UNICODE);
          }
     } else {
          http_response_code(404);
          echo json_encode(['message'=>'Картинка 3 не была загружена'], JSON_UNESCAPED_UNICODE);
     }

     $img_1 = $_FILES['img_1']['name'];
     $img_2 = $_FILES['img_2']['name'];
     $img_3 = $_FILES['img_3']['name'];

    $admin->addImages($img_1, $img_2, $img_3, $id_product);
    