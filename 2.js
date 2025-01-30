//Escreva um código que exiba "Bom dia", "Boa tarde" ou "Boa noite" com base em um valor da variável hora.//
let hora = 20;

if (hora < 12) {
  console.log("Bom Dia!!");
} else if (hora < 18) {
  console.log("Boa tarde!!");
} else {
  console.log("Boa noite!!");
}
//Use um switch para exibir o nome de um mês com base em um número (1 para Janeiro, 2 para Fevereiro, etc.).//
let mesAno = 3;
switch (mesAno) {
  case 1:
    console.log("Janeiro");
    break;

  case 2:
    console.log("Fevereiro");
    break;

  case 3:
    console.log("Março");
    break;
}
//Crie um programa que verifica se uma pessoa pode dirigir. Use a variável idade e mostre "Pode dirigir" ou "Não pode dirigir".//
{
  let idadePessoa = 17;
  let mensagem = idadePessoa >= 18 ? "Pode dirigir" : "Não pode dirigir.";
  console.log(mensagem);
}

//Use o operador ternário para verificar se uma variável saldo é maior que 0 e exiba "Saldo positivo" ou "Saldo negativo".//

{
  let saldo = -1000;
  let mensagem =
    saldo >= 0 ? "Saldo positivo de " + saldo : "Saldo negativo de " + saldo;
  console.log(mensagem);
}

//Escreva um programa que classifique números em "Positivo", "Negativo" ou "Zero".//

{
  let numero = -300;
  if (numero > 0) {
    console.log("Numero Positivo!");
  } else if ((numero = 0)) {
    console.log("Zero!");
  } else {
    console.log("Numero Negativo");
  }
}

//Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo". Use switch para processar a escolha.//

let banco = "saldo";

switch (banco) {
  case "sacar":
    console.log("Aguarde, seu saque está sendo verificado.");
    break;

  case "depositar":
    console.log("Verificando deposito");
    break;

  case "saldo":
    console.log("Seu saldo é de ...");
    break;
  default:
    console.log("Opção inválida");
}
