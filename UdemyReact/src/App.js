import './App.css';
import Comentario from './components/Comentario'
import React, { Component } from 'react';

class App extends Component {
  state = {
    comentarios: [
      {
        nome: 'João',
        email: 'joao@mail.com',
        data: new Date(2020, 3, 19, 17, 30, 0),
        mensagem: 'Olá, tudo bem?'
      },
      {
        nome: 'Pedro',
        email: 'pedro@mail.com',
        data: new Date(2020, 3, 21, 12, 0, 0),
        mensagem: 'Olá, tudo bem?'
      }
    ],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: ''
    }
  }

  adicionarComentario = event => {
    event.preventDefault()
    console.log("Adicionando comentário")
    const novoComentario = { ...this.state.novoComentario, data: new Date() }
    this.setState({ 
      comentarios: [...this.state.comentarios, novoComentario], 
      novoComentario: { nome: '', email: '', mensagem: '' }
    })
  }

  removerComentario = comentario => {
    let lista = this.state.comentarios
    lista = lista.filter(c => c !== comentario)
    this.setState({ comentarios: lista })
  }

  digitacao = evento => {
    const { name, value } = evento.target
    this.setState({ novoComentario: { ...this.state.novoComentario, [name]: value }})
  }

  render() {
    return (
      <div className="App">
        <h1>Meu projeto</h1>

        {this.state.comentarios.map((comentario, index) => (
          <Comentario
            key={index} 
            nome={comentario.nome} 
            email={comentario.email} 
            data={comentario.data}
            onRemove={this.removerComentario.bind(this, comentario)}>
            {comentario.mensagem}
          </Comentario>
        ))}

        <form method="post" onSubmit={this.adicionarComentario} className="Novo-Comentario">
          <h2>Adicionar um comentário</h2>
          <div>
            <input 
              type="text" 
              name="nome" 
              value={this.state.novoComentario.nome}
              onChange={this.digitacao}
              required
              placeholder="Digite seu nome"></input>
          </div>
          <div>
            <input 
              type="email" 
              name="email" 
              value={this.state.novoComentario.email}
              onChange={this.digitacao}
              required
              placeholder="Digite seu email"></input>
          </div>
          <div>
            <textarea 
              name="mensagem" 
              value={this.state.novoComentario.mensagem}
              onChange={this.digitacao}
              rows="4"/>
          </div>
          <button type="submit">Adicionar Comentário</button>
        </form>
      </div>
    );
  } 
}

export default App;
