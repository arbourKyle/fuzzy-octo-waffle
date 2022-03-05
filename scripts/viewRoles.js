const mysql = require('mysql2');
const table = ('console.table');
const connection = require('../server')

let viewAllRole = function viewAllRole() {
	connection.execute(
	  'SELECT * FROM roles',
	  
	  function(err, results, fields) {
		console.table(results);
	  });

  }

  module.exports = viewAllRole;
//   module.exports.viewAllDep = viewAllDep