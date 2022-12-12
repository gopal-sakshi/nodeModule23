require = function() {
    return { mocked23: true };
}

var jingChak29 = require('helloDoctor');
console.log(jingChak29);

// original require ===> a module that is used to import other modues' exports
    // mock require =====> it just returns an object with single property