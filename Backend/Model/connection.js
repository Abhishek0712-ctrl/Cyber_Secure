const mysql = require('mysql2')
require('dotenv').config();
var database = mysql.createConnection({
    host: `${process.env.HOST}`,
    user: `${process.env.USER}`,
    password: `${process.env.PASSWORD}`,
    database: `${process.env.DATABASENAME}`,
    port:`${process.env.MYSQLPORT}`
});


database.connect((err => {
    if (err) throw err;
    console.log('MySQL Connected');
}));

module.exports = database