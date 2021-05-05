const inquirer = require('inquirer');

const table = require('console.table'); 

const connection = require('./connection');

const departments = require('./models/department')

// function which prompts the user for what action they should take
const start = () => {
  inquirer
    .prompt({
      name: 'userAction',
      type: 'list',
      message: 'What would you like to do?',
      choices: ['Add Department', 'Add Role', 'Add Employee', 'View Department', 'View Employee Role', 'View Employee'],
    })
    .then((answer) => {
      // based on their answer, either call the bid or the post functions
      if (answer.userAction === 'Add Department') {
        addDepartment();
      } else if (answer.postOrBid === 'Add Role') {
        addRole();
      } else {
        connection.end();
      }
    });
};




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
