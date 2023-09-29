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
            "SELECT product.id, product.name, product.price, img.url 
             FROM img 
             JOIN product
             ON img.id_product = product.id
             WHERE img.order_img = 1 AND
             price BETWEEN :min_price AND :max_price
             AND product.id IN($id_products)
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

        public function getInfoProduct($id_product)
        {

            $sql = 
            "SELECT product.id, product.name, product.price, 
             product.description, product.weight, product.watertight, product.case_glass,
             product.case_width, product.case_length, product.case_thickness, product.stones_mechanism,
             product.caliber_diametr_mechanism, watch_mechanism.mechanism, 
             watch_strap_color.color AS strap_color, watch_strap_material.material, 
             watch_face_color.color AS face_color, gender.gender,
             img.url, img.order_img
             FROM img 
             JOIN product ON product.id = img.id_product
             JOIN watch_mechanism ON watch_mechanism.id = product.id_mechanism
             JOIN watch_strap_color ON watch_strap_color.id = product.id_strap_color
             JOIN watch_strap_material ON watch_strap_material.id = product.id_strap_material
             JOIN watch_face_color ON watch_face_color.id = product.id_face_color
             JOIN gender ON gender.id = product.id_gender
             WHERE img.order_img = 1 AND
             product.id = $id_product";

            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            return $stmt;

        }

        public function getAllProductPhotos($id_product)
        {

            $sql = 
            "SELECT product.name, img.url
             FROM img 
             JOIN product ON product.id = img.id_product
             WHERE product.id = $id_product";

            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            return $stmt;

        }

    }