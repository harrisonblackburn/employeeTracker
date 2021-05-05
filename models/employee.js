const inquirer = require('inquirer');
const connection = require('../connection');

const addEmployee = () => {
    inquirer
      .prompt({
        name: 'first_name',
        type: 'input',
        message: 'What is the first name of the employee you would like to add?',
        
      })
    inquirer
      .prompt({
        name: 'last_name',
        type: 'input',
        message: 'What is the last name of the employee you would like to add?',
        
      })
    inquirer
      .prompt({
        name: 'role_id',
        type: 'input',
        message: 'What is the role id for this employee?',
        
      })
    inquirer
      .prompt({
        name: 'manager_id',
        type: 'input',
        message: 'What is the manager id of the manager for this employee?',
        
      })


.then((answer) => {
         connection.query('INSERT INTO employee SET ?', answer, function (error, results, fields) {
            if (error) throw error;
            
          });
       
        
      });
  };


  const printEmployee = () => {
      connection.query('SELECT * FROM employee', function (error, results){
          console.table(results);
      })

  }
  module.exports = {add: addEmployee, print: printEmployee};