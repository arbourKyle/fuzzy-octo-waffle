const mysql = require('mysql2');
const table = ('console.table');
const connection = require('../server');

const inquirer = require('inquirer');

var depLength;


let addRole = function askRole(){
inquirer
	.prompt([
		{
			type: 'input',
			name: 'roleName',
			message: 'What is the name of the role?'
		},
		{
			type: 'input',
			name: 'salary',
			message: 'What is the salary of the role?'
		},
		{
			type: 'input',
			name: 'department',
			message: 'What is the department for the role?'
		},
	])
	.then((answer, depLength) => {
		
		connection.execute('SELECT * FROM departments',(err, results, fields) =>{depLength = results.length});
		console.log('depLength->', depLength)
			
		let title = answer.roleName;
		let salary = answer.salary;
		let dep = answer.department;
		if(answer.department != 'Salesperson' || 'Software Engineer' || 'Accountant' || 'Lawyer') {
			
		}

		connection.execute(
			
			'INSERT INTO roles (title, salary, department_id) VALUES ("'+title+'","'+salary+'","'+depLength+'")',
			// 'INSERT INTO departments (name) VALUES ("'+dep+'")',
			
			function(err, results) {
				console.table(results);
				console.log(err);
			});
		});
}
  module.exports = addRole;
