/*Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'.*/

alert("Exercício 25 - Descubra seu salário após comissão");
numeroConta = 12345;
saldo = 1000.00;
debito = 300.00;
credito = 150.00;

saldoAtual = saldo - debito + credito;
alert("Bem-vindo(a) ao Banco Veritas")
alert("Digite o número da sua conta sem pontuação e sem espaço:");

conta = prompt("Número da conta:");

alert("A opção selecionada foi: calcular saldo atual")


saldo = parseFloat(prompt("Digite seu saldo: "));
saldo = parseFloat(prompt("Digite o valor em débito: "));
saldo = parseFloat(prompt("Digite so valor em crédito: "));

alert("Saldo atual: " + saldoAtual);

if (saldoAtual >= 0) {
   alert("\nSaldo Positivo");
}

else {
    alert("\nSaldo Negativo");
}
