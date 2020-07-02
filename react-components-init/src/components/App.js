import React, {useState} from 'react';
import Titulo from './Titulo';
import Nav from './Nav';
import LinhaListagem from './LinhaListagem';
import CardUsuario from './CardUsuario';
import FormAdicionarUsuario from './FormAdicionarUsuario';
import LinkNav from './LinkNav';
import Data from './../data'

function App() {
    let [links, setLinks] = useState(Data.navLink);
    return (
      <div>

        {/* Importando Componente da barra de navegação */}
        <nav className="green darken-4">
          <div className="container">
            <ul>
              {links.map((item) => (
                <LinkNav href={links.href} nome={links.nome}/>
              ))}
            </ul>
          </div>
        </nav>
        <div className="container">

          {/* Importando Componente de título */}
          <Titulo titulo="Listagem de usuários"/>
                    
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Cor Favorita</th>
                <th>Comida Favorita</th>
                <th>Github</th>
              </tr>
            </thead>
            <tbody>

              {/* Importando Componente de linhas de listagem de usuários */}
              <LinhaListagem />
              <LinhaListagem />
              <LinhaListagem />
            </tbody>
          </table>

          {/* Importando Componente de título */}
          <Titulo titulo="Cartões de usuários"/>

          <div className="row">

            {/* Importando Componente de card de usuário */}
            <CardUsuario imagem="https://conteudo.imguol.com.br/c/esporte/bc/2020/02/22/messi-comemora-gol-contra-o-eibar-no-campeonato-espanhol-1582391565398_v2_450x337.jpg"
            nome="Messi" cor="Branco" comida="Sorvete" github="github.com/messi" />
            <CardUsuario imagem="https://tmssl.akamaized.net/images/foto/normal/cristiano-ronaldo-juventus-1589897013-39110.jpg"
            nome="Ronaldo" cor="Preto" comida="Feijoada" github="github.com/cr7"/>
            <CardUsuario imagem="https://www.tupi.fm/wp-content/uploads/WhatsApp-Image-2020-02-05-at-12.48.59-e1580917785768.jpeg"
            nome="Reus" cor="Azul" comida="Lasanha" github="github.com/reus"/>
          </div>

          {/* Importando Componente de título */}
          <Titulo titulo="Adicionar usuário"/>

          {/* Importando Componente do formulário para adicionar usuário */}
          <FormAdicionarUsuario />
          <br />
          <br />
        </div>
      </div>
    );
  }

export default App;
