const mysql = require('mysql2');
const table = ('console.table');

const viewAllDep = require('./scripts/viewAllDeps');
const viewAllRole = require('./scripts/viewRoles');
const viewAllEmp = require('./scripts/viewAllEmp');
const addDep = require('./scripts/addDep');
const addRole = require('./scripts/addRole');
const addEmp = require('./scripts/addEmp');
// var depLength = require('./scripts/viewAllDeps');

const inquirer = require('inquirer');
const connection = require('./server');





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
	let x = answers.choices;
	if (x == 'view all departments'){
		viewAllDep(main);
		
		return
	}
	else if (x == 'view all roles') {
		viewAllRole();
		setTimeout(() => {
			main()
		  }, 1100);
		
		return
	}
	else if (x == 'view all employees') {
		viewAllEmp();
		setTimeout(() => {
			main()
		  }, 1200);
		
		return
	}
	else if (x == 'add a department') {
		addDep();
		setTimeout(() => {
			main()
		  }, 1300);
		
		return
	}
	else if (x == 'add a role') {
		
		addRole(main);
		
		
		return
	}
	else if (x == 'add an employee') {
		addEmp();
		setTimeout(() => {
			main()
		  }, 1450);
		
		return
	}
	else if (x == 'update an employee role') {
		updateEmpRole();
		setTimeout(() => {
			main()
		  }, 1451);
		
		return
	}
	else {
		connection.end();
		return
	}

	
})
.catch((error) => {
	if (error.isTtyError) {
		console.table(error)
		// Prompt couldn't be rendered in the current environment
    } else {
		console.log(error);
    }
});
}
/* 
function exitMain() {
	
	return new Promise(resolve => {
	  setTimeout(() => {
		// connection.end();
		main();
		resolve();

	  }, 200);
	});
  }
  
  async function exitReturn() {
	
	const result = await exitMain();
	
	// expected output: "resolved"
  }
  
 */
  

main();
module.exports = main;