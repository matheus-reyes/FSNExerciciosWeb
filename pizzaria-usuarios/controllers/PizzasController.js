const pizzas = require('../database/Pizzas.json');
const fs = require('fs');

module.exports = {
	index: (req, res)=>{
		res.render("index",{pizzas});
	},
	show: (req, res) => {

		// Capturando a pizza com o id passado na rota
		let pizza = pizzas.find(
			pizza => pizza.id == req.params.id
		);

		// Capturando a posição da pizza no array
		let pos = pizzas.indexOf(pizza);

		// determinando o id da próxima pizza e da anterior
		let idPrev = null;
		let idNext = null;

		if(pos > 0){
			idPrev = pizzas[pos -1].id;
		}

		if(pos < pizzas.length - 1){
			idNext = pizzas[pos + 1].id;
		}

		// Retornando a pizza para o usuário
		if(pizza){
			res.render("pizza",{pizza, idNext, idPrev});
		} else {
			res.render("erros/pizzaNaoEncontrada",{id:req.params.id});
		}
	},

	search: (req, res) => {
		let { busca } = req.query;

		const pizzaBusca = pizzas.filter((pizza) => {
			if(pizza.nome.toLowerCase().search(busca) != -1){
				return true;
			}
		});
		console.log(pizzaBusca)
		return res.render("index", {pizzas:pizzaBusca});
		
	},
	create: (req, res) => {
		res.render('crud-pizzas/create');
	},

	store: (req, res) => {

		let {nome, ingredientes, preco } = req.body;
		let img = "/img/" + req.file.filename;
		let id = pizzas[pizzas.length - 1].id + 1

		ingredientes = ingredientes.split(',');
		ingredientes.map(ing => ing.trim());
		
		preco = Number(preco);

		const pizza = {id,nome,ingredientes,preco,img, destaque:false};
		pizzas.push(pizza);
		
		fs.writeFileSync('database/Pizzas.json', JSON.stringify(pizzas));
		res.redirect('/pizzas');
		
	},

	list: (req, res) => {
		res.render("crud-pizzas/list",{pizzas});
	},

	delete: (req, res) => {
		// Capturando a pizza com o id passado na rota
		let id = req.params.id;

		// Capturando a posição da pizza no array
		let posicao = pizzas.findIndex(
			pizza => pizza.id == id
		)

		// Excluindo o elemento dessa posição no array
		pizzas.splice(posicao, 1)

		fs.writeFileSync('database/Pizzas.json', JSON.stringify(pizzas));

		res.redirect('/pizzas');
	},

	edit: (req, res) => {
		let id = req.params.id;
		
		const pizza = pizzas.find((pizza) => {
			return pizza.id == id;
		});

		res.render("crud-pizzas/edit",{pizza});
	},

	alterar: (req, res) => {
		let id = req.params.id;
		let nome = req.body.nome;
		let ingredientes = req.body.ingredientes;
		let preco = req.body.preco;
		let img = "/img/" + req.file.filename;

		// Capturando a posição da pizza no array
		const posicao = pizzas.findIndex(
			pizza => pizza.id == id
		)

		pizzas[posicao].nome = nome;
		pizzas[posicao].ingredientes = ingredientes;
		pizzas[posicao].preco = preco;
		pizzas[posicao].img = img;

		fs.writeFileSync('database/Pizzas.json', JSON.stringify(pizzas));
		res.redirect('/');
	}
}	