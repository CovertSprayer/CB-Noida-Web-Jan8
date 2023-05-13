const lib1 = require('./lib1')

console.log('Inside Lib 2');

let two = "this is lib two";

function multiply(a,b){
    return a*b;
}

module.exports.lib1 = lib1;
module.exports.two = two;
module.exports.multiply = multiply;

// module.exports = {
//     lib1:lib1,
//     two:two,
//     multiply:multiply
// }