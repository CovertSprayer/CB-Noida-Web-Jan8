const inp = document.querySelector('.inp')
const btn = document.querySelector('.btn')
const taskList = document.querySelector('.task-list')

let tasks = [];

btn.addEventListener('click', (e)=>{
    // console.log(inp.value)
    tasks.push(inp.value)
    inp.value = '';
    addTaskToList(tasks)
})

function addTaskToList(data){
    const newItem = document.createElement('div');
    newItem.setAttribute('class', 'item');
    // console.log(newItem)
    // console.log(data.pop)

    let str = `<div class="section-A">
                    <input class="checkbox" type="checkbox">
                    <li class="text">${data.pop()}</li>
                </div>

                <div class="section-B">
                    <span class="up-arrow">🔼</span>
                    <span class="bin">🗑️</span>
                    <span class="down-arrow">🔽</span>
                </div>`
    newItem.innerHTML = str;
    taskList.append(newItem);

    console.log(newItem)
}

taskList.addEventListener('click', (e)=>{
    const element = e.target.getAttribute('class');
    console.log();
    if(element === 'checkbox'){
        e.target.nextElementSibling.classList.toggle('check');
    }

    if(element === 'up-arrow'){
        const currElement = e.target.parentElement.parentElement;
        const prevElement = currElement.previousElementSibling;

        prevElement.before(currElement);
    }
})