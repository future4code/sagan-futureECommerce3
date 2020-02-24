import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    display:flex;
    flex-direction: column;
    width: 250px;
    border: 1px solid black;
    margin:1%;
`
const Imagem = styled.img`
width:100%;
height:250px;
`
const P = styled.p`
text-align:center;
`

const Botao = styled.button`
display:flex;
justify-content:center;
align-items:center;
`

const AddCart = styled.img`
height:25px;
width:25px;
`

class Produto extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }


    render() {
        return (
            <Main>
                <Imagem src={this.props.imagem} alt="Imagem do produto" />
                <P>{this.props.nome}</P>
                <P>R${this.props.preco}</P>
                <Botao onClick={()=>{
                    this.props.adicionaClick(this.props.id)
                    }}><AddCart src={require("../img/addtocart.png")} />Adicionar ao Carrinho</Botao>
            </Main>
        )
    }
}

export default Produto