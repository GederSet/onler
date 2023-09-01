<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    PHP: ini_set('display_errors', 1); 
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    require_once '../config/Database.php';
    require_once '../objects/Product.php';

    $database = new Database();
    $conn = $database->getConnection();

    $data = json_decode(file_get_contents("php://input"));

    $product = new Product($conn);

    $product->min_price = $data->min_price;
    $product->max_price = $data->max_price;

    $gender = $data->gender;
    $strap_material = $data->strap_material;
    $strap_color = $data->strap_color;
    $face_color = $data->face_color;
    $mechanism = $data->mechanism;

    $stmt = $product->getProducts($gender, $strap_material, $strap_color, $face_color, $mechanism);
    $count = $stmt->rowCount();

    if($count > 0){

        $products_array = $stmt->fetchAll(PDO::FETCH_ASSOC);
        http_response_code(200);
        echo json_encode($products_array, JSON_UNESCAPED_SLASHES);

    } 
    else {
        
        http_response_code(404);
        echo json_encode(['message'=>'Товары по выбранным фильтрам не найдены'], JSON_UNESCAPED_UNICODE);
        
    }