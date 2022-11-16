require('./lib23/find48');
console.log('In index', module); 

/*
    node index23.js
    This is the output

    In find48  Module {
        id: '/home/vsspl/Desktop/backEnd/nodeModule23/lib23/find48.js',
        path: '/home/vsspl/Desktop/backEnd/nodeModule23/lib23',
        exports: {},
        filename: '/home/vsspl/Desktop/backEnd/nodeModule23/lib23/find48.js',
        loaded: false,
        children: [],
        paths: [
            '/home/vsspl/Desktop/backEnd/nodeModule23/lib23/node_modules',
            '/home/vsspl/Desktop/backEnd/nodeModule23/node_modules',
            '/home/vsspl/Desktop/backEnd/node_modules',
            '/home/vsspl/Desktop/node_modules',
            '/home/vsspl/node_modules',
            '/home/node_modules',
            '/node_modules'
        ]
    }


    In index Module {
        id: '.',
        path: '/home/vsspl/Desktop/backEnd/nodeModule23',
        exports: {},
        filename: '/home/vsspl/Desktop/backEnd/nodeModule23/index23.js',
        loaded: false,
        children: [
            Module {
            id: '/home/vsspl/Desktop/backEnd/nodeModule23/lib23/find48.js',
            path: '/home/vsspl/Desktop/backEnd/nodeModule23/lib23',
            exports: [Object],
            filename: '/home/vsspl/Desktop/backEnd/nodeModule23/lib23/find48.js',
            loaded: true,
            children: [],
            paths: [Array]
            }
        ],
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