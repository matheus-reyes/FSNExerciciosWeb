let Usuario = (sequelize, Datatypes) => {
    let usuario = sequelize.define(
        'Usuario', 
        {
            id:{
                type: Datatypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            nome:{
                type: Datatypes.STRING, //Podemos passar no construtor o limite de caracteres
                allowNull: false
            },
            email:{
                type: Datatypes.STRING, 
                allowNull: false
            },
            senha:{
                type: Datatypes.STRING, 
                allowNull: false
            }
        },
        {
            tableName: "usuarios",
            timestamps: true
        }
    )

    usuario.associate = (models) => {
        usuario.hasMany(
            models.Post,
            {
                foreignKey: 'usuarios_id',
                as: 'posts'
            }
        );
    }

    return usuario;

}

module.exports = Usuario;