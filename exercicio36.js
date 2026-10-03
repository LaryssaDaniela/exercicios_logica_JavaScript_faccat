/*Escreva um algoritmo que leia as idades de 2 homens e de 2 mulheres (considere que as idades
dos homens serão sempre diferentes entre si, bem como as das mulheres). Calcule e escreva a soma
das idades do homem mais velho com a mulher mais nova, e o produto das idades do homem mais
novo com a mulher mais velha. */

alert("Exercício 36 - Cálculo com Idades");

homem1 = parseInt(prompt("Digite a idade do primeiro homem:"));
homem2 = parseInt(prompt("Digite a idade do segundo homem:"));

mulher1 = parseInt(prompt("Digite a idade da primeira mulher:"));
mulher2 = parseInt(prompt("Digite a idade da segunda mulher:"));

if (homem1 > homem2) {
    homemMaisVelho = homem1;
    homemMaisNovo = homem2;
}

else {
    homemMaisVelho = homem2;
    homemMaisNovo = homem1;
}

if (mulher1 > mulher2) {
    mulherMaisVelha = mulher1;
    mulherMaisNova = mulher2;
}

else {
    mulherMaisVelha = mulher2;
    mulherMaisNova = mulher1;
}

soma = homemMaisVelho + mulherMaisNova;
produto = homemMaisNovo * mulherMaisVelha;

alert("A soma do homem mais velho com a mulher mais nova é: " + soma);
alert("O produto do homem mais novo com a mulher mais velha é: " + produto);