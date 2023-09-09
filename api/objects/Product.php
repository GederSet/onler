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

        public function getProducts($id_products, $gender, $strap_material, $strap_color, $face_color, $mechanism)
        {

            $sql = 
            "SELECT id, name, price, url_image 
             FROM $this->table_name WHERE price 
             BETWEEN :min_price AND :max_price
             AND id IN($id_products)
             AND id_gender IN($gender)
             AND id_strap_material IN($strap_material)
             AND id_strap_color IN($strap_color)
             AND id_face_color IN($face_color)
             AND id_mechanism IN($mechanism)";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(':min_price', $this->min_price);
            $stmt->bindParam(':max_price', $this->max_price);
            $stmt->execute();

            return $stmt;

        }

        public function getAllIdProducts()
        {

            $sql = "SELECT id FROM $this->table_name";
            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            return $stmt;

        }

    }