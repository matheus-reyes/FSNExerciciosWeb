const bcrypt = require("bcrypt");
const { Usuario, Post, Comentario } = require('../models');

const AuthController = {
    
    showLogin: (req,res) => {
        let erro = (req.query.error === 1);
        res.render('auth/login', {erro});
    },

    showRegistro: (req,res) => {
        res.render('auth/register');
    },

    showHome: async (req,res) => {

        //Carregando os posts
        let posts = await Post.findAll( 
            {
                include:[
                    {
                        model: Usuario, 
                        as:'autor', 
                        include:'posts',
                        attributes: ['id', 'nome', 'email']
                    },
        
                    {
                        model: Comentario, 
                        as:'comentarios', 
                        include:'autor'
                    }
                ]
            }
        );

        res.render('index', {posts});
    },

    login: async (req,res) => {
        let {email, senha} = req.body;
        
        //Captura o usuário com o e-mail fornecido
        let usuario = await Usuario.findOne({where:{email}});
        
        //Se o usuário não for encontrado, redireciona para / com um erro
        if(!usuario){
            return res.redirect('/?error=1');
        }

        if(!bcrypt.compareSync(senha, usuario.senha)){
            return res.redirect('/?error=1');
        }
        
        //req.session.usuario = usuario;
        return res.redirect('/home');
        
    }
}

module.exports = AuthController;