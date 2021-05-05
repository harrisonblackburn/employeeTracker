const inquirer = require('inquirer');
const connection = require('../connection');

const addRole = () => {
    inquirer
      .prompt({
        name: 'title',
        type: 'input',
        message: 'What is the title of the role?',
        
      });
    inquirer
      .prompt({
        name: 'salary',
        type: 'input',
        message: 'What is the salary of this role?',
        
      });
    inquirer
      .prompt({
        name: 'title',
        type: 'input',
        message: 'What is the department id of this role?',
        
      })
        .then((answer) => {
         connection.query('INSERT INTO role SET ?', answer, function (error, results, fields) {
            if (error) throw error;
            
          });
       
        
      });
  };

  const printRole = () => {
    connection.query('SELECT * FROM role', function (error, results){
        console.table(results);
    })

}
module.exports = {add: addRole, print: printRole};