exports = function add23(a,b) { return a+ b} ;
console.log('In Index24_a ', module);

/*
    We can not do exports = function() {} to make the exports object into a function. 
    We can’t actually do that because the exports variable inside each module is just a reference to module.exports which manages the exported properties. 
    When we reassign the exports variable, that reference is lost and we would be introducing a new variable instead of changing the module.exports object.

    ************************************************************************************


In Index24  Module {
    id: '.',
    path: '/home/vsspl/Desktop/backEnd/nodeModule23',
    exports: { },
    filename: '/home/vsspl/Desktop/backEnd/nodeModule23/index24.js',
    loaded: false,
    children: [],
    paths: [
        '/home/vsspl/Desktop/backEnd/nodeModule23/node_modules',
        '/home/vsspl/Desktop/backEnd/node_modules',
        '/home/vsspl/Desktop/node_modules',
        '/home/vsspl/node_modules',
        '/home/node_modules',
        '/node_modules'
    ]
}


*/