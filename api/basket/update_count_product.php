<?php 

    header("Access-Control-Allow-Origin: *");   
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: PATCH");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    require_once '../config/Database.php';
    require_once '../objects/Basket.php';

    $database = new Database();
    $conn = $database->getConnection();

    $data = json_decode(file_get_contents("php://input"));

    $basket = new Basket($conn);
    $basket->user_id = $data->user_id;
    $basket->product_id = $data->product_id;
    $basket->product_count = $data->product_count;
    if($basket->updateCountProduct()){

        http_response_code(200);
        echo json_encode(["message" => "Количество товара изменено"], JSON_UNESCAPED_UNICODE);

    }
    else {

        http_response_code(500);
        echo json_encode(["message" => "Количество товара не было изменено"], JSON_UNESCAPED_UNICODE);

    }
    