const mysql = require('mysql2');
const table = ('console.table');
const connection = require('../server');
const {main} = require('../index');

let viewAllDep = function viewAllDep() {
	connection.execute(
		'SELECT * FROM departments',
		
		function(err, results, fields) {
			console.table(results);
			main();
	  });

  }

  module.exports = viewAllDep;
//   module.exports.viewAllDep = viewAllDep