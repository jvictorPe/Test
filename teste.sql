
mysql -h localhost -u root -p (entrar no mysql)

CREATE DATABASE sistemadecadastro; (criar um BD)

USE sistemadecadastro; (usar o BD)


 CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT,
);

SHOW TABLES;

DESCRIBE usuarios;

INSERT INTO usuarios (nome, email, idade) VALUES(
    'Raimundo nonato',
    'raimundo@gmail.com',
    50
); 

SELECT * FROM usuarios;

SELECT * FROM usuarios WHERE idade = 21;

SELECT * FROM usuarios WHERE idade < 40;

DELETE FROM usuarios WHERE nome = 'Maguila';

UPDATE usuarios SET nome = 'Raimundo' WHERE nome = 'Nome de Teste';

DROP TABLE NomedaTabela;
