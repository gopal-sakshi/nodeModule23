const user = require('./1');
const defaultExportUser2 = require('./2');
const defaultExportUser3 = require('./3');

/***************************** Multiple Exports ************************************/
console.log(`Greetings ===> ${user.sayHello()}`);
console.log(`User ===> ${user.getName()}`);
console.log(`DOB ==> ${user.dob}`);
console.log(`residnce ===> ${user.directlyExportedResidence}`);
/***************************************************************************************/




/*********************************** Default exports 2 *************************************/
const lalettan = new defaultExportUser2('Mohanlal', 62, 'complete_actor@gmail.com');
// console.log(`default ===> ${lalettan.getUserStats}`);                   // SEE what this prints
console.log(`defaultExportedUser ===> ${lalettan.getUserStats()}`);
/***************************************************************************************/



/*********************************** Default exports 3 *************************************/
const { getName, dob }  = require('./3');
console.log(`${getName()} was born on ${dob}`);
/***************************************************************************************/