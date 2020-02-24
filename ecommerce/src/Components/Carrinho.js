import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    width: 30%;
`
const Produto = styled.p`
width: 280px;
`

class Carrinho extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }


    render() {

        return (
            <Main>
                <h3>Carrinho:</h3>
                <Produto>{this.props.listaCarrinhoComponent}</Produto>
                <p>Total: <b>R$ {this.props.total}</b></p>
            </Main>
        )
    }
}

export default Carrinho