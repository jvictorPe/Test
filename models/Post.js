const db = require('./Db')

// Criar a tabela postagens no Banco de Dados
const Post = db.sequelize.define('postagens',{
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

module.exports = Post
//Post.sync({force: true})