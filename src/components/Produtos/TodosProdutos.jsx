import React from 'react';
import './imagem.css';
export default class TodosProdutos extends React.Component {
    constructor(props) {
        super(props);
       
    }
    destaque  (event)  {
        let tamanho = event.target.style.height;
        if (tamanho === "180px") {
            event.target.style = "height:120px";
        
        }
        else {
            event.target.style = "height:180px"
        }
       
    }

    render() {
        return (
            <div className="row d-flex justify-content-around py-4">
                {this.props.arrayProdutos.map(
                    row =>
                        <div className="box_produto col-lg-3 col-md-4 col-sm-6 col-xs-9 text-center" id={row.idcategoria}>
                            <img id={row.idprodutos} className=" p-4" src={row.imagem} onMouseOver={this.destaque} onMouseOut={this.destaque} />
                            <p className="border-bottom mb-0">{row.descricao}</p>
                            <p className="mb-0"><s>R$ {row.preco}</s></p>
                            <p className="mb-0 text-danger h3 p-2 ">R$ {row.precofinal}</p>
                            
                        </div>
                )}
            </div>
        );

    }
}