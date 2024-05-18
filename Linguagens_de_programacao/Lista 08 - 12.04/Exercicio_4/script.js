let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');

let resultado = document.getElementById('resultadoOperacao');

somar.addEventListener('click', function () {
    if (validarInput()) {
        let valorNum1 = num1.value;
        let valorNum2 = num2.value;
        let somaValores = Number(valorNum1) + Number(valorNum2);
        resultado.innerText = somaValores;
    }
})

subtrair.addEventListener('click', function () {
    if (validarInput()) {
        let valorNum1 = num1.value;
        let valorNum2 = num2.value;
        let subtraiValores = Number(valorNum1) - Number(valorNum2);
        resultado.innerText = subtraiValores;
    }
})

dividir.addEventListener('click', function () {
    if (validarInput() && validarInputIgualZero()) {
        let valorNum1 = num1.value;
        let valorNum2 = num2.value;
        let dividiValores = Number(valorNum1) / Number(valorNum2);
        resultado.innerText = dividiValores;
    }
})

multiplicar.addEventListener('click', function () {
    if (validarInput()) {
        let valorNum1 = num1.value;
        let valorNum2 = num2.value;
        let multiplicaValores = Number(valorNum1) * Number(valorNum2);
        resultado.innerText = multiplicaValores;
    }
})

function validarInput() {
    if (num1.value != '' && num2.value != '') {
        return true;
    }
    return false;
}

function validarInputIgualZero() {
    if (num2.value != '0') {
        return true;
    }
    alert('Impossível dividir por zero')
    return false;
}
