/*Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês,
mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele
efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas
vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do
vendedor. */

alert("Exercício 11 - Descubra o salario final do vendedor");
numero_carros_vendidos = parseInt(prompt("Digite o numero de carros vendidos: "));
valor_total_vendas = parseInt(prompt("Digite o valor total das vendas: "));
salario_fixo = parseInt(prompt("Digite o salario fixo do vendedor: "));
comissao_por_carro = parseInt(prompt("Digite a comissao recebida por carro vendido: "));

comissao_total_carros = numero_carros_vendidos * comissao_por_carro;
porcentagem_vendas = valor_total_vendas * 0.05;

custo_final = custo_fabrica + porcentagem_distribuidor + impostos;
salario_final = salario_fixo + comissao_total_carros + porcentagem_vendas;

alert("Salario Fixo: " + salario_fixo);
alert("Comissao pelos carros vendidos: " + comissao_total_carros );
alert("Porcentagem sobre vendas: " + porcentagem_vendas);
alert("Salario Final a receber: " + salario_final);