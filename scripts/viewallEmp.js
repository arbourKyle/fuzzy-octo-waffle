const mysql = require('mysql2');
const table = ('console.table');
const connection = require('../server')

let viewAllEmp = function viewAllEmployees() {
	connection.execute(
	  'SELECT * FROM employees',
	  
	  function(err, results, fields) {
		
		console.log('\n');
		console.table(results);
		console.table('Press arrow key for more options');
	  });

  }

  module.exports = viewAllEmp;
//   module.exports.viewAllDep = viewAllDep