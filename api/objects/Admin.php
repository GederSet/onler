<?php

    class Admin {

        public $id_product;

        private $conn;
        private $table_name = 'product';

        public function __construct($db)
        {
            $this->conn = $db;
        }

        public function getAdminProducts($name)
        {

            $sql = 
            "SELECT product.id, product.name, product.price, 
             product.description, img.url 
             FROM img 
             JOIN product
             ON img.id_product = product.id
             WHERE img.order_img = 1 AND
             product.name LIKE '$name'";

            $stmt = $this->conn->prepare($sql);
            $stmt->execute();

            return $stmt;

        }

        public function getOptionsProduct()
        {

            $sqlGender = "SELECT * FROM gender";
            $sqlMechanism = "SELECT * FROM watch_mechanism";
            $sqlFaceColor = "SELECT * FROM watch_face_color";
            $sqlStrapColor = "SELECT * FROM watch_strap_color";
            $sqlStrapMaterial = "SELECT * FROM watch_strap_material";

            $stmtGender = $this->conn->prepare($sqlGender);
            $stmtMechanism = $this->conn->prepare($sqlMechanism);
            $stmtFaceColor = $this->conn->prepare($sqlFaceColor);
            $stmtStrapColor = $this->conn->prepare($sqlStrapColor);
            $stmtStrapMaterial = $this->conn->prepare($sqlStrapMaterial);

            $stmtGender->execute();
            $stmtFaceColor->execute();
            $stmtMechanism->execute();
            $stmtStrapColor->execute();
            $stmtStrapMaterial->execute();


            $genders = $stmtGender->fetchAll(PDO::FETCH_ASSOC);
            $faceColors = $stmtFaceColor->fetchAll(PDO::FETCH_ASSOC);
            $mechanisms = $stmtMechanism->fetchAll(PDO::FETCH_ASSOC);
            $strapColors = $stmtStrapColor->fetchAll(PDO::FETCH_ASSOC);
            $strapMaterials = $stmtStrapMaterial->fetchAll(PDO::FETCH_ASSOC);

            return ['genders' => $genders, 'faceColors' => $faceColors, 'mechanisms' => $mechanisms, 'strapColors' => $strapColors, 'strapMaterials' => $strapMaterials];

        }

        public function createProduct($name, $price, $description, $weight, $water_tight, 
            $stock_quantity, $case_glass, $case_width, $case_length, $case_thickness, 
            $stones_mechanism, $caliber_diametr_mechanism, $id_mechanism, $id_strap_color, 
            $id_strap_material, $id_face_color, $id_gender)
        {

            $sql = 
            "INSERT INTO product (name, price, description, weight, 
             watertight, stock_quantity, case_glass, case_width, case_length, 
             case_thickness, stones_mechanism, caliber_diametr_mechanism, id_mechanism, 
             id_strap_color, id_strap_material, id_face_color, id_gender)
             VALUES ('$name', '$price', '$description', '$weight', '$water_tight', 
             '$stock_quantity', '$case_glass', '$case_width', '$case_length', '$case_thickness', 
             '$stones_mechanism', '$caliber_diametr_mechanism', '$id_mechanism', '$id_strap_color', 
             '$id_strap_material', '$id_face_color', '$id_gender')";

            $stmt = $this->conn->prepare($sql);
            $stmt->execute();

            $id = $this->conn->lastInsertId();
            return $id;

        }

        public function editProduct($id_product, $name, $price, $description, $weight, $water_tight, 
            $stock_quantity, $case_glass, $case_width, $case_length, $case_thickness, 
            $stones_mechanism, $caliber_diametr_mechanism, $id_mechanism, $id_strap_color, 
            $id_strap_material, $id_face_color, $id_gender)
        {

            $sql = 
            "UPDATE product SET name = '$name', price = '$price', description = '$description', 
             weight = '$weight', watertight = '$water_tight', 
             stock_quantity = '$stock_quantity', case_glass = '$case_glass', 
             case_width = '$case_width', case_length = '$case_length', 
             case_thickness = '$case_thickness', 
             stones_mechanism = '$stones_mechanism', 
             caliber_diametr_mechanism = '$caliber_diametr_mechanism', 
             id_mechanism = '$id_mechanism', 
             id_strap_color = '$id_strap_color', id_strap_material = '$id_strap_material', 
             id_face_color = '$id_face_color', id_gender = '$id_gender'
             WHERE id = $id_product";

            $stmt = $this->conn->prepare($sql);
            $stmt->execute();

            $id = $this->conn->lastInsertId();
            return $id;

        }

        public function addImages($img_name, $id_product)
        {

            for ($i = 0; $i < count($img_name); $i++){

                $name = $img_name[$i];
                $fakeI = $i;
                $order = $fakeI + 1;

                $sql_add_image = 
                "INSERT INTO img (url, order_img, id_product)
                 VALUES ('$name', '$order', '$id_product')";

                $stmt_add_image = $this->conn->prepare($sql_add_image);
                $stmt_add_image->execute();

            }

        }

        public function editImages($img_name, $img_order, $id_product)
        {

            for ($i = 0; $i < count($img_name); $i++){

                $name = $img_name[$i];
                $order = $img_order[$i] + 1;

                $sql_add_image = 
                "INSERT INTO img (url, order_img, id_product)
                 VALUES ('$name', '$order', '$id_product')";

                $stmt_add_image = $this->conn->prepare($sql_add_image);
                $stmt_add_image->execute();

            }

            // $sqlOneImg = 
            // "UPDATE img SET url = '$img_1' WHERE id_product = $id_product AND order_img = 1";

            // $sqlTwoImg = 
            // "UPDATE img SET url = '$img_2' WHERE id_product = $id_product AND order_img = 2";

            // $sqlThreeImg = 
            // "UPDATE img SET url = '$img_3' WHERE id_product = $id_product AND order_img = 3";

            // $stmtOneImg = $this->conn->prepare($sqlOneImg);
            // $stmtOneImg->execute();

            // $stmtTwoImg = $this->conn->prepare($sqlTwoImg);
            // $stmtTwoImg->execute();

            // $stmtThreeImg = $this->conn->prepare($sqlThreeImg);
            // $stmtThreeImg->execute();

        }

        public function deleteImages($id)
        {

            $sql = "DELETE FROM img WHERE id_product = $id";

            $stmt = $this->conn->prepare($sql);
            $stmt->execute();

        }

        public function getImages()
        {

            $sql = "SELECT url FROM img WHERE id_product = :id_product";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(':id_product', $this->id_product);
            $stmt->execute();

            $images = $stmt->fetchAll(PDO::FETCH_ASSOC);

            return ['images' => $images];

        }

        public function getProductInfo(){

            $sql = 
            "SELECT product.*, watch_mechanism.mechanism,
             watch_strap_color.color AS strap_color, watch_strap_material.material,
             watch_face_color.color AS face_color, gender.gender
             FROM product 

             JOIN watch_mechanism
             ON watch_mechanism.id = product.id_mechanism

             JOIN watch_strap_color
             ON watch_strap_color.id = product.id_strap_color

             JOIN watch_strap_material
             ON watch_strap_material.id = product.id_strap_material

             JOIN watch_face_color
             ON watch_face_color.id = product.id_face_color

             JOIN gender
             ON gender.id = product.id_gender

             WHERE product.id = :id_product";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(':id_product', $this->id_product);
            $stmt->execute();

            return $stmt;

        }

        public function deleteProduct($id_product)
        {

            $sqlDeleteFromImg = 
            "DELETE FROM img WHERE id_product = $id_product";

            $sqlDeleteFromBasket = 
            "DELETE FROM basket WHERE id_product = $id_product";

            $sqlDeleteFromDelivery = 
            "DELETE FROM delivery WHERE id_product = $id_product";

            $sqlDeleteFromHistory = 
            "DELETE FROM history WHERE id_product = $id_product";

            $sqlDeleteFromProduct = 
            "DELETE FROM product WHERE id = $id_product";

            $stmtDeleteFromImg = $this->conn->prepare($sqlDeleteFromImg);
            $stmtDeleteFromImg->execute();

            $stmtDeleteFromBasket = $this->conn->prepare($sqlDeleteFromBasket);
            $stmtDeleteFromBasket->execute();

            $stmtDeleteFromDelivery = $this->conn->prepare($sqlDeleteFromDelivery);
            $stmtDeleteFromDelivery->execute();

            $stmtDeleteFromHistory = $this->conn->prepare($sqlDeleteFromHistory);
            $stmtDeleteFromHistory->execute();

            $stmtDeleteFromProduct = $this->conn->prepare($sqlDeleteFromProduct);
            $stmtDeleteFromProduct->execute();

        }

        public function showAdminPanel($id_user){

            $sql = 
            "SELECT user_status.status FROM user 
             JOIN user_status 
             ON user_status.id = user.id_status 
             WHERE user.id = $id_user";

            $stmt = $this->conn->prepare($sql);
            $stmt->execute();

            return $stmt;

        }

    }