const mysql = require('mysql2');
const table = ('console.table');
const connection = require('./server');
const inquirer = require('inquirer');


/* function main() {
inquirer
  .prompt([
    {
		loop: false,
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
				'update an employee role',
				'exit'
		]
	}
  ]) */
  /* .then((answers) => {
	switch(answers.choices) {
		case 'view all departments':
			department();
			break;
		case 'view all roles':
			viewAllRole();
			break;
		case 'view all employees':
			viewAllEmp();
			break;
		case 'add a department':
			addDep()
			return
		case 'add a role':
			addRole();
			return
		case 'add an employee':
			addEmp();
			return
		case 'update an employee role':
			updateEmpRole();
			return
		default:
			connection.end();
	}


})
.catch((error) => {
	if (error.isTtyError) {
		console.table(error)
		// Prompt couldn't be rendered in the current environment
    } else {
		console.log(error);
    }
}); */
