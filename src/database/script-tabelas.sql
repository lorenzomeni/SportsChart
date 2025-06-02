-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE SportsCharts;

USE SportsCharts;

CREATE TABLE usuario (
	idusuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	email VARCHAR(45) UNIQUE,
	senha VARCHAR(45),
	qtdHorasU INT
);

CREATE TABLE esporte (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	descricao VARCHAR(50),
	qtdTelespectadores INT,
	qtdHorasT INT
);

CREATE TABLE media (
	fkUsario INT,
	fkEsporte INT, 
	mediaUsuario INT,
	media_Telespectadores INT,
	CONSTRAINT PRIMARY KEY (fkUsuario, fkEsporte),
	FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
	FOREIGN KEY (fkEsporte) REFERENCES esporte(id)
);
