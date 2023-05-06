const URL = 'https://cat-fact.herokuapp.com/facts';

const btn = document.querySelector('.btn');
const catFacts = document.querySelector('.cat-facts');

btn.addEventListener('click', ()=>{
    fetch(URL)
    .then((res)=>{
        return res.json();
    })
    .then((data)=>{
        data.forEach(obj => {
            const li = document.createElement('li');
            li.innerText = obj.text;
            catFacts.append(li);
        });
    })
    .catch(err => console.log(err));
})

