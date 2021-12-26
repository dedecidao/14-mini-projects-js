const numeros = [1,2,3,4]; //Um array e um objeto do tipo de referencia

//retirar do final

const pop = numeros.pop(); //remove o elemento do final do vetor
const shift = numeros.shift(); //remove o elemento de indice 0

console.log(pop); //Removeu o 4
console.log(shift); //Removeu o 1

console.log(numeros);
//remover algo no meio podemos usar o metodo 


//Do splice passando o parametro do meio que 
//irá remover dentro do indice passado no primeiro
//parametro