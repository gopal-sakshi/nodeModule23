const dep1_copy = require('./dep1');
console.log('Module1 is partially loaded here ', dep1_copy);
const add = (a,b) => a+b;
const multiply = (a,b) => a*b;

var dep2 = {
    add: add,
    multiply: multiply
}

module.exports = dep2;