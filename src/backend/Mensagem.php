<?php

include("conectadb.php");

class Mensagem extends Conexao{
    public function exibeMensagem(){
        $BFetch= $this->conexaodb()->prepare("select * from comentarios");
        $BFetch->execute();
        $J = [];
        $I = 0;
        while ($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)) {
            $J[$I] = [
                "id"=>$Fetch['id'],
                "nome"=>$Fetch['nome'],
                "msg"=>$Fetch['msg'],
                "data"=>$Fetch['data'],
                
            ];
            $I++;
        }
             
            header("Access-Control-Allow-Origin:*");
            header("Content-Type:application/json");
            echo json_encode($J);

    }
    public function carregarMensagem(){
        $BFetch= $this->conexaodb()->prepare("select * from comentarios");
        $BFetch->execute();
        $J = [];
        $I = 0;
        while ($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)) {
            $J[$I] = [
                "id"=>$Fetch['id'],
                "nome"=>$Fetch['nome'],
                "msg"=>$Fetch['msg'],
                "data"=>$Fetch['data'],
                
            ];
            $I++;
        }
        return $J;

}
    public function gravarMensagem(){
        if(isset($_POST['nome']) && isset($_POST['msg'])){
            $nome = $_POST["nome"]; 
            $msg = $_POST["msg"];

            $conexao = $this->conexaodb();

            $sql = "insert into comentarios (nome,msg) values ('$nome','$msg')";
            $result = $conexao->query($sql);
        }
        $M[] = [
            "resultado"=>$result
        ];
        header("Access-Control-Allow-Origin:*");
            header("Content-Type:application/json");
            echo json_encode($M);
    }
    public function rota(){
        $metodo = $_SERVER['REQUEST_METHOD'];

        switch ($metodo){
            case 'GET':
                $this->exibeMensagem();
            break;
            case 'POST':
                $this->gravarMensagem();
            break;
        }
    }
}
$Mensagem = new Mensagem();
$Mensagem->rota();
?>