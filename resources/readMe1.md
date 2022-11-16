    $ node          // enter REPL mode
    > module        // consoles module object
------------------------------------------------------------------------------------------------------------------
# moduleObject    

someProperties
- id
- path
- exports
- filename
- loaded
- children
- paths

id                  Every module object gets an id property to identify it. 
                    This id is usually the full path to the file, but in a REPL session it’s simply <repl>.

loaded              The module module uses the loaded attribute to track which modules have been loaded (true value) 
                    and which modules are still being loaded (false value)



Node allows many ways to require a file
- relative path
- pre-configured path
- absolute path

------------------------------------------------------------------------------------------------------------------

`require('find44')`
// Node requires find44 module
// So, Node will look for all paths specified by module.paths -- in order
// paths list ===> basically a list of node_modules directories under every directory from the current directory to the root directory
// If Node can’t find find-me.js in any of these paths, it will throw a “cannot find module error

but 'find44' module is nowhere...
Now, we manually create a node_modules folder
add a file find44.js inside it
now test require('find44')                  // It will work         
now test require('find44.js')               // It will also work

Order 
- first Node will look for local node_modules folder
- next it will look @ parent directory... next @ grand parent directory ====> like that it checks all locations mentioned in 'modules.path'
------------------------------------------------------------------------------------------------------

`require('find45')`
Modules don’t have to be files. 
We can also create a find45 folder under node_modules and place an index.js file in there. 
The same require('find45') line will use that folder’s index.js file
require('find45')                       // It will work
require('find45.js')                    // It will NOT work

By default we add <index.js> inside find45 folder
If you want to change add `package.json`        and specify which file should be used to resolve this folder:
----------------------------------------------------------------------------------------------------

`require('find46')`
add package.json
look for yourself
----------------------------------------------------------------------------------------------------

`require.resolve('find47')`

If you want to only resolve the module and not execute it, you can use the require.resolve function. 
This behaves exactly the same as the main require function, but does not load the file.
... later ...
----------------------------------------------------------------------------------------------------

Besides resolving modules from within the node_modules directories
we can also place the module anywhere we want

`require('./lib23/find48')`



