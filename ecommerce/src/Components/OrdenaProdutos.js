import React from 'react'
import styled from 'styled-components'


const Main = styled.div`
display:flex;
width:90%;
justify-content:space-between;
margin-left:3%;
margin-right:3%;
`


class OrdenaProdutos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectControlado: "",
            listaOrdenada: []
        }

    }

    selectControlado = (event) => {
        this.setState({ selectControlado: event.target.value })
        this.ordenaProdutos(event.target.value)
        
    }
    ordenaProdutos = (selecao) => {
        let copiaLista = this.props.lista
        console.log(selecao)
        if (selecao === "crescente") {
            for (let i = 0; i < copiaLista.length; i++) {
                for (let i2 = 0; i2 < copiaLista.length; i2++) {
                    if (copiaLista[i].preco < copiaLista[i2].preco) {
                        let aux = copiaLista[i]
                        copiaLista[i] = copiaLista[i2]
                        copiaLista[i2] = aux
                    }
                }
            }
        }else{
            for (let i = 0; i < copiaLista.length; i++) {
                for (let i2 = 0; i2 < copiaLista.length; i2++) {
                    if (copiaLista[i].preco > copiaLista[i2].preco) {
                        let aux = copiaLista[i]
                        copiaLista[i] = copiaLista[i2]
                        copiaLista[i2] = aux
                    }
                }
            }
        }

        this.props.ordenar(copiaLista)

    }


    render() {

        return (
            <Main>
                <p>Quantidade de Itens: {this.props.lista.length}</p>
                <select onChange={

                    this.selectControlado


                } value={this.state.selectControlado}>
                    <option value="">Relevantes</option>
                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrescente</option>
                </select>
                
            </Main>

        )
    }
}


export default OrdenaProdutos