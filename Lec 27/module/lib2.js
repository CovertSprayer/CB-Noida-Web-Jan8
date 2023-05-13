const lib1 = require('./lib1')

console.log('Inside Lib 2');

let two = "this is lib two";

function multiply(a,b){
    return a*b;
}

module.exports = {
    two:two,
    multiply:multiply
}