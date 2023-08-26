<?php

    class Product{

        private $table_name = 'product';
        private $conn;

        public function __construct($db)
        {
            $this->conn = $db;
        }

        public function getProducts()
        {

            $sql = "SELECT id, name, price, url_image FROM $this->table_name";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();

            return $stmt;

        }

    }