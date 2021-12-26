const mensagem = "bom dia";

//Objeto String
const outraMensagem = new String("boa noite");


//O . encapsula o tipo primitivo e abre opções de objeto
console.log(mensagem.length);
console.log(outraMensagem.length);

//Acessar a primeira letra como se acessa um objeto
console.log(outraMensagem[0]);

//Verificar se tal String está incluida 
console.log(outraMensagem.includes('boa'));
//Return TRUE

const boolSeComecaCom = mensagem.startsWith('começa');
const boolSeTerminaCom = mensagem.endsWith('Termina');

//Qual que e indice da mensagem noite dentro de Outra mensagem??

//INDEX OF
const indiceEncontrado = outraMensagem.indexOf('noite');

const msgSubstituida = outraMensagem.replace('noite' , 'tarde');

//Tipo de Function aplicada ao objeto que corta os espaços adjacentes

const msgEspacada = " a a a s    spaokida kal mmm  ";

const msgCortada = msgEspacada.trim();
console.log(msgCortada);

//Apenas corta as do começo e do Fim!!!

//Splitar um msg colocando um delimitador e passando paara um array

//Desafio imprimir apenas a msg Hell \/

const msgMaluca = "Hello-Hell";

const arrayMaluco = msgMaluca.split('-');

console.log(arrayMaluco[1]); // Output = Hell

