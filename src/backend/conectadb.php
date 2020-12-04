<?php
abstract class Conexao{
    protected function conexaodb(){
        try{
            $con=new PDO("mysql:host=localhost; dbname=react", "root","");
            return $con;
        }
        catch (PDOException $Erro) {
            return $Erro->getMessage();

        }
    }
    
}