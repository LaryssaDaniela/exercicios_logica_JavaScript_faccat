/*Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e
quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade
média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar
compra'*/

alert("Exercício 26 - Descubra se deve ou não efetuar a compra");

quantidadeAtual = parseInt(prompt("Digite a quantidade atual em estoque:"), 10);
quantidadeMaxima = parseInt(prompt("Digite a quantidade máxima em estoque:"), 10);
quantidadeMinima = parseInt(prompt("Digite a quantidade mínima em estoque:"), 10);

quantidadeMedia = (quantidadeMaxima + quantidadeMinima) / 2;

if (quantidadeAtual >= quantidadeMedia) {
    alert("Média: " + quantidadeMedia, "\nNão efetuar compra");
}

else {
     alert("Média: " + quantidadeMedia, "\nEfetuar compra");
}
