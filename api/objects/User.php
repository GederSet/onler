<?php

    class User{

        private $table_name = 'user';

        public $name;
        public $password;
        private $conn;

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
            WHERE name=:name AND password=:password";

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

    }