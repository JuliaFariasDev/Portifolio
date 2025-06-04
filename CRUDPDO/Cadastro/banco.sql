-- Cria o banco de dados chamado escola
CREATE DATABASE escola;

-- Usa o banco de dados escola
USE escola;

-- Cria a tabela alunos
CREATE TABLE alunos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL
);
