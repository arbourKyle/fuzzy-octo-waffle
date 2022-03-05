const mysql = require('mysql2');
const table = require('console.table');
require('dotenv').config();


const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: process.env.DB_PASSWORD,
	database: 'employeetracker_db'
  });

function viewAllDep() {
  connection.execute(
	'SELECT * FROM departments',
	
	function(err, results, fields) {
	  console.table(results); // results contains rows returned by server
	  // fields contains extra meta data about results, if available
  
	  // If you execute same statement again, it will be picked from a LRU cache
	  // which will save query preparation time and give better performance
	}
  );
}
  module.exports = connection;