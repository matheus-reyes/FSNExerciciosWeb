const { sequelize, Comentario } = require('../models');

Comentario.findAll({include: ['post', 'autor']}).then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)