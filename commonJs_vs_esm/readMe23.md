EcmaScript 5 and earlier editions were not designed with modules in mind
Developers came up with different patterns to simulate modular design in JavaScript.
https://www.jvandemo.com/a-10-minute-primer-to-javascript-modules-module-formats-module-loaders-and-module-bundlers/


IIFE
- encapsulate code complexity inside IIFE so we don't have to understand what the IIFE code does
- define variables inside the IIFE so they don't `pollute the global scope` 
    var statements inside the IIFE remain within the IIFE's closure
- But, they don't provide a mechanism for dependency management.


Revealing Module pattern
- similar to an IIFE, but we assign the return value to a variable:
- does not offer a mechanism for dependency management.
-------------------------------------------------------------------------------------------------------

Before EcmaScript 6 or ES2015, JavaScript did not have an official syntax to define modules


`Asynchronous Module Definition (AMD)`
- is used in browsers and uses a define function to define modules
- see index_amd.html

`CommonJS`
- 

`Universal Module Definition (UMD)`


`System.register`


`ES6 module format`
- Unfortunately, the native module format is not yet supported by all browsers.
- We can already use the ES6 module format today, 
    but we need a transpiler like Babel to transpile our code to an ES5 module format such as AMD or CommonJS 
    only then we can actually run our code in the browser.
- https://www.sitepoint.com/using-es-modules/
--------------------------------------------------------------------------------------------------------


Popular libraries are starting to be published as ES modules <NOW>, 
- however they’re still targeting bundlers and not direct imports.

<!-- This humble little import triggers a waterfall of 640 requests -->
<!-- we probably shouldn’t do this since it loads every part of the library each as a single request -->
<!-- This means that loading one library will take hundreds of requests to do it. -->
<script type="module">
    import _ from 'https://unpkg.com/lodash-es'
</script>

<!-- just import the one function we need -->
<script type="module">
  import cloneDeep from 'https://unpkg.com/lodash-es/cloneDeep'
</script>
------------------------------------------------------------------------------------------

# CommonJs vs ES6
- File extensions
    In all of our ES modules imports we explicitly added the file extension to all file imports. 
    This is mandatory for ES Modules (as opposed to CommonJS, Webpack, TypeScript)
    This is significant as 
        NodeJS distinguishes between CommonJS modules and ES Modules via the file extension. 
        files with the .js extension will be treated as CommonJS modules
        files with the .mjs extension are treated as ES Modules.
    ES Modules can import CommonJS modules. Vice versa is not the case. 
    CommonJS modules cannot import ES Modules... You are not able to import .mjs files from .js files
- dynamic vs static
    With ES Modules, imports are static, which means they are executed at parse time... 
    This is why imports are “hoisted”. They are implicitly moved to the top of the file
    Upside of ES6 imports === errors can be caught upfront 
    we cannot use the import syntax in the middle of your code
    to dynamically import modules at runtime ====> use dynamic import() function
    CommonJS imports are dynamically resolved at runtime. 
    The require() function is simply run at the time our code executes. 
    As a consequence, you can call it everywhere in your code.

Presently use as it is... no need to migrate
If you are starting new, use ES6
you might migrate to the ES Modules syntax while using CommonJS under the hood. 
    This can be accomplished by tools like Babel (or) TypeScript 
    allows you to decide to more easily switch to ES Modules at a later point in time. 


Many NPM packages are not available as ES Modules.
NodeJS allows us to import CommonJS modules from ES Modules



https://blog.logrocket.com/publishing-node-modules-typescript-es-modules/
- search in github ===> gopal612-module-lib



--------------------------------------------------------------------------------------------------------
If you are writing an application that will run purely in Node.js
- you should be using "commonjs" modules, not AMD modules, when you compile your TypeScript files.

If you are writing an application that will run both in Node.js & in browser
- you should be using "umd" modules, not AMD modules, when you compile your TypeScript files.

So, change the configuration object
    { module: "commonjs" } or { module: "umd" }
-----------------------------------------------------------------------------------------------------

If you are using Node.js modules, __dirname and __filename don't exist.
From the Node.js documentation:
No require, exports, module.exports, __filename, __dirname
These CommonJS variables are not available in ES modules.
--------------------------------------------------------------------------------------------------------