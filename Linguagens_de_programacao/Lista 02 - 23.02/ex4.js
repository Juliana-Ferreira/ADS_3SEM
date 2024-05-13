let numeros = [1, 2, 3, 4, 8, 9, 15, 19, 20, 22, 24, 25, 32, 44, 51, 78, 99, 104, 117];

let pares = numeros.filter((numero) => {
    return numero % 2 == 0;
});

let dobro = numeros.map((numero) => {
    return numero * 2;
});

console.log(pares);
console.log(dobro);