const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // Change if necessary
    password: '', // Your MySQL password
    database: 'healthcare-system', // Change to your database name
});

module.exports = pool.promise();
