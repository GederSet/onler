<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


    require_once '../config/Database.php';
    require_once '../objects/History.php';

    $database = new Database();
    $conn = $database->getConnection();

    $history = new History($conn);
    
    $data = json_decode(file_get_contents("php://input"));

    $history->product_id = $data->id_product;

    if($history->getProductScore()){
        $result = $history->getProductScore();
        http_response_code(200);
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }
    else {
        http_response_code(404);
        echo json_encode(array("message" => "Ещё никто не ставил оценку"), JSON_UNESCAPED_UNICODE);
    }