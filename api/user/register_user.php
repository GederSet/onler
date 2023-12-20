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

    $user->name = $data->name;
    $user->password = md5($data->password);

    if(!$user->findUser()){
        if ($user->registerUser()) {

            $id_user = $user->findUser()['id'];
    
            http_response_code(201);
            echo json_encode(array("message" => "Пользователь добавлен", "user_id" => "$id_user"), JSON_UNESCAPED_UNICODE);
    
        }
    }

    else {
        http_response_code(404);
        echo json_encode(array("message" => "Пользователь уже существует"), JSON_UNESCAPED_UNICODE);
    }