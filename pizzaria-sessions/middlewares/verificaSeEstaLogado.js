//Função de Middleware
const verificaSeEstaLogado = (req, res, next) => {
    
    // Verificando se a session.user está setada
    if(req.session.user){
        
        // Vá para a próxima middleware
        next();
    }else{
        // Redirecionando para a tela de login
        res.redirect("/login");
    }
}

module.exports = verificaSeEstaLogado;