const mysql = require('mysql2');
const table = ('console.table');

const viewAllDep = require('./scripts/viewAllDeps');
const viewAllRole = require('./scripts/viewRoles');
const viewAllEmp = require('./scripts/viewAllEmp');
const addDep = require('./scripts/addDep');


const inquirer = require('inquirer');





const main = function main() {
inquirer
  .prompt([
    {
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
				'update an employee role'
		]
	}
  ])
  .then((answers) => {
	let x = answers.choices;
	if (x == 'view all departments'){
		viewAllDep();		
	}
	else if (x == 'view all roles') {
		viewAllRole();
	}
	else if (x == 'view all employees') {
		viewAllEmp();
	}
	else if (x == 'add a department') {
		addDep();
	}

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      console.table('Yippeee');
    }
  });
}


main();