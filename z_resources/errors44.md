`Unexpected token 'export'`
- NodeJS versions prior to v14.13.0 
    do not support ESM (export keyword syntax) 
    use CommonJS Modules (module.exports property syntax)
- NodeJS v14.13.0 and newer 
    supports ESM but it must be enabled first
    enable it by setting "type":"module" in your package.json


`how to use ES modules in your Browser directly `
- Use the ESM version of your dependencies          <!-- the one that has import instead of require --->
- Make your browser work with the experimental importmap feature.
- Create an importmap in your HTML file.
    It only works with inline script tags in Chrome                 <script type="importmap"
- Load your own code as an ESM module.                              <script type="module"


