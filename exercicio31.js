/*Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam
ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma
dos outros 2 lados. */

alert("Exercício 31 - Verificar se é um triângulo");

ladoA = parseFloat(prompt("Digite a medida do lado A:"));
ladoB = parseFloat(prompt("Digite a medida do lado B:"));
ladoC = parseFloat(prompt("Digite a medida do lado C:"));

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    alert("Os lados informados FORMAM um triângulo!");
}
else {
    alert("Os lados informados NÃO FORMAM um triângulo!");
}