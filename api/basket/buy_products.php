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

    $data = json_decode(file_get_contents("php://input"));

    $basket = new Basket($conn);

    $code = $data->code;
    $user_id = $data->user_id;
    $id_product = $data->product_id;
    $id_new_product = $data->new_product_id;


    if($basket->buyProducts($user_id, $id_product, $id_new_product, $code)){

        http_response_code(200);
        echo json_encode(['message' => 'Товары куплены'], JSON_UNESCAPED_UNICODE);

    }
    else {

        http_response_code(404);
        echo json_encode(['message' => 'Товары не куплены'], JSON_UNESCAPED_UNICODE);

    }