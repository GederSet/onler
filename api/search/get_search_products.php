<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    require_once '../config/Database.php';
    require_once '../objects/Search.php';

    $database = new Database();
    $conn = $database->getConnection();

    $data = json_decode(file_get_contents("php://input"));

    $search = new Search($conn);
    $stmt = $search->getSearchProducts($data->name_product);
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