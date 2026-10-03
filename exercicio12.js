/*Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, calcular e escrever o valor
correspondente em graus Celsius (baseado na fórmula abaixo):
    C            F - 32
 ---------- = -----------
    5               9
Observação: Para testar se a sua resposta está correta saiba que 100oC = 212F*/

alert("Exercício 12 - Conversor de Celsius para Fahrenheit");

fahrenheit = parseFloat(prompt("Digite a temperatura em graus Fahrenheit: "));
celsius = ((fahrenheit - 32) * 5) / 9;

alert("A temperatura correspondente em graus Celsius é: " + celsius);
