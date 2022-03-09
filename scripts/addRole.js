const mysql = require('mysql2');
const table = ('console.table');
const connection = require('../server');

const inquirer = require('inquirer');

global.depLength;


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
	.then((answer) => {
		
		connection.execute('SELECT * FROM departments',(err, results, fields) =>{depLength = results.length;
			console.log('1-->', depLength);
			
		let title = answer.roleName;
		let salary = answer.salary;
		let dep = answer.department;
		if(answer.department != 'Salesperson' || 'Software Engineer' || 'Accountant' || 'Lawyer') {
			depLength++;
			console.log('2-->', depLength);
		}

		connection.execute(
			
			'INSERT INTO roles (title, salary) VALUES ("'+title+'","'+salary+'")',
			// 'INSERT INTO departments (name) VALUES ("'+dep+'")',
			
			function(err, results) {
				console.table(results);
				console.log(err);
			});
		});
	});
}
  module.exports = addRole;
