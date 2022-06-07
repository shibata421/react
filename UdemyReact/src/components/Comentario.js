import React from 'react'
import { formatRelative } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import './Comentario.css'
import imagemUsuario from './user.png'

// JSX -> HTML dentro do JS
const Comentario = props => {
    return <div className="Comentario">
        <img className="avatar" src={imagemUsuario} alt={props.nome}></img>
        <div className="conteudo">
            <h2 className="nome">{props.nome}</h2>
            <p className="email">{props.email}</p>
            <p className="mensagem">{props.children}</p>
            <p className="data">{formatRelative(props.data, new Date(), { locale: ptBR })}</p>
            <button onClick={props.onRemove}>&times;</button>
        </div>
    </div>
}


export default Comentario