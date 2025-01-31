//Verifique se um número é maior que 10 e menor que 20.
{
  let numero = 14;

  if (numero > 10 && numero < 20) {
    console.log("Número ideal");
  }
}

//Crie um código que verifique se uma pessoa pode votar. Considere idade >= 16.

let idade = 15;

if (idade >= 16) {
  console.log("Pessoa pode votar");
} else {
  console.log("Pessoa não pode votar");
}

//Implemente um sistema de notas onde:
//- Notas >= 90: "Aprovado com A"
//- Notas >= 70 e < 90: "Aprovado com B"
//- Notas < 70: "Reprovado".

let nota = 60;

if (nota >= 90) {
  console.log("Aprovado com A");
} else if (nota >= 70 && nota < 90) {
  console.log("Aprovado com B");
} else if (nota < 70) {
  console.log("Reprovado");
}

//4. Crie uma variável `saldo` e verifique:
//- Se `saldo > 0`: Mostre "Saldo positivo".
//- Se `saldo === 0`: Mostre "Sem saldo".
//- Caso contrário, mostre "Saldo negativo".

let saldo = -20;

if (saldo > 0) {
  console.log("Saldo Positivo");
} else if (saldo === 0) {
  console.log("Sem saldo");
} else {
  console.log("Saldo negativo");
}

//5. Use o operador `!` para verificar se uma luz está apagada e ligue-a.

let luz = false;

if (!luz) {
  console.log("Ligou a luz");
  luz = true;
}
console.log("Estado da luz:", luz ? "Ligada" : "Desligada");
