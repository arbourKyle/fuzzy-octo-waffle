const mysql = require('mysql2');
const table = ('console.table');
const viewAllDep = require('./scripts/viewAllDeps');
require('dotenv').config();

const inquirer = require('inquirer');


const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: process.env.DB_PASSWORD,
	database: 'employeetracker_db'
  });


function main() {
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
	switch(answers.choices) {
	case'view all departments':
		viewAllDep();
		break;
	default:
		exit();
		break
	  }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}


main();
module.exports = connection;