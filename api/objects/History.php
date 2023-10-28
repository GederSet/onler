<?php

    class History {

        private $table_name = 'history';
        private $conn;

        public $user_id;
        public $product_id;


        public function __construct($db)
        {
            $this->conn = $db;
        }

        public function getProducts()
        {

            $sql = 
            "SELECT product.id, product.name, product.price, 
            img.url, purchase_status.status, 
            history.order_date, history.purchase_date, 
            history.count
            FROM img 
            JOIN product ON img.id_product = product.id 
            JOIN history ON history.id_product = product.id
            JOIN purchase_status ON history.id_status = purchase_status.id
            WHERE history.id_user = :user_id AND img.order_img = 1
            ORDER BY history.order_date DESC";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(':user_id', $this->user_id);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);

        }

    }
    