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


        public function buyProducts($user_id, $id_product, $id_new_product, $code)
        {


            $sql_create_temporary = 
            "CREATE TEMPORARY TABLE temp_ids (id BIGINT, id_product BIGINT);";

            $stmt_create = $this->conn->prepare($sql_create_temporary);
            $stmt_create->execute();

            for($i = 0; $i < count($id_product); $i++){

                $sql_insert_temporary = 
                "INSERT INTO temp_ids (id, id_product) VALUES ($id_product[$i], $id_new_product[$i])";

                $stmt_insert = $this->conn->prepare($sql_insert_temporary);
                $stmt_insert->execute();

            }


            $sql_insert_exist_table = 
            "INSERT INTO delivery (id, id_user, id_product, count, order_date, arrival_date, purchase_date, code)
            SELECT temp_ids.id_product, basket.id_user, basket.id_product, basket.count,
            DATE_FORMAT(CURRENT_TIMESTAMP(), '%d.%m.%Y, %H:%i:%s'), 
            DATE_FORMAT(DATE_ADD(CURRENT_TIMESTAMP(), INTERVAL 30 SECOND), '%d.%m.%Y, %H:%i:%s'),
            DATE_FORMAT(DATE_ADD(CURRENT_TIMESTAMP(), INTERVAL 3 DAY), '%d.%m.%Y, %H:%i:%s'), $code
            FROM basket
            JOIN temp_ids ON basket.id_product = temp_ids.id
            WHERE basket.id_user = $user_id;

            DELETE FROM $this->table_name
            WHERE id_user = $user_id";

            $stmt_insert_exist = $this->conn->prepare($sql_insert_exist_table);


            $sql_update_code = 
            "UPDATE delivery SET code = $code WHERE id_user = $user_id";
            $stmt_update = $this->conn->prepare($sql_update_code);
            $stmt_update->execute();


            if($stmt_insert_exist->execute()){
                return true;
            }
            else return false;

        }

    }