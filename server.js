const inquirer = require('inquirer');

const table = require('console.table'); 

const connection = require('./connection');

const departments = require('./models/department')

connection.connect((err) => {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    departments.print();
  });
  
  
 
  
// const readProducts = () => {
//   console.log('Selecting all products...\n');
//   connection.query('SELECT * FROM products', (err, res) => {
//     if (err) throw err;
//     // Log all results of the SELECT statement
//     console.log(res);
//     connection.end();
//   });
// };
