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
            "SELECT id, name, price, url_image 
             FROM $this->table_name
             WHERE name LIKE '%$name%'";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();

            return $stmt;

        }

    }