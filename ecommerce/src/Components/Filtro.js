import React from 'react';
import styled from 'styled-components';

const Main = styled.div`
   border: 1px solid black;
`


class Filtro extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValorMin: "",
            inputValorMax: "",
            inputBuscarProduto: "",
            listaFiltrada: []
        }
    }







    inputValorMinControlado = (e)=>{
        this.setState({
            inputValorMin: e.target.value
        })
        this.filtrar(e.target.value, this.state.inputValorMax, this.state.inputBuscarProduto)
    }

    inputValorMaxControlado = (e)=>{
        this.setState({
            inputValorMax: e.target.value
        })
        this.filtrar(this.state.inputValorMin, e.target.value, this.state.inputBuscarProduto)
    }

    inputBuscarProdutoControlado = (e)=>{
        this.setState({
            inputBuscarProduto: e.target.value
        })
        this.filtrar(this.state.inputValorMin, this.state.inputValorMax, e.target.value)
    }




    filtrar = (min,max,busca, props)=>{
        max=this.state.inputValorMax!==""?max:Infinity        
                
        let copialistaFiltrada = this.props.listaProdutos.filter( (elemento, index, array)=>{
            return ((elemento.preco>=min)&&(elemento.preco<=max))
        })
        if (this.state.inputBuscarProduto!==""){
            copialistaFiltrada = copialistaFiltrada.filter((elemento, index, array)=>{
                return (elemento.nome===busca)
            })
        }
        this.props.retornaListaFiltrada(copialistaFiltrada)
    }

    render() {
        return (
            <Main>
                <h3>Filtros:</h3>
                <p>Valor Mínimo:</p>
                <input value={this.state.inputValorMin} onChange={this.inputValorMinControlado} />
                <p>Valor Máximo:</p>
                <input value={this.state.inputValorMax} onChange={this.inputValorMaxControlado} />
                <p>Buscar Produto</p>
                <input value={this.state.inputBuscarProduto} onChange={this.inputBuscarProdutoControlado} />
            </Main>
        )
    }
}

export default Filtro