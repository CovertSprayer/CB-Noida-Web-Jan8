const inp = $('.inp')
const btn = $('.btn')
const taskList = $('.task-list')

let tasks = [];

btn.on('click', (e)=>{
    // console.log(inp.value)
    tasks.push(inp.val())
    inp.val('');
    addTaskToList(tasks)
})

function addTaskToList(data){
    const newItem = $('<div>');
    newItem.attr('class', 'item');
    console.log(newItem)
    console.log(data[data.length-1])

    let str = `<div class="section-A">
                    <input class="checkbox" type="checkbox">
                    <li class="text">${data[data.length-1]}</li>
                </div>

                <div class="section-B">
                    <span class="up-arrow">🔼</span>
                    <span class="bin">🗑️</span>
                    <span class="down-arrow">🔽</span>
                </div>`
    newItem.html(str);
    taskList.append(newItem);

    console.log(newItem)
}
var $ = jQuery.noConflict();

taskList.on('click', (e)=>{

    const element = $(e.target).attr('class');
    console.log(element);
    if(element === 'checkbox'){
        $(e.target).next().toggleClass('check');
    }

    if(element === 'up-arrow'){
        const currElement = $(e.target).parent().parent();
        const prevElement = currElement.prev();

        prevElement.before(currElement);
    }
})


