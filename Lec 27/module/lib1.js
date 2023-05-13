const lib2 = require('./lib2')

console.log('Inside Lib 1');

let one = "this is lib 1"

function add(a,b){
    return a+b;
}

module.exports = {
    one:one
}

