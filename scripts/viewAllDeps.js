const mysql = require('mysql2');
const main = require('..');
const table = ('console.table');
const connection = require('../server');



let viewAllDep = function viewAllDep(main) {
	connection.query(
		'SELECT * FROM departments',
		
		function(err, results, fields) {
			
			console.table('\n');
			console.table(results);
			console.table('Press arrow key for more options');
			
		}).then(() =>{main()});
		

  }
  
  module.exports = viewAllDep;
  
  
//   module.exports.viewAllDep = viewAllDep