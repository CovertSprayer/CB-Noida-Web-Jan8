
function delay(n){
    let x = new Date().getTime();
    
    while(new Date().getTime() < x + n*1000){}
}


console.log("Start");

// delay(4);

setTimeout(() => {
    console.log("hello");
}, 3000);

console.log("End");


