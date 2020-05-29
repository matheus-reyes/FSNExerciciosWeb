const { sequelize, Post } = require('../models');

Post.findByPk(1).then(
    post => {
        post.getComentarios().then(
            (comentarios) => {
                console.log(comentarios.map(comentario => comentario.toJSON()));
                sequelize.close();
            }
        );
    }
)