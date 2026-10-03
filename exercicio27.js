/*Ler um valor e escrever se é positivo, negativo ou zero.*/

alert("Exercício 27 - Descubra se um valor e escrever se é positivo, negativo ou zero.");

valor = parseFloat(prompt("Digite um número:"));

if (valor > 0) {
    alert("O valor é positivo.");
}

else if (valor < 0) {
    alert("O valor é negativo.");
}

else {
    alert("O valor é zero.");
}
