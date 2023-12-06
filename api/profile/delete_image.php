<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


    require_once '../config/Database.php';
    require_once '../objects/User.php';

    $database = new Database();
    $conn = $database->getConnection();

    $user = new User($conn);
    
    $data = json_decode(file_get_contents("php://input"));

    $stmt = $user->deleteImage($data->id_user);
    $count = $stmt->rowCount();

    if($count > 0){

        $image = $stmt->fetch(PDO::FETCH_ASSOC);
        http_response_code(200);
        echo json_encode($image, JSON_UNESCAPED_SLASHES);

    } 
    else {
        
        http_response_code(404);
        echo json_encode(['message'=>'Ваша картинка не была найдена'], JSON_UNESCAPED_UNICODE);
        
    }