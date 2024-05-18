let texto = document.getElementById('texto');
let contador = document.getElementById('contador');

texto.addEventListener ('input', () => {
    let paragrafo = texto.value;
    let arrayParagrafo = paragrafo.split(' ');
    let cont = arrayParagrafo.length - 1;
    contador.innerText = cont;
})
