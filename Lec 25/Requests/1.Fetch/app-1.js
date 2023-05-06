const URL = 'https://cat-fact.herokuapp.com/facts';

const btn = document.querySelector('.btn');
const catFacts = document.querySelector('.cat-facts');

function getData(URL){
    return new Promise((resolve, reject) => {
        fetch(URL)
            .then((res) => {
                return res.json();
            })
            .then((data)=>{
                resolve(data);
            })
            .catch((err)=>{
                reject(err);
            })
    })
}

function addDataToList(data){
    data.forEach(obj => {
        // console.log(obj);
        const li = document.createElement('li');
        li.innerText = obj;
        catFacts.append(li);
    });
}

function fun(){
    getData(URL)
    .then(data =>{
        const factsData = data.map((obj)=>{
            return obj.text;
        })
        console.log(factsData)
        addDataToList(factsData);
    })
    .catch()
}

btn.addEventListener('click', ()=>{
    fun();
})