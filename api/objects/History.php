<?php

    class History {

        private $table_name = 'history';
        private $conn;

        public $user_id;
        public $product_id;
        public $user_rating;


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
            WHERE history.id_user = :user_id AND img.order_img = 1 AND history.is_return = 0
            ORDER BY history.order_date DESC";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(':user_id', $this->user_id);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);

        }

        public function getReturnProducts()
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
            WHERE history.id_user = :user_id AND img.order_img = 1 AND history.is_return = 1
            ORDER BY history.order_date DESC";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(':user_id', $this->user_id);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);

        }

        public function createPopup()
        {

            $sql = 
            "SELECT user_rating FROM $this->table_name 
             WHERE id_user = :user_id AND id_product = :product_id";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(':user_id', $this->user_id);
            $stmt->bindParam(':product_id', $this->product_id);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);

        }

        public function sendComment($comment)
        {

            $sql = 
            "UPDATE $this->table_name 
             SET comment = '$comment',  
             date_message = DATE_FORMAT(CURRENT_TIMESTAMP(), '%e.%m.%Y, %H:%i:%s'),  
             user_rating = :user_rating 
             WHERE id_user = :user_id AND id_product = :product_id";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(':user_id', $this->user_id);
            $stmt->bindParam(':product_id', $this->product_id);
            $stmt->bindParam(':user_rating', $this->user_rating);
            $stmt->execute();

        }

        public function getProductScore(){

            $sql = 
            "SELECT count(CASE WHEN comment != '' AND comment IS NOT NULL THEN 1 END) AS reviews,  
             count(user_rating) AS ratings,  
             ROUND(AVG(user_rating), 1) AS point, 
             ROUND(AVG(user_rating * 2 * 10), 1) AS point_percent,
             ROUND((COUNT(CASE WHEN user_rating = 5 THEN 1 END) / COUNT(user_rating)) * 100, 0) AS five_star_percentage,
             ROUND((COUNT(CASE WHEN user_rating = 4 THEN 1 END) / COUNT(user_rating)) * 100, 0) AS four_star_percentage,
             ROUND((COUNT(CASE WHEN user_rating = 3 THEN 1 END) / COUNT(user_rating)) * 100, 0) AS three_star_percentage,
             ROUND((COUNT(CASE WHEN user_rating = 2 THEN 1 END) / COUNT(user_rating)) * 100, 0) AS two_star_percentage,
             ROUND((COUNT(CASE WHEN user_rating = 1 THEN 1 END) / COUNT(user_rating)) * 100, 0) AS one_star_percentage
             FROM $this->table_name 
             WHERE id_product = :product_id";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(':product_id', $this->product_id);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);

        }

        public function getComments(){

            $sql = 
            "SELECT history.comment, history.date_message, 
             history.user_rating, user.name, user.image_user
             FROM history
             JOIN user ON user.id = history.id_user
             WHERE comment IS NOT NULL AND comment != '' AND id_product = :product_id
             ORDER BY date_message DESC
             LIMIT 7";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(':product_id', $this->product_id);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);

        }


        public function getAllComments(){

            $sql = 
            "SELECT history.comment, history.date_message, 
             history.user_rating, user.name, user.image_user
             FROM history
             JOIN user ON user.id = history.id_user
             WHERE comment IS NOT NULL AND comment != '' AND id_product = :product_id
             ORDER BY date_message DESC";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(':product_id', $this->product_id);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);

        }

        public function returnProduct(){

            $sql = 
            "UPDATE history SET is_return = 1 
             WHERE history.id_product = :product_id AND history.id_user = :user_id";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(':product_id', $this->product_id);
            $stmt->bindParam(':user_id', $this->user_id);

            $stmt->execute();
            return $stmt;

        }

    }
    