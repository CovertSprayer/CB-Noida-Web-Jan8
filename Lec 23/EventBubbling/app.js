const grandParent = document.querySelector('.grand-parent')
const parent = document.querySelector('.parent')
const mother = document.querySelector('.mother')

mother.addEventListener('click', (e)=>{
    // e.stopPropagation();
    console.log('Mummy ko pata chala')
})
parent.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('Papa ko pata chala')
})
grandParent.addEventListener('click', (e)=>{
    console.log('Dada ko pata chala')
})