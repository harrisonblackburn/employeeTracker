const inquirer = require('inquirer');

const table = require('console.table'); 

const connection = require('./connection');

const department = require('./models/department')

const role = require('./models/role')

const employee = require('./models/employee')

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
        return department.add()
      
      } else if (answer.userAction === 'Add Role') {
       return role.add()
        
      } else if (answer.userAction === 'Add Employee') {
       return employee.add()
        
        
    
      } else if (answer.userAction === 'View Department') {
       return department.print()
        
       
      } else if (answer.userAction === 'View Employee Role') {
       return role.print();
       
      } else if (answer.userAction === 'View Employee') {
        return employee.print();
      } 
        else {
        connection.end();
      }

    })
    .then(start)
    .catch(function(err){
      console.log(err)
      connection.end();
    });
};

const addDepartment = () => {
 return inquirer
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

const printDepartment = () => {
  connection.query('SELECT * FROM department', function (error, results){
      console.table(results);
  })

}; 

const addEmployee = () => {
  return inquirer
    .prompt({
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

}; 

const addRole = () => {
 return inquirer
    .prompt({
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

};




connection.connect((err) => {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
    

  });
  
  
 
  

