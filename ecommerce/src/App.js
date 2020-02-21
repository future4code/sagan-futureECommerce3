import React from 'react';
import styled from 'styled-components';
import Produto from './Components/Produto';
import Carrinho from './Components/Carrinho';
import Filtro from './Components/Filtro';

const Aplicativo = styled.div`
  background-color:grey;
  display:flex;
  width:100%;
`
const Produtos = styled.div`
  display:flex;
  flex-wrap:wrap;
  width: 80%;
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listaProdutos: [
        { id: 1, nome: "Camiseta perdido no espaço", preco: 29.90, imagem: require("./img/prod1.png") },
        { id: 2, nome: "Camiseta rebelião no espaço", preco: 23.60, imagem: require("./img/prod2.png") },
        { id: 3, nome: "Camiseta onibus espacial feminina", preco: 36.30, imagem: require("./img/prod3.png") },
        { id: 4, nome: "Camiseta astrodev", preco: 39.30, imagem: require("./img/prod4.png") },
        { id: 5, nome: "Camiseta naza feminina", preco: 16.60, imagem: require("./img/prod5.jpg") },
        { id: 6, nome: "Camiseta miau espacial", preco: 29.90, imagem: require("./img/prod6.png") },
        { id: 7, nome: "Camiseta leve-me por favor", preco: 26.60, imagem: require("./img/prod7.png") },
        { id: 8, nome: "Camiseta tom and jerry", preco: 46.30, imagem: require("./img/prod8.png") }
      ],
      listaCarrinho: [],
      listaFiltrada: []

    }
  }
  //Adiciona produto no state
  adicionarProdutoNoCarrinho = (id) => {
    let copiaListaCarrinho = this.state.listaCarrinho
    copiaListaCarrinho = [...copiaListaCarrinho, this.state.listaProdutos[id - 1]]

    const listaCarrinhoComponent = copiaListaCarrinho.map((elemento, index) => {
      return (<div key={index} id={index}>1x {elemento.nome} <button onClick={() => { this.retirarProdutoDoCarrinho(index) }}>X</button></div>)
    })

    this.setState({
      listaCarrinhoComponent: listaCarrinhoComponent,
      listaCarrinho: copiaListaCarrinho
    })
  }
  //Retira produto do carrinho
  retirarProdutoDoCarrinho = (id) => {
    const copiaListaCarrinho = this.state.listaCarrinho
    copiaListaCarrinho.splice(id, 1)


    const listaCarrinhoComponent = copiaListaCarrinho.map((elemento, index) => {
      return (<div key={index} id={index}>1x {elemento.nome} <button onClick={() => { this.retirarProdutoDoCarrinho(index) }}>X</button></div>)
    })
    this.setState({
      listaCarrinhoComponent: listaCarrinhoComponent,
      listaCarrinho: copiaListaCarrinho
    })
    console.log(copiaListaCarrinho)
  }
  //Variavel que retorna a lista do carrinho
  carrinho = () => {
    //console.log(this.state.listaCarrinhoComponent)
    return (<Carrinho listaCarrinhoComponent={this.state.listaCarrinhoComponent} total={this.calculaTotal()} />)
  }
  calculaTotal = () => {
    let valor = 0
    for (const elemento of this.state.listaCarrinho) {
      valor += elemento.preco
    }
    return valor
  }
  produtos = (copialistaFiltrada) => {
    let produtosFiltrados
    if (copialistaFiltrada !== undefined) {
      produtosFiltrados = copialistaFiltrada.map((elemento, index, array) => {
        return (<Produto adicionaClick={(id) => {
          this.adicionarProdutoNoCarrinho(id)
        }} id={elemento.id} key={index} nome={elemento.nome} imagem={elemento.imagem} preco={elemento.preco} />)
      })
    } else {
      produtosFiltrados = this.state.listaProdutos.map((elemento, index, array) => {
        return (<Produto adicionaClick={(id) => {
          this.adicionarProdutoNoCarrinho(id)
        }} id={elemento.id} key={index} nome={elemento.nome} imagem={elemento.imagem} preco={elemento.preco} />)
      })
    }

    //return produtosFiltrados
    this.setState({
      listaFiltrada: produtosFiltrados
    })
  }

  produtosSemFiltro = () => {
    const produtosFiltrados = this.state.listaProdutos.map((elemento, index, array) => {
      return (<Produto adicionaClick={(id) => {
        this.adicionarProdutoNoCarrinho(id)
      }} id={elemento.id} key={index} nome={elemento.nome} imagem={elemento.imagem} preco={elemento.preco} />)
    })
    return produtosFiltrados
  }
  render() {

    return (
      <Aplicativo>
        <Filtro listaProdutos={this.state.listaProdutos} retornaListaFiltrada={(copialistaFiltrada) => {

          this.produtos(copialistaFiltrada)

        }} />
    
        <Produtos>{this.state.listaFiltrada.length?this.state.listaFiltrada:this.produtosSemFiltro()}</Produtos>
        
        

        <div>{this.carrinho()}</div>

      </Aplicativo>
    )
  }
}

export default App