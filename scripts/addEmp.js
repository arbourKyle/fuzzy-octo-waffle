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

		let first_name = 
		
		console.log(answer);
		connection.query(
			'INSERT INTO employees `first_name, last_name, role_id, manager_id` VALUES `answer.firstName, answer.firstName, answer.roleName`',
			
			function(err, results, empName) {
				console.table(answer);
			});
		});
}
  module.exports = addEmp;
//   module.exports.viewAllDep = viewAllDep