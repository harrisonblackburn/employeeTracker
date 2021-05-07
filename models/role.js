const inquirer = require('inquirer');
const connection = require('../connection');

const addRole = () => {
   return inquirer
      .prompt([{
        name: 'title',
        type: 'input',
        message: 'What is the title of the role?',
        
      },
    
      {
        name: 'salary',
        type: 'input',
        message: 'What is the salary of this role?',
        
      },
    
      {
        name: 'department_id',
        type: 'input',
        message: 'What is the department id of this role?',
        
      }])
        .then((answer) => {
          console.log(answer);
        return connection.queryPromise('INSERT INTO role SET ?', answer) 
       });
  };

  const printRole = () => {
   return connection.queryPromise('INSERT INTO roleSELECT * FROM role')
    .then((results) => {
        console.table(results);
        return Promise.resolve()
    })

}
module.exports = {add: addRole, print: printRole};