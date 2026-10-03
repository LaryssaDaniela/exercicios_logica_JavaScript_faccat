/*Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.*/

alert("Exercício 28 - Descubra o valor dentre 3 valores");

valor1 = parseFloat(prompt("Digite o primeiro valor:"));
valor2 = parseFloat(prompt("Digite o segundo valor:"));
valor3 = parseFloat(prompt("Digite o terceiro valor:"));

let maiorValor

if (valor1 > valor2 && valor1 > valor3) {
    maiorValor = valor1;
}

else if (valor2 > valor3) {
    maiorValor = valor2;
}

else {
    maiorValor = valor3;
}

alert("O maior valor é: " + maiorValor);

