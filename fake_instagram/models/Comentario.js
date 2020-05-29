let Comentario = (sequelize, Datatypes) => {
    let comentario = sequelize.define(
        'Comentario', 
        {
            id:{
                type: Datatypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            texto:{
                type: Datatypes.STRING, 
                allowNull: false
            },
            usuarios_id:{
                type: Datatypes.STRING, 
                allowNull: false
            },
            posts_id:{
                type: Datatypes.STRING, 
                allowNull: false
            }
        },
        {
            tableName: "comentarios",
            timestamps: true
        }
    )

    comentario.associate = (models) => {
        comentario.belongsTo(models.Usuario, {
            foreignKey: 'usuarios_id',
            as: 'autor'
        });

        comentario.belongsTo(models.Post, {
            foreignKey: 'posts_id',
            as: 'post'
        });
    }

    return comentario;

}

module.exports = Comentario;