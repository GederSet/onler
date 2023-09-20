<?php

    class Basket {

        private $table_name = 'basket';
        public $user_id;
        public $product_id;
        public $product_count;
        private $conn;

        public function __construct($db)
        {
            $this->conn = $db;
        }

        public function addProducts()
        {
            
            $sql = "SELECT id_product FROM $this->table_name WHERE id_user = :user_id AND id_product = :product_id";
            $stmt = $this->conn->prepare($sql);

            $stmt->bindParam(':user_id', $this->user_id);
            $stmt->bindParam(':product_id', $this->product_id);

            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            if(!$result){

                $sql = "INSERT INTO $this->table_name (id_user, id_product) VALUES (:user_id, :product_id)";
                $stmt = $this->conn->prepare($sql);

                $stmt->bindParam(':user_id', $this->user_id);
                $stmt->bindParam(':product_id', $this->product_id);

                $stmt->execute();

            }

        }

        public function getProducts()
        {

            $sql = 
            "SELECT product.id, product.name, product.price AS minimal_price, 
             img.url, product.stock_quantity, 
             basket.count AS basket_count,
             basket.count * price AS total_price
             FROM img 
             JOIN product ON img.id_product = product.id 
             JOIN basket ON basket.id_product = product.id 
             WHERE basket.id_user = :user_id AND img.order_img = 1";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(':user_id', $this->user_id);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);

        }

        public function getTotalPrice()
        {

            $sql = 
            "SELECT SUM(basket.count * price) AS total_price, 
             SUM(basket.count) AS count_products 
             FROM product 
             JOIN basket ON basket.id_product = product.id 
             WHERE basket.id_user = :user_id";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(':user_id', $this->user_id);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);

        }

        public function getCountProducts()
        {

            $sql = 
            "SELECT SUM(count) AS count_products FROM product 
             JOIN basket ON basket.id_product = product.id 
             WHERE basket.id_user = :user_id";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(':user_id', $this->user_id);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);

        }

        public function deleteProduct()
        {

            $sql = "DELETE FROM $this->table_name WHERE id_user = :user_id AND id_product = :product_id";
            $stmt = $this->conn->prepare($sql);
            
            $stmt->bindParam(':user_id', $this->user_id);
            $stmt->bindParam(':product_id', $this->product_id);

            if($stmt->execute()){
                return true;
            }
            return false;

        }

        public function updateCountProduct()
        {

            $sql = 
            "UPDATE $this->table_name 
             SET count = :product_count 
             WHERE id_user = :user_id AND id_product = :product_id";
            $stmt = $this->conn->prepare($sql);

            $stmt->bindParam(':user_id', $this->user_id);
            $stmt->bindParam(':product_id', $this->product_id);
            $stmt->bindParam(':product_count', $this->product_count);

            if($stmt->execute()){
                return true;
            }
            else return false;

        }

    }