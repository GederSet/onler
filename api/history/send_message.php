<?php

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


    require_once '../config/Database.php';
    require_once '../objects/History.php';

    $database = new Database();
    $conn = $database->getConnection();

    $history = new History($conn);
    
    $data = json_decode(file_get_contents("php://input"));

    $history->user_id = $data->id_user;
    $history->product_id = $data->id_product;
    $history->user_rating = $data->user_rating;
    $comment = $data->comment;

    $history->sendComment($comment);
    