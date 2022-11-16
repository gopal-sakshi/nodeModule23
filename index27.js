// module.exports object in every module is what the require function returns when we require that module

const find48_required = require('./lib23/find48');
// This captures the properties exported in lib23/find48 into the find48_required constant

console.log(` ---------->`, find48_required);