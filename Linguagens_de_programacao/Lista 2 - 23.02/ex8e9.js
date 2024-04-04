/* Exercício 8 */
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

let produto1 = new Produto('Arroz', 18);
let produto2 = new Produto('Feijão', 9);
let produto3 = new Produto('Tomate', 8);
let produto4 = new Produto('Cereal', 6);
let produto5 = new Produto('Papel higiênico', 15);
let produto6 = new Produto('Escova dental', 23);
let produto7 = new Produto('Batata', 4);
let produto8 = new Produto('Vassoura', 7);
let produto9 = new Produto('TV', 1800);
let produto10 = new Produto('Air Fryer', 480);

let arrayProdutos = [produto1, produto2, produto3, produto4, produto5, produto6, produto7, produto8, produto9, produto10];

let produtosFaturados = arrayProdutos.map((produto) => {
    let novoValor = produto.preco * 1.10;
    return novoValor.toFixed(2);
});

console.log(produtosFaturados);

/* Exercício 9 */

let primeiroCaro = arrayProdutos.find((produto) => produto.preco > 100);
primeiroCaro.nome = "Produto Caro";

console.log(arrayProdutos);