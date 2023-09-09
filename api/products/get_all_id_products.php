<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    require_once '../config/Database.php';
    require_once '../objects/Product.php';

    $database = new Database();
    $conn = $database->getConnection();

    $data = json_decode(file_get_contents("php://input"));

    $product = new Product($conn);
    $stmt = $product->getAllIdProducts();
    $count = $stmt->rowCount();

    if($count > 0){

        $id_products_array = $stmt->fetchAll(PDO::FETCH_ASSOC);
        http_response_code(200);
        echo json_encode($id_products_array, JSON_UNESCAPED_UNICODE);

    } 
    else {
        
        http_response_code(404);
        echo json_encode(['message'=>'id товаров не найдены'], JSON_UNESCAPED_UNICODE);
        
    }