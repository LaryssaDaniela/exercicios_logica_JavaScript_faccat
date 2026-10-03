/*Um posto está vendendo combustíveis com a seguinte tabela de descontos:
até 20 litros, desconto de 3% por litro Álcool
acima de 20 litros, desconto de 5% por litro
até 20 litros, desconto de 4% por litro Gasolina
acima de 20 litros, desconto de 6% por litro
Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se
que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90.*/

alert("Exercício 35 - Cálculo do Combustível");

litros = parseFloat(prompt("Digite a quantidade de litros vendidos:"));
tipoCombustivel = prompt("Digite o tipo de combustível (A-Álcool ou G-Gasolina):");

if (tipoCombustivel == "A" || tipoCombustivel == "a") {
    precoPorLitro = 2.90;

    if (litros <= 20) {
        valorTotal = litros * (precoPorLitro * 0.97); 
    }

    else {
        valorTotal = litros * (precoPorLitro * 0.95); 
    }

    alert("O valor a ser pago pelo Álcool é: R$ " + valorTotal);
}

else if (tipoCombustivel == "G" || tipoCombustivel == "g") {
    precoPorLitro = 3.30;

    if (litros <= 20) {
        valorTotal = litros * (precoPorLitro * 0.96); 
    }

    else {
        valorTotal = litros * (precoPorLitro * 0.94); 
    }

    alert("O valor a ser pago pela Gasolina é: R$ " + valorTotal);
}

else {
    alert("Tipo de combustível inválido!");
}