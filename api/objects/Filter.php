<?php

    class Filter {

        private $table_name = 'product';
        private $conn;

        public function __construct($db)
        {
            $this->conn = $db;
        }

        public function getParameters($table_name)
        {
            $sql = "SELECT * FROM $table_name";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            return $stmt;
        }

        public function getMaxPriceProduct()
        {
            $sql = "SELECT max(price) as maxPrice FROM $this->table_name";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            return $stmt;
        }

    }