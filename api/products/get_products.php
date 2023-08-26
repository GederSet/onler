<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    require_once '../config/Database.php';
    require_once '../objects/Product.php';

    $database = new Database();
    $conn = $database->getConnection();

    $product = new Product($conn);
    $stmt = $product->getProducts();
    $count = $stmt->rowCount();

    if($count > 0){

        $products_array = $stmt->fetchAll(PDO::FETCH_ASSOC);
        http_response_code(200);
        echo json_encode($products_array, JSON_UNESCAPED_SLASHES);

    } 
    else {
        
        http_response_code(404);
        echo json_encode(['message'=>'Товары не найдены'], JSON_UNESCAPED_UNICODE);
        
    }