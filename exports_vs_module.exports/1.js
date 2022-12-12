const getName = () => { return 'Surya Bhai'; };
const dateOfBirth = '12.01.1982';

/******************** EXPORTS ************************/
exports.dob = dateOfBirth;
exports.getName = getName;
exports.directlyExportedResidence = 'Chennai';
exports.sayHello = () => 'Hello World !!!';
/****************************************************/


/* 
    here we have multiple exports.... 
    used in case of helper functions that could be needed all over an app
    - like sayHello() is a helper function...

    2.js ====> deals with single export (so, its like default export)

*/