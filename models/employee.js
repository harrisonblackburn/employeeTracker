const inquirer = require('inquirer');
const connection = require('../connection');

const addEmployee = () => {
 return  inquirer
      .prompt([{
        name: 'first_name',
        type: 'input',
        message: 'What is the first name of the employee you would like to add?',
        
      },
    
      {
        name: 'last_name',
        type: 'input',
        message: 'What is the last name of the employee you would like to add?',
        
      },
    
      {
        name: 'role_id',
        type: 'input',
        message: 'What is the role id for this employee?',
        
      },
    
      {
        name: 'manager_id',
        type: 'input',
        message: 'What is the manager id of the manager for this employee?',
        
      }])

      .then((answer) => {
        console.log(answer);
      return connection.queryPromise('INSERT INTO role SET ?', answer) 
     });
       
        
      
  };


  const printEmployee = () => {
    return connection.queryPromise('SELECT * FROM employee')
    .then((results) => {
        console.table(results);
        return Promise.resolve()
    })

}
  module.exports = {add: addEmployee, print: printEmployee};