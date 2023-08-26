<?php

    class Database {

        private $host = 'localhost';
        private $db_name = 'onler';
        private $user_name = 'root';
        private $password = '';
        private $conn;

        public function getConnection()
        {

            $this->conn = null;

            try{
                $this->conn = new PDO("mysql:host=$this->host;dbname=$this->db_name;", $this->user_name, $this->password);
                $this->conn->exec("set names utf8");
            }
            catch(PDOException $exception){
                echo "Ошибка соединения: {$exception->getMessage()}";
            }

            return $this->conn;
            
        }

    }