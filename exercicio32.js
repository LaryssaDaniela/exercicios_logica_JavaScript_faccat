/*Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.*/

alert("Exercício 32 - Resultado da partida de futebol");

time1 = prompt("Digite o nome do primeiro time:");
golsTime1 = parseInt(prompt("Digite a quantidade de gols do " + time1 + ":"));

time2 = prompt("Digite o nome do segundo time:");
golsTime2 = parseInt(prompt("Digite a quantidade de gols do " + time2 + ":"));

if (golsTime1 > golsTime2) {
    alert("Vencedor: " + time1);
}

else if (golsTime2 > golsTime1) {
    alert("Vencedor: " + time2);
}

else {
    alert("EMPATE");
}