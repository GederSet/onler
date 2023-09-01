<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    
    require_once '../config/Database.php';
    require_once '../objects/Filter.php';

    $database = new Database();
    $conn = $database->getConnection();

    $filter = new Filter($conn);
    $stmt = $filter->getMaxPriceProduct();
    $count = $stmt->rowCount();

    if($count > 0){

        $max_price = $stmt->fetch(PDO::FETCH_ASSOC);
        http_response_code(200);
        echo json_encode($max_price, JSON_UNESCAPED_UNICODE);

    } 
    else {
        
        http_response_code(404);
        echo json_encode(['message'=>'Товар не найден'], JSON_UNESCAPED_UNICODE);
        
    }