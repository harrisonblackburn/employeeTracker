const inquirer = require('inquirer');
const connection = require('../connection');

const addRole = () => {
    inquirer
      .prompt({
        name: 'title',
        type: 'input',
        message: 'What is the title of the role?',
        
      })
      .then((answer) => {
         connection.query('INSERT INTO role SET ?', answer, function (error, results, fields) {
            if (error) throw error;
            
          });
       
        
      });
  };