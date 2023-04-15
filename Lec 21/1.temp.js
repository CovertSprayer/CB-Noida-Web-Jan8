
function MainCourse(cb){
    setTimeout(() => {
        console.log("Main-Course");
        cb(Drinks);
    }, 3000);
}

function Sweets(cb){
    setTimeout(() => {
        console.log("Sweets");
        cb();
    }, 2000);
}

function Drinks(){
    setTimeout(() => {
        console.log("Drinks");
    }, 3000);
}



MainCourse(Sweets);



// url : https://abc.com/profile.com