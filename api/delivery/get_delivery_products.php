<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


    require_once '../config/Database.php';
    require_once '../objects/Delivery.php';

    $database = new Database();
    $conn = $database->getConnection();

    $delivery = new Delivery($conn);
    
    $data = json_decode(file_get_contents("php://input"));

    $delivery->user_id = $data->id_user;

    if($delivery->getProducts()){
        $result = $delivery->getProducts();
        $price_info = $delivery->getTotalPrice();
        http_response_code(200);
        echo json_encode([$result, $price_info], JSON_UNESCAPED_SLASHES);
    }
    else {
        http_response_code(200);
        echo json_encode(array("message" => "Вы еще не покупали товаров", "count" => 0), JSON_UNESCAPED_UNICODE);
    }