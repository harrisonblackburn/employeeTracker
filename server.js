const inquirer = require('inquirer');

const table = require('console.table'); 

const connection = require('./connection');

const departments = require('./models/department')

const roles = require('./models/role')

const employees = require('./models/employee')

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
      // based on their answer, call the matching function stored in models
      if (answer.userAction === 'Add Department') {
        addDepartment();
      } else if (answer.userAction === 'Add Role') {
        addRole();
      
      } else if (answer.userAction === 'Add Employee') {
        addEmployee();
       
      } else if (answer.userAction === 'View Department') {
        printDepartment();
       
      } else if (answer.userAction === 'View Employee Role') {
        printRole();
       
      } else if (answer.userAction === 'View Employee') {
        printEmployee();
      } 
        else {
        connection.end();
      }
    });
};




connection.connect((err) => {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
    addDepartment();
    addEmployee(); 
    addRole(); 
    printDepartment();
    printEmployee();
    printRole();

  });
  
  
 
  

