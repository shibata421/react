import React, { Component } from 'react'

class MeuComponente extends Component {
    constructor(props) {
        // Utilizado para gerar o state inicial e fazer binds
        super(props)

        this.state = { numero: 5 }
        this.adicionarNumero = this.adicionarNumero.bind(this)

        console.log('construtor....')
    }

    static getDerivedStateFromProps(props, state) {
        // Pouco usado. Atualiza o state a parte do props
        console.log('getDerivedStateFromProps....')
        // console.log(props)
        // console.log(state)
        // return { numero: 6 }
        return null
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        // Possibilita impedir ou autorizar alterações no componente
        console.log('shouldComponentUpdate...')
        console.log('estado atual', this.state)
        console.log('proximo estado', nextState)
        // Se retornar false, o componente não atualiza
        return true
    }
    
    adicionarNumero() {
        console.log('setState...')
        let numeroAtual = this.state.numero
        numeroAtual++;
        this.setState({ numero: numeroAtual })
    }
    
    render() {
        console.log('render....')
        return(
            <div>
                <p>Olá, eu sou um componente</p>
                <p>{this.state.numero}</p>
                <p>{this.props.titulo}</p>

                <button onClick={this.adicionarNumero}>
                    Adicionar Número
                </button>
            </div>
        )
    }
    
    componentDidMount() {
        console.log('componentDidMount...')
        // Aqui que devem ser feitas as requisições ajax
    }
    
    componentDidUpdate() {
        console.log('componentDidUpdate...')
    }
}

export default MeuComponente