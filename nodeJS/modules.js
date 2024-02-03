//sometimes we want to devide our code into different files and import and export thing to and from those files

//to import people file into this file
const xyz = require('./people.js');

console.log(xyz); // xyz is an empty obj but when we export the properties that we want , xyz contains that (in this exp obj with people and age properties in it)

//or access separately
console.log(xyz.people, xyz.ages);

//we import the file but we don't have direct access to its content
console.log(people); //people is not defined.
//to get the access we should do export in the people file

// or we can use destructuring to import multiple different things from different files, 
const {people, ages} = require('./people.js'); //the names of the properties should be the same as what it is in the exported file
console.log(people, ages);

//for our operating sys we can have access to different properties in it, for exp:
const os = require('os');
console.log(os.platform(), os.homedir);