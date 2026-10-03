/*Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste.
Calcular e escrever o valor do novo salário. */

alert("Exercício 09 - Descubra seu salário após reajuste");
salarioAtual = parseInt(prompt("Digite o salário mensal atual: "));
percentualReajuste = parseInt(prompt("Digite o percentual de reajuste: "));

novoSalario = salarioAtual + (salarioAtual * (percentualReajuste / 100));
alert("Salário atual: " + salarioAtual);
alert("Reajuste: " + percentualReajuste);
alert("Novo salário: " + novoSalario);