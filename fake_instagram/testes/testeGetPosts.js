const { sequelize, Usuario } = require('../models');

Usuario.findByPk(1).then(
    usuario => {
        usuario.getPosts().then(
            (posts) => {
                console.log(posts.map(post => post.toJSON()));
                sequelize.close();
            }
        );
    }
)