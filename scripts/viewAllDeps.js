const mysql = require('mysql2');
const table = ('console.table');
const connection = require('../server')

let viewAllDep = function viewAllDep() {
	connection.execute(
	  'SELECT * FROM departments',
	  
	  function(err, results, fields) {
		console.table(results);
	  });

  }

  module.exports = viewAllDep;
//   module.exports.viewAllDep = viewAllDep