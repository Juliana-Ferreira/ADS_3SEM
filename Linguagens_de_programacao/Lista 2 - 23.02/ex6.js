class Livro {
    constructor(titulo, paginas) {
        this.titulo = titulo;
        this.paginas = paginas;
    }
}

let livro1 = new Livro('aaaaa', 117);
let livro2 = new Livro('bbbb', 220);
let livro3 = new Livro('cccc', 338);
let livro4 = new Livro('dddd', 441);
let livro5 = new Livro('eeee', 88);
let livro6 = new Livro('ffff', 542);
let livro7 = new Livro('gggg', 189);
let livro8 = new Livro('hhhh', 146);

let arrayLivros = [livro1, livro2, livro3, livro4, livro5, livro6, livro7, livro8];

let livrosLongos = arrayLivros.filter((livro) => {
    return livro.paginas > 300;
});

console.log(livrosLongos);