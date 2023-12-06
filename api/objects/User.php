<?php

    class User{

        public $name;
        public $user_id;
        public $password;

        private $conn;
        private $table_name = 'user';

        public function __construct($db)
        {
            $this->conn = $db;
        }

        public function registerUser()
        {

            $sql = "INSERT INTO $this->table_name
            SET name=:name, password=:password";

            $stmt = $this->conn->prepare($sql);

            $stmt->bindParam(':name', $this->name);
            $stmt->bindParam(":password", $this->password);

            if($stmt->execute()){
                return true;
            } 
            return false;

        }

        public function findUser()
        {
            $sql = "SELECT id FROM $this->table_name
            WHERE name = :name AND password = :password";

            $stmt = $this->conn->prepare($sql);

            $stmt->bindParam(':name', $this->name);
            $stmt->bindParam(":password", $this->password);

            $stmt->execute();
            $array = $stmt->fetch(PDO::FETCH_ASSOC);

            if($array){
                return $array;
            } 
            return false;
            
        }

        public function getUserInfo()
        {
            $sql = 
            "SELECT name, image_user, phone_number, delivery_addres 
             FROM $this->table_name 
             WHERE id = :user_id";

            $stmt = $this->conn->prepare($sql);
            $stmt->bindParam(':user_id', $this->user_id);

            $stmt->execute();
            return $stmt;
            
        }

        public function addImages($img, $id_user)
        {

            $sqlOneImg = 
            "UPDATE $this->table_name SET image_user = '$img' WHERE id = $id_user";

            $stmtOneImg = $this->conn->prepare($sqlOneImg);
            $stmtOneImg->execute();

        }

        public function getImage($id_user)
        {

            $sqlOneImg = 
            "SELECT name, image_user
             FROM $this->table_name 
             WHERE id = $id_user";

            $stmtOneImg = $this->conn->prepare($sqlOneImg);
            $stmtOneImg->execute();
            return $stmtOneImg;

        }

        public function deleteImage($id_user)
        {

            $sqlOneImg = 
            "UPDATE $this->table_name SET image_user = '' WHERE id = $id_user";

            $stmtOneImg = $this->conn->prepare($sqlOneImg);
            $stmtOneImg->execute();
            return $stmtOneImg;

        }

        public function changeProfileInfo($id_user, $name, $phone_number, $delivery_addres)
        {

            $sql = 
            "UPDATE $this->table_name 
             SET name = '$name', 
             phone_number = '$phone_number', 
             delivery_addres = '$delivery_addres' 
             WHERE id = $id_user";

            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            return $stmt;

        }

        public function changePassword($id_user, $password)
        {

            $sql = 
            "UPDATE $this->table_name 
             SET password = '$password'
             WHERE id = $id_user";

            $stmt = $this->conn->prepare($sql);
            $stmt->execute();
            return $stmt;

        }

    }