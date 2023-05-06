const URL = 'https://cat-fact.herokuapp.com/facts';

const btn = document.querySelector('.btn');
const catFacts = document.querySelector('.cat-facts');

async function getData(URL){

    try {
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data);
        return data;
        
    } 
    catch (err) {
        console.log(err);
    }

}

function addDataToList(data){
    data.forEach(obj => {
        // console.log(obj);
        const li = document.createElement('li');
        li.innerText = obj;
        catFacts.append(li);
    });
}

async function fun(){
    const data = await getData(URL);
    const factsData = data.map((obj) => {
        return obj.text;
    })
    addDataToList(factsData);

}

btn.addEventListener('click', ()=>{
    fun();
})