const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const dbConn = new Sequelize(dbConfig);

dbConn.query("select * from usuarios", Sequelize.QueryTypes.SELECT)
.then(
    data => {
        console.log(data);
        dbConn.close();
    }
);

// async function testeOb(){
//     let usuarios = await dbConn.query("select * from usuarios", Sequelize.QueryTypes.SELECT);
//     console.log(usuarios);
// }

// testeOb();