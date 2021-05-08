var mysql = require('mysql');


var con = mysql.createConnection({
    host: "sql6.freemysqlhosting.net",
    user: "sql6410969",
    password: "ZKzTgRv1Hj",
    database: 'sql6410969'

  
  });
  
module.exports = con;

// host: "localhost",
//     user: "root",
//     password: "12345",
//     database: 'machineapp'