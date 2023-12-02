<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    require_once '../config/Database.php';
    require_once '../objects/Admin.php';

    $database = new Database();
    $conn = $database->getConnection();

    $data = json_decode(file_get_contents("php://input"));

    $admin = new Admin($conn);
    $admin->id_product = $data->id_product;
    $stmt = $admin->getProductInfo();
    $images = $admin->getImages();
    $options = $admin->getOptionsProduct();
    $count = $stmt->rowCount();

    if($count > 0){

        $genders = $options['genders'];
        $face_colors = $options['faceColors'];
        $mechanisms = $options['mechanisms'];
        $strap_colors = $options['strapColors'];
        $strap_materials = $options['strapMaterials'];

        $products_array = $stmt->fetch(PDO::FETCH_ASSOC);
        http_response_code(200);
        echo json_encode(['images' => $images['images'], 'parameters' => $products_array, 'genders' => $genders, 'faceColors' => $face_colors, 'mechanisms' => $mechanisms, 'strapColors' => $strap_colors, 'strapMaterials' => $strap_materials], JSON_UNESCAPED_SLASHES);

    } 
    else {
        
        http_response_code(404);
        echo json_encode(['message'=>'Товары не найдены'], JSON_UNESCAPED_UNICODE);
        
    }