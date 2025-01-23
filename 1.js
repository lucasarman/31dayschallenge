//Crie uma variável para armazenar seu nome e outra para sua idade. Imprima uma frase como: "Meu nome é [nome] e tenho [idade] anos".//
{
  let nome = "Lucas";
  const idade = 22;

  console.log("Meu nome é " + nome + " e tenho " + idade + " anos");
}

//Declare uma variável para armazenar o preço de um produto e outra para o desconto. Calcule o preço final e mostre no console.//
{
  let precoProduto = 30;
  let desconto = 10;
  let precoFinal = precoProduto - desconto;
  console.log(precoFinal);
}

//Crie um array com três de suas comidas favoritas e exiba a segunda comida na lista.//
{
  let comidas = ["Lanche", "Pizza", "Farofa"];
  console.log(comidas);
}

//Crie um objeto que represente um livro, com propriedades como titulo, autor e ano. Mostre no console o título e o autor.//
{
  let livro = {
    titulo: "A viagem do tigre",
    autor: "Collen Houck",
    ano: 2013,
  };
  console.log("Titulo do livro: " + livro.titulo + " Autor: " + livro.autor);
}

//Declare uma variável estaLogado com o valor false. Depois, mude o valor para true e imprima a mensagem: "Status de login: [valor da variável]".//
{
  let estaLogado = false;
  if (!estaLogado === false) {
    estaLogado = true;
  }
  console.log("Status de login: " + estaLogado);
}

//Crie uma variável constante chamada PI com o valor 3.14. Use-a para calcular a área de um círculo com raio 5 e mostre o resultado.//
{
  const PI = 3.14;
  const raio = 5;
  const area = PI * raio * raio;

  console.log("A área do circulo é: " + area);
}
