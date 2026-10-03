/*Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem crescente*/

alert("Exercício 30 - Colocar 3 valores em ordem crescente");

valor1 = parseFloat(prompt("Digite o primeiro valor:"));
valor2 = parseFloat(prompt("Digite o segundo valor:"));
valor3 = parseFloat(prompt("Digite o terceiro valor:"));

if (valor1 < valor2 && valor1 < valor3) {
    if (valor2 < valor3) {
        alert("A ordem crescente é: " + valor1 + ", " + valor2 + ", " + valor3);
    } else {
        alert("A ordem crescente é: " + valor1 + ", " + valor3 + ", " + valor2);
    }
} else if (valor2 < valor1 && valor2 < valor3) {
    if (valor1 < valor3) {
        alert("A ordem crescente é: " + valor2 + ", " + valor1 + ", " + valor3);
    } else {
        alert("A ordem crescente é: " + valor2 + ", " + valor3 + ", " + valor1);
    }
} else {
    if (valor1 < valor2) {
        alert("A ordem crescente é: " + valor3 + ", " + valor1 + ", " + valor2);
    } else {
        alert("A ordem crescente é: " + valor3 + ", " + valor2 + ", " + valor1);
    }
}