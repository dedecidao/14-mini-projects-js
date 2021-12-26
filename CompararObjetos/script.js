//Começar com uma Constructor Function using a Pascal Case

function Endereco (rua, cidade, cep) {
    this.rua = rua;
    this.cidade = cidade;
    this.cep = cep;

}
// Criar duas instancias do objeto Endereço Com Propriedades Iguais e comparar estas Propriedades

const endereco1 = new Endereco('a' , 'b' , 'c');
const endereco2 = new Endereco('a' , 'b' , 'c');

//console.log(endereco1.rua);

function comparaPropriedades(endereco1, endereco2) {
    return endereco1.rua === endereco2.rua &&
    endereco1.cidade === endereco2.cidade &&
    endereco1.cep === endereco2.cep
}


function comparaEnderecoObjeto(endereco1, endereco2) {
    return endereco1 === endereco2;
}

console.log(comparaPropriedades(endereco1, endereco2));  //Retorna TRUE
console.log(comparaEnderecoObjeto(endereco1, endereco2)); //Return Falso pois os Endereço são diferentes

const endereco3 = endereco1; //O endereço 3 recebe a mesma referencia de memoria que o endereço 1

console.log(comparaEnderecoObjeto(endereco3, endereco1)); /// Retorna TRUE

