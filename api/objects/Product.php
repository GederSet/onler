<?php

    class Product{

        private $table_name = 'product';
        private $conn;

        public $min_price;
        public $max_price;

        public function __construct($db)
        {
            $this->conn = $db;
        }

        public function getProducts()
        {

            $sql = 
            "SELECT id, name, price, url_image 
             FROM $this->table_name WHERE price 
             BETWEEN :min_price AND :max_price";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(':min_price', $this->min_price);
            $stmt->bindParam(':max_price', $this->max_price);
            $stmt->execute();

            return $stmt;

        }

    }