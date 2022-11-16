In any module, exports is a special object (or)
Every module object, had an exports property


The exports object becomes complete when Node finishes loading the module.
The whole process of requiring/loading a module is synchronous. 
That’s why we were able to see the modules fully loaded after one cycle of the event loop.
This also means that we cannot change the exports object asynchronously.
fs.readFile('/etc/passwd', (err, data) => {
    if (err) throw err;
    exports.data = data;                            // Will not work.
});
---------------------------------------------------------------------------------------

There is nothing special about require. 
It’s an object 
    that acts as a function 
    that takes a module name or path 
    and returns the module.exports object. 
We can simply override the require object with our own logic
---------------------------------------------------------------------------------------


