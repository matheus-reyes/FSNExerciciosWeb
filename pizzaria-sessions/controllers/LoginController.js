const users = require("../database/Users.json");

module.exports = {
    show: (req, res) => {
        res.render("login");
    },

    login: (req, res) => {
        // Receber os dados do formulário
        let {email, password}= req.body;
        
        //Buscar o usuário que tem o e-mail dado
        let user = users.find(user => user.email == email);

        // Caso o usuário tenha sido encontrado
        if(user && user.pass == password){
            
            //Setando a session do usuário
            req.session.user = JSON.stringify(user);
            
            //redirecionando o usuário
            return res.redirect("/pizzas");
        }

        // Caso o usuário não tenha sido encontrado
        return res.redirect("/login");

    }
}