const mysql = require('mysql2');
require('dotenv').config();


const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: process.env.DB_PASSWORD,
	database: 'employeetracker_db'
  });


  module.exports = connection;