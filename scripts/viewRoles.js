const mysql = require('mysql2');
const table = ('console.table');
const connection = require('../server')

let viewAllRole = function viewAllRole() {
	connection.execute(
	  'SELECT * FROM roles',
	  
	  function(err, results, fields) {
		console.table(results);
		console.table('Press arrow key for more options');
		console.log('\n');
		});

  }

  module.exports = viewAllRole;
//   module.exports.viewAllDep = viewAllDep