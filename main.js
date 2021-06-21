const taskList = [];

const tasks = document.querySelector("#tasks");
const inputValue = document.querySelector("#input-value");
const saveBtn = document.querySelector("#save-btn");

function addToList(task) {
    const taskItem = {
        id: taskList.length + 1,
        task
    }

    taskList.push(taskItem)
}

function renderTask({id, task}) {
    return `
        <div>
            <p class="task-div"><span>${id}</span> ${task}</p>
        </div>
    `
}

function renderTasks() {
    let html = "";
    for(let task of taskList) {
        html += renderTask(task)
    }

    tasks.innerHTML = html;
}

saveBtn.addEventListener('click', () => {
    addToList(inputValue.value);
    console.log(taskList);
    renderTasks();
    inputValue.value = "";
})



