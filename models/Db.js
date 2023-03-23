const Sequelize = require('sequelize');
// Conexão com Banco de Dados Mysql
const sequelize = new Sequelize('postapp', 'root', '010816', {
    host: 'localhost',
    dialect: 'mysql',
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}