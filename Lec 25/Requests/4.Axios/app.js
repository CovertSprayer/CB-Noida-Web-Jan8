const URL = 'https://cat-fact.herokuapp.com/facts';

const btn = document.querySelector('.btn');
const catFacts = document.querySelector('.cat-facts');


function getData(URL){
    return new Promise((resolve, reject) => {
        axios.get(URL)
        .then((res)=>{
            resolve(res.data);
        })
        .catch(err => console.log(err));
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

async function fun(){
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

