const mysql = require('mysql2');
const table = ('console.table');
const inquirer = require('inquirer');


const viewAllDep = require('./questions');
const viewAllRole = require('./questions');
const viewAllEmp = require('./questions');
const addDep = require('./questions');
const addRole = require('./questions');
const addEmp = require('./questions');
const updateEmpRole = require('./questions');


const connection = require('./server');

//MAIN PROMPT
function main() {
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
])
.then((answers) => {
	switch(answers.choices) {
		case 'view all departments':
			viewAllDep();
			console.log(answers)
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
})//END OF DOT THEN

.catch((error) => {
		if (error.isTtyError) {
			console.log('catch if',error)
	
		} else {
			console.log('catch else', error);
		}
});




};//END OF MAIN
main();
