const fs = require('fs');
const path = require('path');

const fileName = 'data.json';
const loc = path.join(__dirname, 'data', fileName);

fs.readFile(loc,{
    encoding: 'utf-8'
}, (err,data)=>{
    if(err) console.log(err);
    else console.log(data);
})