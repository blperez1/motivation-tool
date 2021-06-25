const taskList = [];

const tasks = document.querySelector("#tasks");
const inputValue = document.querySelector("#input-value");
const saveBtn = document.querySelector("#save-btn");
const randomBtn = document.querySelector("#random-btn");
const numberHeading = document.querySelector("#random-number");
const oneTask = document.querySelector('#one-task');
const manyTasks = document.querySelector('#many-tasks');

function addToList(task) {
    const taskItem = {
        id: taskList.length + 1,
        task
    }

    taskList.push(taskItem)
}

function renderTask({id, task}) {
    return `
        <li class="task-item" data-dbid=${id}>${task}</li>
    `
}

function renderTasks() {
    let html = "";
    for(let task of taskList) {
        html += renderTask(task)
    }

    tasks.innerHTML = html;
}

saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addToList(inputValue.value);
    renderTasks();
    inputValue.value = "";
})

let random = Math.floor(Math.random() * taskList.length) + 1;
let taskItem = document.getElementsByTagName("li");

oneTask.addEventListener('click', (e) => {
    e.preventDefault();
    numberHeading.innerText = random;

    for(let item of taskItem) {
        item.style.color = "white";
        let dbid = item.getAttribute("data-dbid");
        if(dbid == random) {
            item.style.color = "purple";
        }
    }

})

manyTasks.addEventListener('click', (e) => {
    e.preventDefault();
    
})

