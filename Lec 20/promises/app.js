



const promise = new Promise((resolve, reject)=>{
    
    setTimeout(() => {
        const randomNum = Math.random();
        console.log(randomNum);
        if(randomNum > 0.5){
            resolve();
        }else{
            reject();
        }
    }, 2000);

})

promise.then(()=>{
    console.log("Promise Resolved")
}).catch(()=>{
    console.log("Promise Rejected")
});
