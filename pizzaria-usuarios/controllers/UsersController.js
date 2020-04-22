const users = require('../database/Users.json');
const fs = require('fs');
const bcrypt = require('bcrypt');

module.exports = {
    list: (req, res) => {
        //Retorna uma view que recebe a a lista de usuários
        res.render("crud-usuarios/list", {users});
    },

    create: (req,res) => {
        //Retorna uma view com um form p criar usuário
        res.render("crud-usuarios/create");
    },

    store: (req, res) => {
        //Cria um usuário e redireciona para '/users'
        let nome = req.body.nome;
        let email = req.body.email;
        let senha = bcrypt.hashSync(req.body.senha, 10);
        let img = "/img/" + req.file.filename;

        const id = users[users.length - 1].id + 1;
        const user = {id, nome, email, senha, img};
        users.push(user);
        fs.writeFileSync('database/Users.json', JSON.stringify(users));
   
		res.redirect('/users');
    },

    edit: (req,res) => {
        //Retorna uma view com um form para editar o usuário do id passado na rota
        let id = req.params.id;

        const user = users.find((user) => {
			return user.id == id;
		});

		res.render("crud-usuarios/edit",{user});
    },

    alterar: (req,res) => {
        //Altera o usuário do id dado e redireciona para a rota '/users'
        let id = req.params.id;
        let nome = req.body.nome;
        let email = req.body.email;
        let senha = bcrypt.hashSync(req.body.senha, 10);
        let img = "/img/" + req.file.filename;

        const user = users.find((user) => {
			return user.id == id;
        });
        
        const posicao = users.findIndex(
			user => user.id == id
		)

        if(bcrypt.compareSync(req.body.confirmarSenha, user.senha)){
            users[posicao].nome = nome;
            users[posicao].email = email;
            users[posicao].senha = senha;
            users[posicao].img = img;
            fs.writeFileSync('database/Users.json', JSON.stringify(users));
        }

        res.redirect('/users');

    },

    delete: (req, res) => {
        //Remove o usuário de id passado pela rota
		let id = req.params.id;

		let posicao = users.findIndex(
			user => user.id == id
		)

		users.splice(posicao, 1)

		fs.writeFileSync('database/Users.json', JSON.stringify(users));

		res.redirect('/users');
    }

}