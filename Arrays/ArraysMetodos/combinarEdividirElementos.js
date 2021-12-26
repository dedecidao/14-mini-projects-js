//Para tipos Primitivos

const primeiro = [1,2,3];

const segundo = [8,9,10];

// Para juntar os arrays

const arraysCombinado = primeiro.concat(segundo);

console.log(arraysCombinado);  //Output: [ 1, 2, 3, 8, 9, 10]

// Para DIVIDIR pode se usar o metodo SLICE
// Cortar o array: [ 1, 2, 3, 8, 9, 10]
// INDICES           0  1  2  3  4   5//
// CORTE 1                   |
// CORTE 2                |=> em diante => [3, 8, 9, 10]   
const cortado = arraysCombinado.slice(0,2);

const cortadoUmParametro = arraysCombinado.slice(2);

console.log(cortado);
console.log(cortadoUmParametro);