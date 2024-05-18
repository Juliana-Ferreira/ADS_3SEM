let lista = document.getElementById('lista');

button.addEventListener('click', function () {
    let itemTarefa = document.getElementById('itemTarefa');
    let tarefa = itemTarefa.value;
    let novaTarefa = document.createElement('li');
    novaTarefa.innerText = tarefa;
    lista.appendChild(novaTarefa);
})
