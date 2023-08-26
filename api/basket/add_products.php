<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


    require_once '../config/Database.php';
    require_once '../objects/Basket.php';

    $database = new Database();
    $conn = $database->getConnection();

    $basket = new Basket($conn);

    $data = json_decode(file_get_contents("php://input"));

    $basket->user_id = $data->user_id;
    $basket->product_id = $data->product_id;

    $basket->addProducts();
    
    http_response_code(200);
    echo json_encode(array("message" => "Товар добавлен в корзину"), JSON_UNESCAPED_UNICODE);

