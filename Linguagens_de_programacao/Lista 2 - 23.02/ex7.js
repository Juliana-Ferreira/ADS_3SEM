class Carro {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }
}

let carro1 = new Carro('Volkswagen', 2002);
let carro2 = new Carro('Fiat', 1998);
let carro3 = new Carro('Toyota', 2018);
let carro4 = new Carro('Mercedes', 2007);
let carro5 = new Carro('Toyota', 2010);
let carro6 = new Carro('Fiat', 2019);
let carro7 = new Carro('Renault', 2022);
let carro8 = new Carro('Citroen', 2015);

let arrayCarros = [carro1, carro2, carro3, carro4, carro5, carro6, carro7, carro8];

let primeiroToyota = arrayCarros.find((carro) => carro.marca == "Toyota");

let carrosNovos = arrayCarros.filter((carro) => {
    return carro.ano > 2010;
});

console.log(primeiroToyota);
console.log(carrosNovos);