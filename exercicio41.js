/*Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos
exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo
e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo:
 N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios
Média_de_Aproveitamento = ---------------------------------------------------------
7
A atribuição de conceitos obedece a tabela abaixo:
Média de Aproveitamento Conceito
> = 9,0 A
> = 7,5 e < 9,0 B
> = 6,0 e < 7,5 C
< 6,0 D */

alert("Exercício 41 - Média de Aproveitamento do Aluno");

nota1 = parseFloat(prompt("Digite a primeira nota (N1):"));
nota2 = parseFloat(prompt("Digite a segunda nota (N2):"));
nota3 = parseFloat(prompt("Digite a terceira nota (N3):"));
mediaExercicios = parseFloat(prompt("Digite a média dos exercícios:"));

mediaAproveitamento = (nota1 + (nota2 * 2) + (nota3 * 3) + mediaExercicios) / 7;

if (mediaAproveitamento >= 9.0) {
    conceito = "A";
}

else if (mediaAproveitamento >= 7.5) {
    conceito = "B";
}

else if (mediaAproveitamento >= 6.0) {
    conceito = "C";
}

else {
    conceito = "D";
}

alert("Média de Aproveitamento: " + mediaAproveitamento);
alert("Conceito do aluno: " + conceito);