const mysql = require('mysql2');
const table = ('console.table');
const connection = require('../server')

const inquirer = require('inquirer');

var roleName;


let addRole = function askRole(){
inquirer
	.prompt([
		{
			type: 'input',
			name: 'roleName',
			message: 'What is the name of the role?'
		}
	])
	.then((answer) => {
		
		console.log(answer);
		connection.execute(
			'INSERT INTO roles `title` VALUES `answer.roleName`',
			
			function(err, results, depName) {
				console.table(answer);
			});
		});
}
  module.exports = addRole;
//   module.exports.viewAllDep = viewAllDep