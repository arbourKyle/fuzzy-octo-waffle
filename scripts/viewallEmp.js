const mysql = require('mysql2');
const table = ('console.table');
const connection = require('../server')

let viewAllEmp = function viewAllEmployees() {
	connection.execute(
	  'SELECT * FROM employees',
	  
	  function(err, results, fields) {
		console.table(results);
	  });

  }

  module.exports = viewAllEmp;
//   module.exports.viewAllDep = viewAllDep