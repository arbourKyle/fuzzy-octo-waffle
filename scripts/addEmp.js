const mysql = require('mysql2');
const table = ('console.table');
const connection = require('../server')

const inquirer = require('inquirer');

var empName;


let addEmp = function askEmp(){
inquirer
	.prompt([
		{
			type: 'input',
			name: 'firstName',
			message: 'What is the employee\'s first name?'
		},
		{
			type: 'input',
			name: 'lastName',
			message: 'What is the employee\'s last name?'
		},
		{
			type: 'list',
			name: 'roleName',
			message: 'What is the employee\'s role?',
			choices: [
				'Salesperson',
				'Software Engineer',
				'Accountant',
				'Lawyer'
			],
		}
	])
	.then((answer) => {
		var role;
		var manager;
		if(answer.roleName == 'Salesperson'){
			role = 2;
			manager = 1; 
		}
		else if(answer.roleName == 'Software Engineer'){
			role = 4;
			manager = 3;
		}
		else if(answer.roleName == 'Accountant'){
			role = 6;
			manager = 5;
		}
		else {
			role = 8;
			manager = 7
		}

		connection.query(
			'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("'+answer.firstName+'","'+ answer.lastName+'","'+role+'","'+manager+'")',
			
			function(err, results) {
				console.table([
					{
					first_name: answer.firstName,
					last_name: answer.lastName,
					role_id: role,
					manager_id: manager
					}
				]);
			});
		});
}
  module.exports = addEmp;
//   module.exports.viewAllDep = viewAllDep