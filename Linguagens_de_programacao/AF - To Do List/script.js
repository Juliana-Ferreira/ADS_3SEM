// Juliana Cristina Camargo Ferreira - RA 172008

const button = document.querySelector('.btn');
const input = document.querySelector('.new-task');
const completeList = document.querySelector('.list');

let taskList = [];

button.addEventListener('click', function () {
    taskList.push({
        task: input.value,
        checked: false
    });
    input.value = '';

    showTasks();
})

function showTasks() {
    let newTaskAdded = '';

    taskList.forEach((item, index) => {
        newTaskAdded += `
            <li class="task" id="${item.checked && "checkIcon"}">
                <p>${item.task}</p>
                <div>
                    <img class="icon" src="source/check-icon.png" alt="Concluir tarefa" onclick="checkItem(${index})">
                    <img class="icon" src="source/delete-icon.png" alt="Excluir tarefa" onclick="deleteItem(${index})">
                </div>
            </li>`
    })

    completeList.innerHTML = newTaskAdded;
}

function deleteItem(index) {
    taskList.splice(index, 1);

    showTasks();
}

function checkItem(index) {
    taskList[index].checked = !taskList[index].checked;

    showTasks();
}