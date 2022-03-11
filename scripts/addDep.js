const mysql = require('mysql2');
const table = ('console.table');
const connection = require('../server')

const inquirer = require('inquirer');

var depName;



const addDep = ()=>{
	
inquirer
	.prompt([
		{
			type: 'input',
			name: 'depName',
			message: 'What is the name of the department?'
		}
	])
	.then((answer) => {
		connection.execute(
			'INSERT INTO departments (name) VALUES ("'+answer.depName+'")',
			
			function(err, results) {
				
				console.table('Added '+answer.depName+' to the database')
			});
		});
}

  module.exports = addDep;
//   module.exports.viewAllDep = viewAllDep