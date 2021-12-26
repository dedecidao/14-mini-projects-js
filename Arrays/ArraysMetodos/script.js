//Add elementos em um array

const numeros = [1,2,3];


// ---> Inserir no inicio do Array
//Metodo Unshift

numeros.unshift(0);

console.log(numeros);

// Metodo Splice para inserção em uma posição no meio do Array
//A partir de qual parametro // se sera subistitudo // Elemento a Ser Adicionado
numeros.splice(1 , 0 , "andre")


numeros.push("Final")
console.log(numeros);
