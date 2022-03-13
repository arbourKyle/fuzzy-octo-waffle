// const inquirer = require('inquirer');
// results = [{first_name: 'David', last_name: 'Wu'}]
// console.log(results[0].first_name)
// fullName = results[0].first_name +' '+results[0].last_name

// inquirer.prompt([
//     {
//         type: 'list',
//         name: 'test',
//         message: 'Which employee\'s role do you want to update?',
//         choices: [{name: "David Wu", value:fullName}, {name: "Bob Belcher", value: "2"}]
//     },
// ]).then((answersHash)=>{
//    console.log(  answersHash.test  )  //will be 1 if you select David Wu from the menu!
// })

var mammals = new Array("cat","dog","human","whale","seal");
var animalString = "";
for (var i = 0; i < mammals. length; i++) {
   animalString += mammals[i] + " ";
}
console.log(animalString);