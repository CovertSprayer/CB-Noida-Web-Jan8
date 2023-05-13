const fs = require('fs');
const path = require('path');

const fruits = [{name:'mango', quantity:2},
                {name:'cheeko', quantity:1},
                {name:'orange', quantity:3},
                {name:'banana', quantity:3},
                {name:'apple', quantity:4}];

const fruitsData = JSON.stringify(fruits);
// console.log(fruitsData);
const fileName = 'data.json';
const loc = path.join(__dirname, 'data', fileName);

// console.log(__dirname);

fs.writeFile(loc,fruitsData,(err)=>{
    if(err) console.log(err);
    else console.log('Done!');
})