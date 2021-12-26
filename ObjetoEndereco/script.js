const endereco = {
    rua: "Americana",
    cep: 72306802,
    cidade: "Brasilia",    
}

//Function para percorrer o objeto um For In!!!!! Percorrer sobre objeto use o for in CHAVE IN VALUE


function exibirEndereco(params) {
    for (const key in params) {
            console.log(key + " " + params[key]);            
        
    }

}



console.log(exibirEndereco(endereco));