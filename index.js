const figlet = require('figlet');
const mysql = require('mysql2');
const table = ('console.table');
const inquirer = require('inquirer');

const connection = require('./server');

/* const viewAllDep = require('./questions');
const viewAllRole = require('./questions');
const viewAllEmp = require('./questions');
const addDep = require('./questions');
const addRole = require('./questions');
const addEmp = require('./questions');
const updateEmpRole = require('./questions'); */


console.log(figlet.textSync('Employee \n Manager', {
	font: 'Crawford2',
	horizontalLayout: 'default',
	verticalLayout: 'default',
	width: 80,
	whitespaceBreak: true

}));


//MAIN PROMPT
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
			switch (answers.choices) {
				case 'view all departments':
					viewAllDep();
					console.log(answers)
					break;
				case 'view all roles':
					viewAllRole();
					break;
				case 'view all employees':
					viewAllEmp();
					break;
				case 'add a department':
					addDep()
					return
				case 'add a role':
					addRole();
					return
				case 'add an employee':
					addEmp();
					return
				case 'update an employee role':
					updateEmpRole();
					return
				default:
					connection.end();
			}
		})//END OF DOT THEN

		.catch((error) => {
			if (error.isTtyError) {
				console.log('catch if', error)

			} else {
				console.log('catch else', error);
			}
		});




};//END OF MAIN
main();


//DEPARTMENTS TABLE
const viewAllDep = () => {
	connection.execute(
		'SELECT * FROM departments',

		function (err, results, fields) {

			console.table(results);
			main()
		});
};

//ROLES TABLE
const viewAllRole = () => {
	connection.execute(
		'SELECT * FROM roles',

		function (err, results, fields) {

			console.table(results);
			main()
		});
};

