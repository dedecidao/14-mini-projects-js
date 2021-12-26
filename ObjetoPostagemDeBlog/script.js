//Criar uma postagem de um blog que contenha
/*
Titulo
mensagem
autor
visualizacoes
comentarios = [autor, mensagem]
estaAtico (boolean)

Objeto Postagem

*/

function Postagem (titulo, mensagem, autor, visualizacoes, comentarios = {autor, mensagem}, estaAtivo ) {
    this.titulo = titulo;
    this.mensagem = mensagem;
    this.autor = autor;
    this.visualizacoes = visualizacoes;
    this.comentarios = comentarios; //è um Array
    this.estaAtivo = estaAtivo
}

const postagem1 = new Postagem("Ola maluco", "Bom dia", "Andre", 1234, {autor: "Luis", mensagem: "Minha ROla"}, true)

console.log(postagem1);


let postagemVariavel = {
    titulo : "Minha posta",
    mensagem : "O be a va",
    autor: "Luis",
    visualizacoes: 12,
    //Array Declation inside The Object    
    //Array de Objetos
    comentarios : [
        {autor: "lega2221" , mensagem: "luis dois camili"},
        {autor: "benga" , mensagem: "bonde a stronda"}
    ],
    estaAtivo: true,
}

console.log(postagemVariavel);