/* Dropping database */
DROP DATABASE IF EXISTS burgers_db;

/* Creating database */
CREATE DATABASE burgers_db;

USE burgers_db;

/* Creating table */
CREATE TABLE burgers (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(100),
    devoured BOOLEAN
);