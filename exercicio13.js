/*Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média
final é:
                    n1 * 2 + n2 * 3 + n3 * 5
 mediafinal = -----------------------------------
                                10
 */

alert("Exercício 13 - Calculadora de média");
nota1 = parseFloat(prompt("Digite a primeira nota (peso 2):"));
nota2 = parseFloat(prompt("Digite a segunda nota (peso 3):"));
nota3 = parseFloat(prompt("Digite a terceira nota (peso 5):"));

mediaFinal = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10;

alert("A média final do aluno é: " + mediaFinal);
alert("A média final do aluno é: " + mediaFinal);