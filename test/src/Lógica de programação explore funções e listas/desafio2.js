// 1 Criar uma função que exibe "Olá, mundo!" no console.
function exibeOlaMundo() {
  console.log("Olá, Mundo!");
}

// 2 Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibeNome(nome) {
  console.log(`Olá, ${nome}!`);
}
let nome = "Leonardo";
exibeNome(nome);

// 3 Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function exibeDobro(numero) {
  const dobro = numero * 2;
  console.log(`O dobro de ${numero} é: ${dobro}`);
}


// 4 Criar uma função que recebe três números como parâmetros e retorna a média deles.
function exibeMedia(numero1, numero2, numero3){
  const media = (numero1 + numero2 + numero3) / 3;
  console.log(`A média é: ${media}`);
}

// 5 Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function exibeMaiorNumero(numero1, numero2){
  if (numero1 > numero2) {
    console.log(`O maior número é: ${numero1}`);
  } else if (numero2 > numero1) {
    console.log(`O maior número é: ${numero2}`);
  } else {
    console.log("Os números são iguais.");
  }
}

// 6 Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiplicarPorSiMmesmo(numero) {
  const resultado = numero * numero;
  console.log(`O resultado da multiplicação de ${numero} por ele mesmo é: ${resultado}`);
}