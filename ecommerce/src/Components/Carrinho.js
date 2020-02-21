import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
    
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
                {this.props.listaCarrinhoComponent}
                <p>Total: <b>R$ {this.props.total}</b></p>
            </Main>
        )
    }
}

export default Carrinho