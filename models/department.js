const inquirer = require('inquirer');
const connection = require('../connection');

const addDepartment = () => {
    inquirer
      .prompt({
        name: 'name',
        type: 'input',
        message: 'What is the name of the department you would like to add?',
        
      })
      .then((answer) => {
         connection.query('INSERT INTO department SET ?', answer, function (error, results, fields) {
            if (error) throw error;
            
          });
       
        
      });
  };


  const printDepartments = () => {
      connection.query('SELECT * FROM department', function (error, results){
          console.table(results);
      })

  }
  module.exports = {add: addDepartment, print: printDepartments};