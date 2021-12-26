//Esvaziar um array

const numeros = [1,2,3,4,5,6];

//Solucao 1
//Se seu array for let basta retribui-lo com numeros = [];

//Lembrar q um array é do tipo referência

//Solucao 2  --- UMA DAS MELHORES SOLUCOES

numeros.length = 0;

console.log(numeros); //Vazio

///Solucao 3 
//usar o metodo .splice

//Solucao 4

// Usar o Metodo .pop

