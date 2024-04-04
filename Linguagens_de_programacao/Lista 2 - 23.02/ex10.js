let arrayNumeros = [2, 3, 7, 9, 11, 15, 18, 22, 45, 58, 57, 60, 77, 88, 90, 96, 97];

let arrayDivisiveis = arrayNumeros.filter((numero) => {
    return numero % 3 == 0;
});

let quadrado = arrayDivisiveis.map((numero) => {
    return Math.pow(numero,2);
});

console.log(quadrado);