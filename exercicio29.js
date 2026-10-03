/*Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.*/

alert("Exercício 29 - Descubra a soma dos 2 maiores valores dentre os 3 valores");

valor1 = parseFloat(prompt("Digite o primeiro valor:"));
valor2 = parseFloat(prompt("Digite o segundo valor:"));
valor3 = parseFloat(prompt("Digite o terceiro valor:"));

let menorValor;

if (valor1 < valor2 && valor1 < valor3) {
    menorValor = valor1;
}

else if (valor2 < valor1 && valor2 < valor3) {
    menorValor = valor2;
}

else {
    menorValor = valor3;
}

somaDosMaiores = (valor1 + valor2 + valor3) - menorValor;

alert("A soma dos dois maiores valores é: " + somaDosMaiores);
