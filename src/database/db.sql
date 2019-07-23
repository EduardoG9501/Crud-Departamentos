-- to create a new database
CREATE DATABASE cruddepartamentos;

-- to use database
use cruddepartamentos;

-- creating a new table
CREATE TABLE departamentos (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  municipio VARCHAR(100) NOT NULL,
  postal VARCHAR(15)
);

-- to show all tables
show tables;

-- to describe table
describe departamentos;
