function mainCourse(){

    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log("mainCourse");
            resolve();
        }, 3000);
    });
}

function Sweets(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Sweets");
            resolve();
        }, 2000);
    })
}

function Drinks(){
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Drinks");
            resolve();
        }, 3000);
    })
}

// mainCourse()
// .then(Sweets)
// .then(Drinks)
// .catch((err)=>{
//     console.log(err);
// })

async function solve(){
    try {
        await mainCourse();
        await Sweets();
        await Drinks();
    } catch (error) {
        console.log(error);
    }
}

solve();




// function check(){
//     const randomNum = Math.random();

//     return new Promise((resolve, reject) => {
//         if(randomNum > 0.5){
//             resolve();
//         }
//         else{
//             reject();
//         }
//     })
// }

// check()
// .then(()=>{console.log("Greater")})
// .catch((err)=>{
//     console.log("Error in processing",err);
// });
