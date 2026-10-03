/*Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
ultrapassar este valor, calcular e escrever o seu salário total. */

alert("Exercício 24 - Descubra seu salário após comissão");
salarioFixo = parseFloat(prompt("Digite o salário fixo do vendedor: R$"));
valorVendas = parseFloat(prompt("Digite o valor total das vendas: R$"));

comissao = 0;

if (valorVendas <= 1500) {
    comissao = valorVendas * 0.03;
}

else {
    valorExcedente = valorVendas - 1500;
    comissao = (1500 * 0.03) + (valorExcedente * 0.05);
}

salarioTotal = salarioFixo + comissao;

alert("Comissão ganha: R$ " + comissao);
alert("Salário total a receber: R$ " + salarioTotal);