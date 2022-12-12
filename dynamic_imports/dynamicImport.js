(async () => {
    // The import function returns a promise since it’s asynchronous. It’ll resolve to an object with the exports.
    const helloModule = await import("./hello.js");
    document.getElementById("app-23").innerHTML = helloModule.hello;
})();