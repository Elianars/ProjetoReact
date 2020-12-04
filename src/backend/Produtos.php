<?php

include("conectadb.php");

class Produtos extends Conexao{
    public function exibeProdutos(){
        $BFetch= $this->conexaodb()->prepare('SELECT * FROM produtos AS p INNER JOIN categoria AS c ON p.idcategoria = c.idcategoria');
        $BFetch->execute();
        $J = [];
        $I = 0;
        while ($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)) {
            $J[$I] = [
                "idprodutos"=>$Fetch['idprodutos'],
                "idcategoria"=>$Fetch['idcategoria'],
                "descricao"=>$Fetch['descricao'],
                "preco"=>$Fetch['preco'],
                "precofinal"=>$Fetch['precofinal'],
                "imagem"=>$Fetch['imagem'],
            ];
            $I++;
        }
             
            header("Access-Control-Allow-Origin:*");
            header("Content-Type:application/json");
            echo json_encode($J);

    }
    }

$Produtos=new Produtos ();
$Produtos->exibeProdutos ();
        