-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE SportsCharts;

USE SportsCharts;

CREATE TABLE esporte (
	idesporte INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	descricao VARCHAR(50),
	qtdTelespectadores INT,
	qtdHorasT INT
);

select idesporte as idEsporte, nome as nomeEsporte from esporte;

CREATE TABLE usuario (
	idusuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	email VARCHAR(45) UNIQUE,
	senha VARCHAR(45),
    FkEsporte INT NOT NULL,
	qtdHorasU INT NOT NULL,
    CONSTRAINT fkEsporteUsuario
    FOREIGN KEY (fkEsporte) REFERENCES esporte(idesporte)
);
select * from usuario;

CREATE TABLE media (
	fkUsuario INT,
	fkEsporte INT, 
	mediaUsuario INT,
	media_Telespectadores INT,
	CONSTRAINT pkComposta PRIMARY KEY (fkUsuario, fkEsporte),
	CONSTRAINT FkUsuarioMedia
    FOREIGN KEY (fkUsuario) REFERENCES usuario(idusuario),
    CONSTRAINT FkEsporteMedia
	FOREIGN KEY (fkEsporte) REFERENCES esporte(idesporte)
);

INSERT INTO esporte VALUES
(default,'Futebol', default,);




