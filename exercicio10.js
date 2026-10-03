/*O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do
distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor
seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro,
calcular e escrever o custo final ao consumidor. */

alert("Exercício 10 - Descubra o custo do carro");
custo_fabrica = parseInt(prompt("Digite o custo de fabrica do carro: "));

porcentagem_distribuidor = custo_fabrica * 0.28;
impostos = custo_fabrica * 0.45;

custo_final = custo_fabrica + porcentagem_distribuidor + impostos;

alert("Custo de fabrica: " + custo_fabrica);
alert("Valor do distribuidor: " + porcentagem_distribuidor);
alert("Valor dos impostos: " + impostos);
alert("Custo final ao consumidor:  " + custo_final);