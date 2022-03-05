const mysql = require('mysql2');
const table = ('console.table');
const connection = require('../server')

const inquirer = require('inquirer');

var depName;


let addDep = function askDep(){
inquirer
	.prompt([
		{
			type: 'input',
			name: 'depName',
			message: 'What is the name of the department?'
		}
	])
	.then((answer) => {
		
		console.log(answer.depName);
		connection.execute(
			'INSERT INTO departments `name` VALUES `answer.depName`',
			
			function(err, results, depName) {
				console.table(depName);
			});
		});
}
  module.exports = addDep;
//   module.exports.viewAllDep = viewAllDep