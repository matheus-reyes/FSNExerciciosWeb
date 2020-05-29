let Post = (sequelize, Datatypes) => {
    let post = sequelize.define(
        'Post',
        {
            id:{
                type: Datatypes.INTEGER,
                primaryKey: true,
                allowNull: false,
                autoIncrement: true
            },
            texto:{
                type: Datatypes.STRING,
                allowNull:false,
            },
            img:{
                type: Datatypes.STRING,
                allowNull:true
            },
            usuarios_id:{
                type: Datatypes.INTEGER,
                allowNull: false
            },
            n_likes:{
                type: Datatypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            }
        },
        {
            tableName: "posts",
            timestamps: true
        }
    );
    
    post.associate = (models) => {
        post.belongsTo(models.Usuario, {
            foreignKey: 'usuarios_id',
            as: 'autor'
        });

        post.hasMany(models.Comentario, {
            foreignKey: 'posts_id',
            as: 'comentarios'
        });
    }

    return post;

}

module.exports = Post;