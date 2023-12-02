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

    $admin = new Admin($conn);
    $options = $admin->getOptionsProduct();

    if($options){

        $genders = $options['genders'];
        $face_colors = $options['faceColors'];
        $mechanisms = $options['mechanisms'];
        $strap_colors = $options['strapColors'];
        $strap_materials = $options['strapMaterials'];

        http_response_code(200);
        echo json_encode(['genders' => $genders, 'faceColors' => $face_colors, 'mechanisms' => $mechanisms, 'strapColors' => $strap_colors, 'strapMaterials' => $strap_materials], JSON_UNESCAPED_UNICODE);

    } 
    else {
        
        http_response_code(404);
        echo json_encode(['message'=>'Товары не найдены'], JSON_UNESCAPED_UNICODE);
        
    }