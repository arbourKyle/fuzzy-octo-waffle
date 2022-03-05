const sql = require('mysql2');
const table = ('console.table');
require('dotenv').config();
// const connection = require('./scripts/viewAllDeps.js');
const inquirer = require('inquirer');

inquirer
  .prompt([
    {
		type: 'list',
		name: 'choices',
		message: 'What would you like to do?',
		choices: [
				'view all departments',
				'view all roles',
				'view all employees',
				'add a department',
				'add a role',
				'add an employee',
				'update an employee role'
		]
	}
  ])
  .then((answers) => {
	  
    switch(fruits) {
		
		case "view all departments":
		viewAllDep();
		break;
		case "Orange":
		text = "I am not a fan of orange.";
		break;
		case "Apple":
		text = "How you like them apples?";
		break;
		default:
		text = "I have never heard of that fruit...";
	  }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


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