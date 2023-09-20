<?php

    class Search {

        private $conn;
        private $table_name = 'product';

        public function __construct($db)
        {
            $this->conn = $db;
        }

        public function getSearchProducts($name)
        {

            $sql = 
            "SELECT product.id, product.name, product.price, img.url 
             FROM img 
             JOIN product
             ON img.id_product = product.id
             WHERE img.order_img = 1 AND
             product.name LIKE '%$name%'";

            $stmt = $this->conn->prepare($sql);
            $stmt->execute();

            return $stmt;

        }

    }