<?php


    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    // header("Content-Type: text/event-stream"); 


    require_once '../config/Database.php';
    require_once '../objects/Delivery.php';
    // require '../../vendor/autoload.php';

    $database = new Database();
    $conn = $database->getConnection();
    $delivery = new Delivery($conn);

    $data = json_decode(file_get_contents("php://input"));
    $user_id = $data->user_id;
    $id = implode(",", $data->product_id);

    $delivery->changeProductStatus($id, $user_id);


    // $loop = \React\EventLoop\Factory::create();

    // $status_product = 1;

    // $timer = $loop->addPeriodicTimer(5, function () use ($loop, $user_id, $product_id, &$status_product, &$timer) {
    //     $delivery->changeProductStatus($user_id, $product_id, $status_product);
    //     $status_product++;
    //     if ($status_product == 6) {
    //         $loop->cancelTimer($timer);
    //     }
    // });

    // $loop->run();
