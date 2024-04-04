/* Exercício 1 */
class Usuario {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

let usuario1 = new Usuario('Ana Maria', 17);
let usuario2 = new Usuario('Eduardo', 26);
let usuario3 = new Usuario('Julia', 33);
let usuario4 = new Usuario('Carlos', 44);
let usuario5 = new Usuario('Fabiana', 15);
let usuario6 = new Usuario('Augusto', 29);
let usuario7 = new Usuario('Daniela', 18);
let usuario8 = new Usuario('Tamires', 14);

let arrayUsuarios = [usuario1, usuario2, usuario3, usuario4, usuario5, usuario6, usuario7, usuario8];

/* Exercício 2 */

let usuariosMaiores = arrayUsuarios.filter((usuario) => {
    return usuario.idade > 18;
});

console.log(usuariosMaiores);

/* Exercício 3 */

let primeiroUser = arrayUsuarios.find((usuario) => usuario.idade > 25 && usuario.idade < 30);

console.log(primeiroUser);