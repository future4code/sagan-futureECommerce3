import React from 'react'
import styled from 'styled-components'


class OrdenaProdutos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            crescenteOuDecrescente : false,
            selectControlado:""
        }

    }
 
    selectControlado = (event) =>{
        this.setState({selectControlado: event.target.value})
        console.log(this.state.selectControlado)
        
  
    }
    ordenaProdutos = () =>{
        let copiaLista = this.props.lista
        console.log(copiaLista)
          copiaLista.sort(function(a,b){
              if(a.preco > b.preco && this.state.selectControlado === "crescente"){
                  return 1;
              }
          })
    }


    render(){
        return (
            <div>
                <p>Quantidade de Itens: {}</p>
                <select onChange={this.selectControlado} value={this.state.selectControlado}>
                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrescente</option>
                </select>
            </div>    
                       
        )
    }
}


export default OrdenaProdutos