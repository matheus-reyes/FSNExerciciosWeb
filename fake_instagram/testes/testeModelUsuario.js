const { sequelize, Usuario } = require('../models');

Usuario.findByPk(1, {include: 'posts'}).then(
    usuario => {
        console.log(usuario.toJSON());
        sequelize.close();
    }
)

// Usuario.findAll().then(
//     data => {
//         console.log(data.map( u => u.toJSON()));
//         sequelize.close();
//     }
// )

// Usuario.findByPk(1).then(
//     usuario => {
//         console.log(usuario.toJSON());
//         sequelize.close();
//     }
// )

// Usuario.create({nome: "Adrian", email:"teste@teste.com",senha:"semcriptografar"});

// Usuario.findAll({where:{email:'teste@teste.com'}}).then(
//     data => {
//         console.log(data.map( u => u.toJSON()));
//         sequelize.close();
//     }
// )

// Usuario.update({email:"teste@dh.com"},{where:{id:5}})
// .then(
//     () => (sequelize.close())
// );