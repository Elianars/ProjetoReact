

import React from 'react';
import TodosProdutos from '../components/Produtos/TodosProdutos.jsx';

export default class Produtos extends React.Component {
    constructor() {
        super();
        this.state = ({
            db:[],
        });
        this.exibirProdutos();
    }

    exibirProdutos() {
       
        fetch("http://localhost:3333/produtos")
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    db:responseJson
                });
            })
      
    }
    exibirCategoria = (event) => {

    
        let elementos = document.getElementsByClassName('box_produto');
        let item = event.target.id;
        for (var i = 0; i < elementos.length; i++) {
            
            if (item == elementos[i].id) {
                elementos[i].style.display = "inline-block";
            } else {
                elementos[i].style.display = "none";
            }
            //console.log(elementos);
    
        }
      }
    exibirTodos() {
        let elementos=document.getElementsByClassName('box_produto');

        for (var i = 0;i< elementos.length; i++){
            elementos[i].style="display:block";

        }
    }

    render() {
     return (
    
                <div className="container">
                    <div className="dropdown-show d-flex justify-content-center my-4">
                        <a className="btn dropdown-toggle d-flex align-items-center" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Categorias
                        </a>
                        <div>
                        <ul  className="dropdown-menu shadow" aria-labelledby="dropdownMenuLink">
                        <li className="dropdown-item"onClick={this.exibirTodos}>Todos(12)</li>
              <li  className="dropdown-item" id="1" onClick={this.exibirCategoria}>Geladeiras(3)</li>
              <li  className="dropdown-item" id="2" onClick={this.exibirCategoria}>Fogões(2)</li>
              <li  className="dropdown-item" id="3" onClick={this.exibirCategoria}>Microondas(3)</li>
              <li  className="dropdown-item" id="4" onClick={this.exibirCategoria}>Lavadora de Roupas(2)</li>
              <li  className="dropdown-item" id="5" onClick={this.exibirCategoria}>Lava Louças(2)</li>
              
                            </ul>
                            </div>
                    </div>

                    <TodosProdutos arrayProdutos={this.state.db} />

                </div>
            
        );

    }
} 
