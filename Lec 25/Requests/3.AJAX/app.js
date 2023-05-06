const URL = 'https://cat-fact.herokuapp.com/facts';

const btn = document.querySelector('.btn');
const catFacts = document.querySelector('.cat-facts');


const xhr = new XMLHttpRequest;

// request success hone pr kya function chalega
xhr.onload = function(data){
    const res = data.currentTarget.response;
    const theekSaNaam = JSON.parse(res);

    const factsData = theekSaNaam.map((obj) => {
        return obj.text;
    })
    addDataToList(factsData);
}

// request reject hone pr kya function chalega
xhr.onerror = function(err){
    console.log('Error!!');
}

// request kaha send karni hai
xhr.open('GET', URL);


// request kab send karni hai
btn.addEventListener('click', ()=>{
    xhr.send();
})

function addDataToList(data){
    data.forEach(obj => {
        // console.log(obj);
        const li = document.createElement('li');
        li.innerText = obj;
        catFacts.append(li);
    });
}
