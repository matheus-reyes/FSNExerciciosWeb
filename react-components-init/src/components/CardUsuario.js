import React from 'react';

function CardUsuario(props){
    return (
        <div className="col s4">
            <div className="card hoverable">
                <div className="card-image">
                    <img src={props.imagem}  />
                    <span className="card-title"> {props.nome} </span>
                </div>
                <div className="card-content">
                    <p><b>cor favorita:</b> {props.cor} </p>
                    <p><b>comida favorita:</b> {props.comida}  </p>
                </div>
                <div className="card-action">
                    <a href={props.github}> Ver github </a>
                </div>
            </div>
        </div>
    );
}

export default CardUsuario;