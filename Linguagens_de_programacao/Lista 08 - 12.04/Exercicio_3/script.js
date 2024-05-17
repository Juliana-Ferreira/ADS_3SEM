let lista = document.getElementById('lista');
let button = document.getElementById('button');
let itemTarefa = document.getElementById('itemTarefa')

button.addEventListener('click', function() {

    if(itemTarefa.value != ''){
    let itemLista = document.createElement("li");
    itemLista.innerText = itemTarefa.value;
    itemLista.classList.add('itemLista');

    lista.appendChild(itemLista);

    itemTarefa.value ="";
    }
});
