const mysql = require('mysql');

const inquirer = require('inquirer');

const table = require('console.table'); 

const connection = mysql.createConnection({
    host: 'localhost',
  
    
    port: 3306,
  

    user: 'root',
  
    password: 'ptigers77',
    database: 'employees_db',
  });
  
  // function which prompts the user for what action they should take
  const start = () => {
    inquirer
      .prompt({
        name: 'postOrBid',
        type: 'list',
        message: 'Would you like to [POST] an auction or [BID] on an auction?',
        choices: ['POST', 'BID', 'EXIT'],
      })
      .then((answer) => {
        // based on their answer, either call the bid or the post functions
        if (answer.postOrBid === 'POST') {
          postAuction();
        } else if (answer.postOrBid === 'BID') {
          bidAuction();
        } else {
          connection.end();
        }
      });
  };

const readProducts = () => {
  console.log('Selecting all products...\n');
  connection.query('SELECT * FROM products', (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
};

