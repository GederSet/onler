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

        public function changeProductStatus($id, $user_id) 
        {

            for ($status_product = 1; $status_product <= 5; $status_product++){

                $sql_change_status = 
                "UPDATE $this->table_name SET id_status = $status_product 
                WHERE id IN($id) AND id_user = $user_id";

                $stmt_change_status = $this->conn->prepare($sql_change_status);
                $stmt_change_status->execute();

                if ($status_product != 5) {
                    sleep(5);
                }

            }

        }

        public function getProducts()
        {

            $sql = 
            "SELECT product.id, product.name, product.price, 
            img.url, delivery_status.status, delivery.order_date, delivery.arrival_date
            FROM img 
            JOIN product ON img.id_product = product.id 
            JOIN delivery ON delivery.id_product = product.id
            JOIN delivery_status ON delivery.id_status = delivery_status.id
            WHERE delivery.id_user = :user_id AND img.order_img = 1";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(':user_id', $this->user_id);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);

        }

        public function getTotalPrice()
        {

            $sql = 
            "SELECT SUM(delivery.count * price) AS total_price 
             FROM product 
             JOIN delivery ON delivery.id_product = product.id 
             WHERE delivery.id_user = :user_id";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(':user_id', $this->user_id);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);

        }

    }
    