import React from 'react';
import styled from 'styled-components';
import Produto from './Components/Produto';

const Aplicativo = styled.div`

`


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
           listaProdutos: [
             {id:1, nome:"Camiseta perdido no espaço", preco: 29.90, imagem:require("./img/prod1.png")},
             {id:2, nome:"Camiseta rebelião no espaço", preco: 23.60, imagem:require("./img/prod2.png")},
             {id:3, nome:"Camiseta onibus espacial feminina", preco: 36.30, imagem:require("./img/prod3.png")},
             {id:4, nome:"Camiseta astrodev", preco: 39.30, imagem:require("./img/prod4.png")},
             {id:5, nome:"Camiseta naza feminina", preco: 16.60, imagem:require("./img/prod5.jpg")},
             {id:6, nome:"Camiseta miau espacial", preco: 29.90, imagem:require("./img/prod6.png")},
             {id:7, nome:"Camiseta leve-me por favor", preco: 26.60, imagem:require("./img/prod7.png")},
             {id:8, nome:"Camiseta tom and jerry", preco: 46.30, imagem:require("./img/prod8.png")}
            ]
        }
    }


     teste = ()=>{
      const teste = this.state.listaProdutos.map((elemento,index,array)=>{
        return (<Produto key={elemento.id} nome={elemento.nome} imagem={elemento.imagem} preco={elemento.preco} />)
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