//Depende muito do que esta procurando

//Esse Script Ensina a Encontrar um Tipo Primitivo

const numeros  = [1,2,3,4,2];
            //    0 1 2 3 4 - Indices
let resultado = numeros.indexOf(4); //Esta verificando o Tipo
 
//Caso nao encontre o indexOf retorna o valor de -1

//o Index OF verifica o tipo

//Temos tambem o Last Index of - Ele vai encontrar a ultima ocorrência do valor passado


let resultado2 = numeros.lastIndexOf(2)

console.log(resultado2);

//Metodos do Include do ES6

console.log(numeros.includes(3));