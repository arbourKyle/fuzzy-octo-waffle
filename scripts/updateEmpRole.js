const mysql = require('mysql2');
// const table = ('console.table');
const connection = require('../server');

const inquirer = require('inquirer');


connection.execute(
	'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (Fred, Zed, 2, 1)',
	
	function(err, results, empName) {
		console.log(results)
	});