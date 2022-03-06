const mysql = require('mysql2');
const table = ('console.table');
const connection = require('../server');



let viewAllDep = function viewAllDep() {
	connection.execute(
		'SELECT * FROM departments',
		
		function(err, results, fields) {
			
			console.log('\n', '\n');
			console.table(results);
			console.log(results.length);
			console.table('Press arrow key for more options');
			console.log('\n', '\n', '\n', '\n');
	  });

  }
  
  module.exports = viewAllDep;
  
  
//   module.exports.viewAllDep = viewAllDep