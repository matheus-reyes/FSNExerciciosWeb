const { sequelize, Usuario } = require('../models');
const bcrypt = require('bcrypt');

Usuario.findAll().then(
    usuarios => {
        let promesses = [];
        usuarios.forEach(
            (usuario) => {
                promesses.push(
                    usuario.update({senha:bcrypt.hashSync('123456',10)})
                )
            }
        )
        Promise.all(promesses).then(
            () => {
                console.log('ok');
                sequelize.close();
            }
        )
    }
)