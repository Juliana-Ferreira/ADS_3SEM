class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    emitirSom() {
        console.log('Emite som.');
    }

    correr() {
        console.log('O animal está correndo.');
    }
}

class Cachorro extends Animal {
    emitirSom() {
        console.log('Au au');
    }
}

class Gato extends Animal {
    emitirSom() {
        console.log('Miau');
    }
}

let objCachorro = new Cachorro('Diego');
let objGato = new Gato('Carlota');

objCachorro.emitirSom();
objCachorro.correr();
objGato.emitirSom();
objGato.correr();