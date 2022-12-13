import { showMessage } from './index6_a.js';

// THIS WONT WORK.......
function showImportedMessage_whichDoesntWork() {
    showMessage();
}

// THIS WILL WORK
window.showImportedMessage = function showImportedMessage() {
    showMessage();
}


// In a module context, variables don't automatically get declared globally. 
    // You'll have to attach them to window yourself. 
    // This is to prevent the scope ambiguity issues that you'd run into when using normal script tags.


// Assigning to window is fine. 
    // Makes it 100% clear that you're adding something into the global namespace 
    // (something that 'var' in a traditional non-module script tag doesn't make clear). 
    // In a larger project, you could accidentally have two variables named "user" if you aren't careful
    // Good practices can help avoid silly issues like that, but modules prevent them from happening entirely