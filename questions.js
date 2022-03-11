const mysql = require('mysql2');
const table = ('console.table');
const connection = require('./server');
const inquirer = require('inquirer');

//DEPARTMENTS TABLE
const viewAllDep = () => {
	connection.execute(
		'SELECT * FROM departments',
		
		function(err, results, fields) {
			
			console.table('\n');
			console.table(results);
			console.table('Press arrow key for more options');
			
		});

};

//ROLES TABLE
const viewAllRole = () => {
	connection.execute(
	  'SELECT * FROM roles',
	  
	  function(err, results, fields) {
		
		console.log('\n');
		console.table(results);
		console.table('Press arrow key for more options');
		});

};

//EMPLOYEES TABLE
const viewAllEmp = () => {
	connection.execute(
	  'SELECT * FROM employees',
	  
	  function(err, results, fields) {
		
		console.log('\n');
		console.table(results);
		console.table('Press arrow key for more options');
	  });

};

//ADD DEPARTMENT
const addDep = () => {
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
};

//ADD ROLE
const addRole = () => {
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
	
					console.log('\n');
					console.log('\n');
					console.table(results);
					console.log(err);
					
					console.log('\n');
					console.log('\n');
			});
		});			
	});
};

//ADD EMPLOYEE
const addEmp = ()=>{
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
};

//UPDATE ROLE
const updateEmpRole = () => {
connection.execute(
	'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (Fred, Zed, 2, 1)',
	
	function(err, results, empName) {
		console.log(results)
});
}


module.exports  = viewAllDep;
module.exports = viewAllRole;
module.exports = viewAllEmp;
module.exports = addDep;
module.exports = addRole;
module.exports = addEmp;
module.exports = updateEmpRole;