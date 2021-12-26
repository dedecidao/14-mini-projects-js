const objetos = [
    {id: 1, nome: 'livros'},
    {id: 2, nome: 'cadernos'},
    {id: 3, nome: 'canetas'}
]

//Para arrays que incluem objetos o ideal seria o metodo INCLUDES nao funciona para objetos (Tipo de Referencia)
//Utilizar o Metodo FIND

const resultado = objetos.find(function (objeto) {
    return objeto.id === 3
})

//sintaxe de find usando uma arrow function

const resultado2 = objetos.find((elemento) => { 
    return elemento.id === 1
})

//Casoa função tenha apenas um unico parametro e um unico retorno podemos
//Reduzir a função mais ainda

const resultado3 = objetos.find(elemento => elemento.id === 2);
                                            //Encontrando pelo id, também nesse casos podemos usar o outros atributos do objeto
console.log(resultado);
console.log(resultado2);
console.log(resultado3);