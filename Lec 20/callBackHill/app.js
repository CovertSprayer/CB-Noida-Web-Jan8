
// High order function

// function downloadFile(url, downloaded){

//     console.log(`file is downloading from ${url}`);
    
//     setTimeout(() => {
//         const path = url.split('/').pop();
//         downloaded(path);
//         // console.log("file downloaded");
//     }, 3000);

// }

// function compressFile(path, compressed){
//     console.log(`File is compressing to ${path}`);

//     setTimeout(() => {
//         const compressedPath = "profile.jpg".split('.')[0] + '.zip';
//         compressed(compressedPath);
//     }, 2000);
// }

// function uploadFile(compressedPath, uploaded){
//     console.log(`file uploading started ${compressedPath}`);

//     setTimeout(() => {
//         const uploadPath = 'http:/localhost/' + compressedPath;
//         uploaded(uploadPath);

//     }, 3000);
// }

// downloadFile("https://facebook.com/profile.jpg",function(path){
//     console.log('file is successfully downloaded');
//     compressFile(path, function(compressedPath){
//         console.log(`file compressed successfully ${compressedPath}`);
//         uploadFile(compressedPath, function(uploadPath){
//             console.log(`file successfully uploaded at ${uploadPath}`);
//             console.log('Successfully Done!');
//         })
//     })
// });

// function createPromise(){

//     return new Promise((resolve, reject)=>{
    
//         setTimeout(() => {
//             const randomNum = Math.random();
//             console.log(randomNum);
//             if(randomNum > 0.5){
//                 resolve();
//             }else{
//                 reject();
//             }
//         }, 2000);
    
//     })
// }

// createPromise().then(()=>{
//     console.log("Promise Resolved")
// }).catch(()=>{
//     console.log("Promise Rejected")
// });


// function downloadFile(url, downloaded){

//     console.log(`file is downloading from ${url}`);
    
//     setTimeout(() => {
//         const path = url.split('/').pop();
//         downloaded(path);
//         // console.log("file downloaded");
//     }, 3000);

// }

function downloadFile(url){

    return new Promise((resolve, reject)=>{
        if(!url.startWith('http')){
            throw err("Invalid URL!");
        }

        console.log(`file is downloading from ${url}`);

        setTimeout(() => {
            const path = url.split('/').pop();
            // downloaded(path);
            resolve(path);
        }, 3000);
    })

}

function compressFile(path){
    return new Promise((resolve, reject)=>{
        console.log(`starting compressing file ${path}`);

        setTimeout(() => {
            const compressedPath = path.split('.')[0] + '.zip';
            // downloaded(path);
            resolve(compressedPath);
        }, 2000);
    })
}

function uploadFile(compressedPath){
    
    return new Promise((resolve, reject)=>{
        console.log(`file Uploading started ${compressedPath}`);

        setTimeout(() => {
            const uploadPath = 'http:/localhost/' + compressedPath;
            // uploaded(uploadPath);
            resolve(uploadPath);

        }, 3000);
    })
}

// downloadFile("https://facebook.com/profile.jpg")
// .then((path)=>{
//     console.log(`file downloaded successfully as ${path}`);
//     compressFile(path)
//     .then((compressedPath)=>{
//         console.log(`file compressed to ${compressedPath}`);
//         uploadFile(compressedPath)
//         .then((uploadPath)=>{
//             console.log(`file successfully uploaded at ${uploadPath}`);
//         })
//     })

// })

// downloadFile("tpc://facebook.com/profile.jpg")
// .then(compressFile)
// .then(uploadFile)
// .then((uploadPath)=>{
//     console.log(`file successfully uploaded at ${uploadPath}`)
// })
// .catch((err)=>{
//     console.log("something went wrong!");
//     console.log(err);
// })

const interval = setInterval(() => {
    console.log("inside interval");
}, 2000);

