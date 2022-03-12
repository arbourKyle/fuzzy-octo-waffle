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
	switch(answers.choices) {
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
			console.log('catch if',error)
	
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
		
		function(err, results, fields) {
						
			console.table(results);
			main()
		});
};

//ROLES TABLE
const viewAllRole = () => {
	connection.execute(
	  'SELECT * FROM roles',
	  
	function(err, results, fields) {
		
		console.table(results);
		main()
	});
};

//EMPLOYEES TABLE
const viewAllEmp = () => {
	connection.execute(
	  'SELECT * FROM employees',
	  
	function(err, results, fields) {
		
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
				'INSERT INTO departments (name) VALUES ("'+answer.depName+'")',
				
				function(err, results) {
					
					console.table('Added '+answer.depName+' to the database')
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
					
			connection.execute('SELECT * FROM departments',(err, results, fields) =>{depLength = results.length;
				
			let title = answer.roleName;
			let salary = answer.salary;
			let dep = answer.department;
			if(answer.department != 'Salesperson' || 'Software Engineer' || 'Accountant' || 'Lawyer') {
				depLength++;
			}
	
			connection.execute(
				
				'INSERT INTO departments (name) VALUES ("'+dep+'")',
				
				(err, results) => {console.table('added "'+dep+'" to roles table');
					
					// main()
			});
			connection.execute(
				//HOW DO I ADD DEPLENGTH TO DEPARTMENT_ID ????????????????????????????????????????????????????????
				'INSERT INTO roles (title, salary, department_id) VALUES ("'+title+'","'+salary+'","'+depLength+'")',
				
				(err, results) => {console.table('added "'+title+'","'+salary+'" to roles table');
					
					main()
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
				main()
			});
		});
	};
	
	//UPDATE ROLE
	const updateEmpRole = () => {
		
		first = [];
		last = [];
		connection.execute('SELECT first_name, last_name FROM employees', (err, results) => {
			results.forEach(element => {
				
				first = element.first_name;
				last = element.last_name;
			});
			
			
			connection.execute('SELECT title FROM roles', (err, results) => {let roles = results;
				console.log('inEach',first);
				console.log('inEach',last);
				
				inquirer.prompt([
					{
						type: 'list',
						name: 'roleName',
						message: 'Which employee\'s role do you want to update?',
						choices: [[`${first}`][`${last}`]]
					},
					{
						type: 'list',
						name: 'roleName',
						message: 'What is the employee\'s role?',
						choices: [roles]
					},
				])
				
				connection.execute(
					
					'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (Fred, Zed, 2, 1)',
					
					function(err, results) {
						console.log('insert emp',results)
			});//END OF INSERT INTO EMPLOYEES
		});//END OF SELECT NAME FROM EMPLOYEES
	});//END OF SELECT TITLE FROM ROLES
}
		