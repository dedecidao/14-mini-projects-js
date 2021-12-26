
//Percorrer os Arrays com for Each

const numeros = [1,2,3,4,5];

console.log("\n Metodo for OF para percorrer ARRAYS comuns de indice");

for (const numero of numeros) {
    console.log(numero);
}

console.log("\n ----------- \n");

console.log("Percorrendo com o uso do For Each");

numeros.forEach(function (interator) {
    console.log(interator);
})

console.log("Percorrendo com For Each com arrow Functions");

numeros.forEach(numero => console.log(numero))