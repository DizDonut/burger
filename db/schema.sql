-- create database called burgers_db
CREATE DATABASE burgers_db;
USE burgers_db;

-- create table called burgers
CREATE TABLE burgers(
  id INT NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(45) NOT NULL,
  devoured BOOLEAN NOT NULL,
  date TIMESTAMP,
  PRIMARY KEY(id)
);
