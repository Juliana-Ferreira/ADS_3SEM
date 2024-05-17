function gerarCorAleatoria() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function trocarCor() {
    const divCard = document.getElementsByClassName('card');
    const novaCor = gerarCorAleatoria();
    divCard.style.backgroundColor = novaCor;
}
