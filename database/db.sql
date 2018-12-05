--Crear la base de datos
CREATE DATABASE crudnodejsmysql;

--Mirar las base de datos creadad
SHOW DATABASES;
--Usar base de datos creada
USE crudnodejsmysql;
---Crear tabla
CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
    );
--Mirar las tablas creadas
SHOW TABLES;
--Mirar la estructura de la tabla
DESCRIBE  customer;