const inquirer = require('inquirer');
const connection = require('../connection');

const addDepartment = () => {
  return inquirer
      .prompt({
        name: 'name',
        type: 'input',
        message: 'What is the name of the department you would like to add?',
        
      })
      .then((answer) => {
        return connection.queryPromise('INSERT INTO department SET ?', answer) 
            
       
        
      });
  };


  const printDepartment = () => {
     return connection.queryPromise('SELECT * FROM department')
     .then(function (results){
      console.table(results);
      return Promise.resolve()
  })

  }
  
  module.exports = {add: addDepartment, print: printDepartment};