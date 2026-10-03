/*44) Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido
um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero e imprimir o resultado
da divisão do primeiro valor lido pelo segundo valor lido. (utilizar a estrutura REPITA).*/

alert("Exercício 44 - Divisão com validação de zero");

valor1 = parseFloat(prompt("Digite o primeiro valor:"));

do {
    valor2 = parseFloat(prompt("Digite o segundo valor (não pode ser zero):"));

    if (valor2 == 0) {
        alert("VALOR INVÁLIDO! O segundo valor não pode ser ZERO.");
    }
} while (valor2 == 0);

resultado = valor1 / valor2;

alert("O resultado da divisão de " + valor1 + " por " + valor2 + " é: " + resultado);