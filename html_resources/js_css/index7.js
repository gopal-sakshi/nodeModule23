// THIS WONT WORK
    // ReferenceError: greetFromModule is not defined
function greet(){
    alert('Hello');
}

// First of all you have to explicitly export you function:
// Secondly, a module has it's own scope (this is the whole point of modules) 
    // thus you need to add the function to the global scope.
// to use Javascript modules in our HTML code
    // use <script type="module"> tag. 
    // Importing modules cannot be done in a normal script tag.
// A module is a Javascript file. However unlike a normal Javascript file
    // a module can specify which variables & functions can be accessed outside the module. 
    // Other sections of the module cannot be accessed. 
    // A module can also load other modules.
// Module Scripts are Deferred By the Browser
    // A script tag of type="module", whether inline or external is always deferred by the browser 
    // regardless of the fact whether defer attribute is used or not
    // It is loaded in parallel by the browser, not impacting the webpage load time. 
    // Once loaded, it waits for the DOM to get ready, and then the script is executed. 
    // The page suffers no performance penalty as such.

// THIs will WORKKKKKKKKKKKK
export function greet23() {
    alert("Hello from module");
}

export function greet24() {
    alert("Hello to Empty Obj");
}