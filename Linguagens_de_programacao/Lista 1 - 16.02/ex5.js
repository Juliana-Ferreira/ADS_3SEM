var numeros = "";

for (let i=1; i<=10; i++) {
    if (i<10) {
        numeros += i + " - ";
    }
    else {
        numeros += i;
    }
}

console.log(numeros);