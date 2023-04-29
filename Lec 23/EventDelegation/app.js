

const parent = document.querySelector('.parent')
const childs = document.querySelectorAll('.child')


// childs.forEach((child)=>{
//     child.addEventListener('click', (e)=>{
//         console.log(e.target.innerText);
//     })
// })

parent.addEventListener('click', (e)=>{
    console.log(e.target.innerText)
})