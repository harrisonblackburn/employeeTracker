const mysql = require('mysql');
const util = require('util');


const connection = mysql.createConnection({
    host: 'localhost',


    port: 3306,


    user: 'root',

    password: 'ptigers77',
    database: 'employees_db',
});


connection.queryPromise= util.promisify(connection.query);

module.exports = connection