//EMPLOYEES TABLE
const viewAllEmp = () => {
	connection.execute(
		'SELECT * FROM employees',

		function (err, results, fields) {

			console.table(results);
			main()
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
				'INSERT INTO departments (name) VALUES ("' + answer.depName + '")',

				function (err, results) {

					console.table('Added ' + answer.depName + ' to the database')
					main()
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

		//return this.conncetion.promise().query("INSERT INTO name SET ?", name);

		.then((answer) => {

			connection.execute('SELECT * FROM departments', (err, results, fields) => {
				depLength = results.length;

				let title = answer.roleName;
				let salary = answer.salary;
				let dep = answer.department;
				if (answer.department != 'Salesperson' || 'Software Engineer' || 'Accountant' || 'Lawyer') {
					depLength++;
				}

				connection.execute(

					'INSERT INTO departments (name) VALUES ("' + dep + '")',

					(err, results) => {
						console.table('added "' + dep + '" to roles table');

						// main()
					});
				connection.execute(

					'INSERT INTO roles (title, salary, department_id) VALUES ("' + title + '","' + salary + '","' + depLength + '")',

					(err, results) => {
						console.table('added "' + title + '","' + salary + '" to roles table');

						main()
					});

			});
		});
};

//ADD EMPLOYEE
const addEmp = () => {
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
			var roleName = answer.roleName;
			if (answer.roleName == 'Salesperson') {
				role = 2;
				manager = 1;
			}
			else if (answer.roleName == 'Software Engineer') {
				role = 4;
				manager = 3;
			}
			else if (answer.roleName == 'Accountant') {
				role = 6;
				manager = 5;
			}
			else {
				role = 8;
				manager = 7
			}

			connection.query(
				'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ("' + answer.firstName + '","' + answer.lastName + '","' + role + '","' + manager + '")',

				function (err, results) {
					console.table("Added " + answer.firstName + " " + answer.lastName + " to " + `${roleName}` + ".")
					// console.table([
					// 	{
					// 		first_name: answer.firstName,
					// 		last_name: answer.lastName,
					// 		role_id: role,
					// 		manager_id: manager
					// 	}

					// ]);
					main()
				});
		});
};

//UPDATE ROLE
const updateEmpRole = () => {

	connection.execute('SELECT first_name, last_name FROM employees', (err, results) => {


		const iterator = results.values();
		var first = [];
		var last = [];
		var fullName = [];
		var lastName = [];
		for (const value of iterator) {

			first.push(value.first_name);
			last.push(value.last_name);

			fullName.push(value.first_name + " " + value.last_name)
			// console.log('', fullName)
			// lastName.push(fullName[fullName.length - 1])
			// console.log('last', fullName)



		}
		if (fullName[fullName.length] !== fullName[fullName.length - 1]) {
		}

		// console.log('full',fullName)
		// console.log('first', first)
		// console.log('last', last)
		// console.log(fullName[fullName.length-1])
		// results.forEach(element => {
		// 	let name = element.first_name+" "+element.last_name;

		console.log('names', first[10])

		connection.execute('SELECT title FROM roles', (err, results) => {
			var roles = results;
			// console.log(results)

			inquirer.prompt([
				{
					loop: false,
					type: 'list',
					name: 'empName',
					message: 'Which employee\'s role do you want to update?',
					choices: [
						{ name: fullName[0], value: first[0] + ' ' + last[0] },
						{ name: fullName[1], value: first[1] + ' ' + last[1] },
						{ name: fullName[2], value: first[2] + ' ' + last[2] },
						{ name: fullName[3], value: first[3] + ' ' + last[3] },
						{ name: fullName[4], value: first[4] + ' ' + last[4] },
						{ name: fullName[5], value: first[5] + ' ' + last[5] },
						{ name: fullName[6], value: first[6] + ' ' + last[6] },
						{ name: fullName[7], value: first[7] + ' ' + last[7] },
						{ name: fullName[8], value: first[8] + ' ' + last[8] },
						{ name: fullName[9], value: first[9] + ' ' + last[9] },
						{ name: fullName[10], value: first[10] + ' ' + last[10] },
						//I DONT KNOW HOW TO POPULATE THIS DYNAMICALLY SO SOME NAMES ADDED BEFORE WILL BE MISSING
						{ name: fullName[fullName.length - 1], value: fullName[fullName.length - 1] },
					]

				},
				{
					loop: false,
					type: 'list',
					name: 'roleName',
					message: 'What is the employee\'s role?',
					choices: [
						{ name: results[0].title, value: results[0].title },
						{ name: results[1].title, value: results[1].title },
						{ name: results[2].title, value: results[2].title },
						{ name: results[3].title, value: results[3].title },
						{ name: results[4].title, value: results[4].title },
						{ name: results[5].title, value: results[5].title },
						{ name: results[6].title, value: results[6].title },
						{ name: results[7].title, value: results[7].title },
						//I DONT KNOW HOW TO POPULATE THIS DYNAMICALLY SO SOME ROLES ADDED BEFORE WILL BE MISSING
						{ name: results[results.length - 1].title, value: results[results.length - 1].title },
					]
				},
			])
				.then((answers) => {
					let spacer = ' ';
					let split = answers.empName;
					let firstName = split.split(0, ' '); let lastName = split.split(' ', -1)
					// console.log(lastName[0])
					
					var empFirstName = lastName[0];
					var empLastName = lastName[1];
					// console.log(lastName[1])	
					
					var role_id;
					var manager_id;
					var roles = answers.roleName;
					// console.log(results)

					if (answers.roleName == 'Sales Lead') {
						role_id = 1;
						manager_id = null;
					}
					else if (answers.roleName == 'Salesperson') {
						role_id = 2;
						manager_id = 1;
					}
					else if (answers.roleName == 'Lead Engineer') {
						role_id = 3;
						manager_id = null;
					}
					else if (answers.roleName == 'Software Engineer') {
						role_id = 4;
						manager_id = 3;
					}
					else if (answers.roleName == 'Accountant Manager') {
						role_id = 5;
						manager_id = null;
					}
					else if (answers.roleName == 'Accountant') {
						role_id = 6;
						manager_id = 5;
					}
					else if (answers.roleName == 'Legal Team Lead') {
						role_id = 7;
						manager_id = null;
					}
					else if (answers.roleName == 'Lawyer') {
						role_id = 8;
						manager_id = 7;
					}
					else {
						role_id = roles.length++;
						manager_id = null;
					}



					connection.execute(

						`INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES ('${empFirstName}', '${empLastName}', '${role_id}', '${manager_id}')`,
						function (err, results) {
							console.table(`Updated ${empFirstName} ${empLastName} to the role of ${answers.roleName}`)
							main();

					})//END OF DOT THEN
				//}); //END OF FOREACH
			});//END OF INSERT INTO EMPLOYEES
		});//END OF SELECT NAME FROM EMPLOYEES
	});//END OF SELECT TITLE FROM ROLES
}//END OF UPDATE EMPLOYEE FUNC
