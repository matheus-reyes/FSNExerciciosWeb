DROP SCHEMA if exists instagram;
CREATE SCHEMA IF NOT EXISTS instagram;
USE instagram;

CREATE TABLE usuarios (
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR (256) NOT NULL
);
CREATE TABLE posts (
	id INT PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(100) NOT NULL,
    img VARCHAR(100),
    usuarios_id INT,
    n_likes INT not null default 0,
    FOREIGN KEY (usuarios_id) REFERENCES usuarios(id) ON DELETE CASCADE
    
);
CREATE TABLE comentarios (
	id INT PRIMARY KEY AUTO_INCREMENT,
    texto TEXT NOT NULL,
    usuarios_id INT,
    posts_id INT,
    FOREIGN KEY (usuarios_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (posts_id) REFERENCES posts(id) ON DELETE CASCADE
);

-- ADICIONAR DADOS USUARIOS
INSERT INTO usuarios
	(nome, email, senha)
VALUES
    ('Gabriel Brunetti', 'gbrunetti@digitalhouse.com', '$2b$10$hKXxuZe3vE4EBVAIdzvrxuL3OrynJQZBbRiZnEYfwrgC1A0LKsuYe'),
	('Sergio Siqueira', 'ssiqueira@digitalhouse.com', '$2b$10$2/MGT6aEKBa1DlbOMPBWS.4Xhqm5k.v9g4YBzHi78jT1xQq5vE4C.'),
	('Felipe Veronesi', 'fveronesi@digitalhouse.com', '$2b$10$gabZ48YuFts8C64vhE0jy.GBOUi5ZeZbzkD5O1BK0a46WNvPiOOLK'),
    ('Hendy Almeida', 'halmeida@digitalhouse.com', '$2b$10$iXZN2CUh2NNudnv.4k8xT.C4VviqJ4p.tqvMetObTNg3DaqliVyDO');

-- ADICIONANDO DADOS A POSTS
INSERT INTO posts
	(texto, img, usuarios_id)
VALUES
	('Oi gente tudo bem?', null, 1),
	('Como foi o fim de semana?', null, 1);

-- ADICIONANDO DADOS A COMENTARIOS
INSERT INTO comentarios
	(texto, usuarios_id,posts_id)
VALUES
	('Oi! Tirando os problemas, tudo certo!',2,1),
	('Oi gente é o !@#!$%! Meu nome agora é Zé Pequeno!',3,1),
    ('Oi pra você também,!',4,1),
    ('Fim de semana já não existe mais!',2,2),
	('FDS nervoso!',3,2),
    ('Fim de semana foi lindo!',4,2);
    
    
    
    