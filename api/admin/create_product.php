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

     $img_array = $_FILES;
     $img_name = [];
     for($i = 0; $i < count($img_array); $i++){

          if (!empty($img_array[$i])) {
               $tempFile = $img_array[$i]['tmp_name'];
               $targetFile = $targetDir . $img_array[$i]['name'];
               array_push($img_name, $img_array[$i]['name']);
     
               // Перемещаем загруженный файл в папку
               if (move_uploaded_file($tempFile, $targetFile)) {
                    http_response_code(200);
                    echo json_encode(['message'=>"Картинка " . $i . " успешно загружена"], JSON_UNESCAPED_UNICODE);
               } else {
                    http_response_code(404);
                    echo json_encode(['message'=>"Произошла " . $i . " ошибка при загрузке картинки"], JSON_UNESCAPED_UNICODE);
               }
          } else {
               http_response_code(404);
               echo json_encode(['message'=>"Картинка " . $i . " не была загружена"], JSON_UNESCAPED_UNICODE);
          }

     }

    $admin->addImages($img_name, $id_product);
    