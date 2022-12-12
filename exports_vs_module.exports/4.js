// APPROACH I
exports.foo = 'foo';
module.exports = function singamalai () { return 'bar'; };
exports.blahblah = 'idi kooda export avvadu le ';
// Now 'foo' (or) blahblah is not exported because
    // if module.exports is there... only it gets exported
    // nothing else gets exported