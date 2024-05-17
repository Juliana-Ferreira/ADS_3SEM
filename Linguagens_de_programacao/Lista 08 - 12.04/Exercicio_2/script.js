let itemTarefa = document.getElementById("itemTarefa");

button.addEventListener("click", () => {
    let novaTarefa = document.createElement('li');
    novaTarefa.innerHTML = itemTarefa.value;
    document.getElementsByClassName('lista').appendChild(novaTarefa);
  });

