const pizzas = require("../database/Pizzas.json");
module.exports = {

    add: (req, res) => {

        if(!req.session.pizzasId){
            req.session.pizzasId = [ Number(req.body.id)];
        }else{
            req.session.pizzasId.push(Number(req.body.id));
        }

        res.redirect("/");

    },

    show: (req, res) => {

        let idPizzas = (req.session.pizzasId || []);

        let pizzasDoCarrinho = idPizzas.map(
            (idPizza) => {
                return pizzas.find( (pizza) => pizza.id == idPizza);
            }
        )

        res.render('crud-pizzas/list', {pizzas: pizzasDoCarrinho});
    }

}