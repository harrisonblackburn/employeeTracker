DROP DATABASE IF EXISTS employees_db;

CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE role (
  id INTEGER auto_increment,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,4) NOT NULL,
  department_id INTEGER NOT NULL, 
  FOREIGN KEY (department_id) REFERENCES department(id),
   PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INTEGER auto_increment primary key,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT NOT NULL, 
  FOREIGN KEY (role_id) REFERENCES role(id),
  manager_id INT NULL
);

INSERT INTO employee (first_name, last_name, role_id) 
VALUES ('John', 'Doe', 1);

INSERT INTO role (title, salary, department_id)
VALUES ('Account Manager', 100000, 1);

INSERT INTO department (name)
VALUES ('Accounting');