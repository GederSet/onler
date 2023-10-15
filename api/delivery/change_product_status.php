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

    $data = json_decode(file_get_contents("php://input"));

    $delivery = new Delivery($conn);
    $user_id = $data->user_id;
    $product_id = $data->product_id;

    $thread = new Thread("changeProductStatus", $user_id, $product_id);

    $stmt = $thread->start();
    // $count = $stmt->rowCount();

    // if($count > 0){

    //     $product_status = $stmt->fetchAll(PDO::FETCH_ASSOC);
    //     http_response_code(200);
    //     echo json_encode($product_status, JSON_UNESCAPED_SLASHES);

    // } 
    // else {
        
    //     http_response_code(404);
    //     echo json_encode(['message'=>'Товары по выбранным фильтрам не найдены'], JSON_UNESCAPED_UNICODE);
        
    // }