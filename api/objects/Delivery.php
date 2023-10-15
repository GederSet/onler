<?php

    class Delivery {

        private $table_name = 'delivery';
        private $conn;

        public $user_id;
        public $product_id;


        public function __construct($db)
        {
            $this->conn = $db;
        }

        public function changeProductStatus($user_id, $product_id) 
        {

            for ($status_product = 1; $status_product <= 5; $status_product++){

                $sql_change_status = 
                "UPDATE $this->table_name SET id_status = $status_product 
                WHERE user_id = $user_id AND product_id = $product_id";

                $stmt_change_status = $this->conn->prepare($sql_change_status);
                $stmt_change_status->execute();

                
                $sql_get_status = 
                "SELECT delivery_status.status FROM delivery_status
                JOIN delivery ON delivery.id_status = delivery_status.id
                WHERE delivery.id_user = $user_id AND delivery.id_product = $product_id";

                $stmt_get_status = $this->conn->prepare($sql_get_status);
                $stmt_get_status->execute();

                $result = $stmt_get_status->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($product_status, JSON_UNESCAPED_SLASHES);

                if ($status_product != 5) {
                    sleep(5);
                }

            }

        }

    }
    