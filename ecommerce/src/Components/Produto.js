import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    display:flex;
    flex-direction: column;
    width: 250px;
    border: 1px solid black;
`
const Imagem = styled.img`
width:100%;
height:200px;
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
                <p>{this.props.nome}</p>
                <p>{this.props.preco}</p>
                <button onClick={()=>{
                    this.props.adicionaClick(this.props.id)
                    }}>Adicionar ao Carrinho</button>
            </Main>
        )
    }
}

export default Produto