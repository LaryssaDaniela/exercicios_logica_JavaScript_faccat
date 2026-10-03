/*Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço
unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total
a pagar (total a pagar = total - desconto), sabendo-se que:
 - Se quantidade <= 5 o desconto será de 2%
 - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
 - Se quantidade > 10 o desconto será de 5%*/

alert("Exercício 40 - Cálculo de Desconto no Produto");

nomeProduto = prompt("Digite o nome do produto:");
quantidade = parseInt(prompt("Digite a quantidade adquirida:"));
precoUnitario = parseFloat(prompt("Digite o preço unitário do produto:"));

total = quantidade * precoUnitario;

if (quantidade <= 5) {
    desconto = total * 0.02; 
} else if (quantidade <= 10) {
    desconto = total * 0.03;
} else {
    desconto = total * 0.05; 
}

totalAPagar = total - desconto;

alert("Produto: " + nomeProduto);
alert("Total sem desconto: R$ " + total);
alert("Valor do desconto: R$ " + desconto);
alert("Total a pagar: R$ " + totalAPagar);