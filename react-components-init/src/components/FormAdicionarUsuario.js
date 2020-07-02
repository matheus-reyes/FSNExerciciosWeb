import React from 'react';

function FormAdicionarUsuario(){
    return(
        <form>
            <div className="input-field col s6">
              <input id="first_name" name="nome" type="text" className="validate" />
              <label htmlFor="first_name">Nome</label>
            </div>
            <div className="input-field col s6">
              <input id="cor_favorita" name="cor_favorita" type="text" className="validate" />
              <label htmlFor="cor_favorita">Cor favorita</label>
            </div>
            <div className="input-field col s6">
              <input id="comida_favorita" name="comida_favorita" type="text" className="validate" />
              <label htmlFor="comida_favorita">Comida favorita</label>
            </div>
            <div className="input-field col s6">
              <input id="link_github" name="link_github" type="text" className="validate" />
              <label htmlFor="link_github">Github</label>
            </div>
            <div className="right-align">
              <a class="waves-effect waves-light green btn">button</a>
            </div>
        </form>
    );
}

export default FormAdicionarUsuario;