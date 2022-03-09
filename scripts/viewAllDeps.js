const mysql = require('mysql2');
const table = ('console.table');
const connection = require('../server');



let viewAllDep = function viewAllDep() {
	connection.execute(
		'SELECT * FROM departments',
		
		function(err, results, fields) {
			
			console.table(results);
			console.table('Press arrow key for more options');
			console.table('\n');
			
		});

  }
  
  module.exports = viewAllDep;
  
  
//   module.exports.viewAllDep = viewAllDep