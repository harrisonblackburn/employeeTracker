DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE role (
  id INT NOT NULL PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,4) NOT NULL,
  department_id INTEGER NOT NULL, 
  FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
  id INT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL, 
  FOREIGN KEY (role_id) REFERENCES role(id),
  manager_id INT NULL
);