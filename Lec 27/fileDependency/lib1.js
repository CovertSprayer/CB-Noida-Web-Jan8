const lib2 = require('./lib2')

console.log('Inside Lib 1');

let one = "this is lib 1";

function add(a,b){
    return a+b;
}

module.exports.lib2 = lib2;
module.exports.one = one;


// module.exports = {
//     lib2:lib2,
//     one:one
// }




