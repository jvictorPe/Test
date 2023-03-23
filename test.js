//Sequeliza
const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', '010816', {
    host: 'localhost',
    dialect: 'mysql'
})

//Model
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

// Inserir dados na tabela Postagem
Postagem.create({
    titulo: 'Titulo3',
    conteudo: 'mjjakjfka jfakjdksajf'
})

//Função para sincronizar o model com o MYSQL
//Postagem.sync({force: true})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Inserir dados na tabela Usuarios
Usuario.create({
    nome: 'Sávio',
    sobrenome: 'MOrata',
    idade: 54,
    email: 'sáviomorata@gmail.com'
})

//Usuario.sync({force: true})