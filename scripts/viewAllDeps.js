const mysql = require('mysql2');
const table = ('console.table');
const connection = require('../index')

function viewAllDep() {
	connection.execute(
	  'SELECT * FROM departments',
	  
	  function(err, results, fields) {
		console.table(results);
	  }
	  );
	  // main();
  }

  module.exports = {viewAllDep};