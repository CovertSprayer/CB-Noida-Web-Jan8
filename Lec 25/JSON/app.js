const obj ={
    first_name: "Salman",
    last_name:  "Khan",
    movies: ["tiger", "wanted", "kisi ka bhai kisi kik jaan", "raadhe"],
    age: 62,
    getAge: ()=>{
        return age;
    }
}

const stringObj = JSON.stringify(obj);
console.log(stringObj);

const parseObj = JSON.parse(stringObj);
console.log(parseObj);