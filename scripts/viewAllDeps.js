const mysql = require('mysql2');
const table = ('console.table');
const connection = require('../server');



const viewAllDep = (results) => {
	connection.promise().execute(
		'SELECT * FROM departments')}
  
  module.exports = viewAllDep;
  
  
//   module.exports.viewAllDep = viewAllDep