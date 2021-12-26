const primeiro = [1,2,3];
const segundo = [4,5,6];



//Nova forma com ES6 Abaixo

// Usando o operador chamado spread ....

const combinado2 = [...primeiro, ...segundo];
// Tambem podemos incluir elementos no meio da combinacao com spread

const combinado3 = [...primeiro, "qualquer_Coisa", ...segundo];


console.log(combinado2);
console.log(combinado3);