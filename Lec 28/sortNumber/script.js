const fs = require('fs');
const path = require('path')

function getData(fileName){
    return new Promise((resolve, reject)=>{
        const loc = path.join(__dirname, fileName);
        fs.readFile(loc, 'utf-8', (err,data)=>{
            if(err) {
                console.log(err);
                reject(err);
            }
            resolve(data);
        })
    });
}

let arr = [];

// getData('fileA.txt')
//     .then((data)=>{
//         let arr1 = data.split('\r\n');
//         // console.log(arr1);
        
//         getData('fileB.txt')
//             .then((data)=>{
//                 let arr2 = data.split('\r\n');
//                 // console.log(arr2);

//                 arr = [...arr1, ...arr2];
//                 console.log(arr);
//                 arr.sort((a,b)=> a-b);
//                 console.log(arr);

//                 let sortedData = JSON.stringify(arr);
//                 let finalPath = path.join(__dirname, 'fileC.txt');
//                 fs.writeFile(finalPath, sortedData, (err)=>{
//                     if(err) console.log(err)
//                     else console.log("fileC.txt Created Successfully!")
//                 } )
//             })
//     })

async function createFileC(){
    const data1 = await getData('fileA.txt');
    const data2 = await getData('fileB.txt');
    console.log(data1);
    let arr1 = data1.split('\r\n');
    let arr2 = data2.split('\r\n');

    arr = [...arr1, ...arr2];
    arr.sort((a,b)=> a-b);

    let sortedData = JSON.stringify(arr);
    let finalPath = path.join(__dirname, 'final.txt');

    fs.writeFile(finalPath, sortedData, (err)=>{
        if(err) console.log(err)
        else console.log("final.txt Created Successfully!")
    } )
}

createFileC();
