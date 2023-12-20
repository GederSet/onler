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

    $id_user = $data->id_user;
    $password = md5($data->password);

    $stmt = $user->changePassword($id_user, $password);
    $count = $stmt->rowCount();

    if($count > 0){

        http_response_code(200);
        echo json_encode(['message'=>'Вы сменили пароль'], JSON_UNESCAPED_UNICODE);

    } 
    else {
        
        http_response_code(404);
        echo json_encode(['message'=>'Ваш новый пароль совпадает с текущим паролем'], JSON_UNESCAPED_UNICODE);
        
    }