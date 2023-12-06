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
    $user->user_id = $data->id_user;

    $stmt = $user->getUserInfo();
    $count = $stmt->rowCount();

    if($count > 0){

        $user_info = $stmt->fetch(PDO::FETCH_ASSOC);
        http_response_code(200);
        echo json_encode($user_info, JSON_UNESCAPED_SLASHES);

    } 
    else {
        
        http_response_code(404);
        echo json_encode(['message'=>'Ваша информация не была найдена'], JSON_UNESCAPED_UNICODE);
        
    }