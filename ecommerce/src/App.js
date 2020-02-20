import React from 'react';
import './App.css';
import styled from 'styled-components';

const Aplicativo = styled.div`

`


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           listaProdutos: [
             {nome:"Camiseta perdido no espaço", preco: 29.90, imagem:"./img/prod1.png"},
             {nome:"Camiseta rebelião no espaço", preco: 23.60, imagem:"./img/prod2.png"},
             {nome:"Camiseta onibus espacial feminina", preco: 36.30, imagem:"./img/prod3.png"},
             {nome:"Camiseta astrodev", preco: 39.30, imagem:"./img/prod4.png"},
             {nome:"Camiseta naza feminina", preco: 16.60, imagem:"./img/prod5.jpg"},
             {nome:"Camiseta miau espacial", preco: 29.90, imagem:"./img/prod6.png"},
             {nome:"Camiseta leve-me por favor", preco: 26.60, imagem:"./img/prod7.png"},
             {nome:"Camiseta tom and jerry", preco: 46.30, imagem:"./img/prod8.png"}
            ]
        }
    }


     teste = ()=>{
      const teste = this.state.listaProdutos.map((elemento,index,array)=>{
        return (<div key={index}>{elemento.nome}</div>)
        })
        console.log(teste)
        return teste
    }
    render() {

        return (
            <Aplicativo>
                <div>{this.teste()}</div>
            </Aplicativo>
        )
    }
}

export default App