const mysql = require('mysql2');
const table = ('console.table');
const connection = require('../server')

let viewAllRole = function viewAllRole() {
	connection.execute(
	  'SELECT * FROM roles',
	  
	  function(err, results, fields) {
		
		console.log('\n');
		console.table(results);
		console.table('Press arrow key for more options');
		});

  }

  module.exports = viewAllRole;
//   module.exports.viewAllDep = viewAllDep