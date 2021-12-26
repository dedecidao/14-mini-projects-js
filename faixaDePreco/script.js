//Criar um Array de Objetos que determinam 3 faixas de preços
// Ate 700 reias, entre 700 e 2000 reais e acima de 2000 reais

let faixasDePreco = [
    {tooltip: "Ate 700" , min: 0 , max: 700},
    {tooltip: "de 700 ate 2000" , min: 701 , max: 2000},
    {tooltip: "acima de 2000" , min: 2000 , max: Infinity}
]
 
function analisaPreco(valorProduto , faixasDePreco) {
    for (let i = 0; i < faixasDePreco.length; i++) {
        if(valorProduto > faixasDePreco[i].min && valorProduto < faixasDePreco[i].max){
            return `Seu produto está ${faixasDePreco[i].tooltip}`;
        } else {
            return faixasDePreco[0].tooltip;
        }
    }
}
// Input
const produtoValor = 3000;
// Output
const resultado = analisaPreco(produtoValor, faixasDePreco);

console.log(resultado);
