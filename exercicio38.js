/*Faça um algoritmo para ler um número que é um código de usuário. Caso este código seja
diferente de um código armazenado internamente no algoritmo (igual a 1234) deve ser apresentada a
mensagem ‘Usuário inválido!’. Caso o Código seja correto, deve ser lido outro valor que é a senha. Se
esta senha estiver incorreta (a certa é 9999) deve ser mostrada a mensagem ‘senha incorreta’. Caso a
senha esteja correta, deve ser mostrada a mensagem ‘Acesso permitido’.*/

alert("Exercício 38 - Login do Usuário");

codigoDigitado = parseInt(prompt("Digite o código de usuário:"));

if (codigoDigitado != 1234) {
    alert("Usuário inválido!");
} else {
    senhaDigitada = parseInt(prompt("Digite a sua senha:"));
    
    if (senhaDigitada != 9999) {
        alert("senha incorreta");
    } else {
        alert("Acesso permitido");
    }
}