/*Ler dois valores e imprimir uma das três mensagens a seguir:
‘Números iguais’, caso os números sejam iguais
‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
‘Segundo maior’, caso o segundo seja maior que o primeiro.*/

alert("Exercício 33 - Comparar dois valores");

valor1 = parseFloat(prompt("Digite o primeiro valor:"));
valor2 = parseFloat(prompt("Digite o segundo valor:"));

if (valor1 == valor2) {
    alert("Números iguais");
}

else if (valor1 > valor2) {
    alert("Primeiro é maior");
}

else {
    alert("Segundo maior");
}