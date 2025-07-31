// 1 Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log("Olá, bem vindo ao desafio 4!");

// 2 Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = "leonardo";
console.log(`Olá, ${nome}!`);

// 3 Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
nome  = "josias";
alert(`Olá, ${nome}!`);

// 4 Qual a linguagem de programação que você mais gosta?
linguagem = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(`A linguagem de programação que você mais gosta é: ${linguagem}`);

// 5 Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor = prompt("Digite um número:");
let valor2 = prompt("Digite outro número:");
let resultado = parseFloat(valor) + parseFloat(valor2);
console.log(`A soma dos números ${valor} e ${valor2} é: ${resultado}`);
// 6 Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
valor = prompt("Digite um número:");
valor2 = prompt("Digite outro número:");
resultado = parseFloat(valor) - parseFloat(valor2);
console.log(`Diferença dos números ${valor} e ${valor2} é: ${resultado}`);

// 7  Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt("Digite sua idade:");
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

// 8 Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numero = prompt("Digite um número:");
if (numero > 0) {
    console.log("O número é positivo.");
}else if (numero < 0) {
    console.log("O número é negativo.");
}else {
    console.log("O número é zero.");
}

// 9 Use um loop while para imprimir os números de 1 a 10 no console.
let contador = 1;
while (contador <= 10) {
    console.log(`Número: ${contador}`);
    contador++;
}

// 10 Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = prompt("Digite uma nota de 0 a 10:");
if (nota >= 7){
    console.log("Aprovado");
} else{
    console.log("Reprovado");
}

// 11 Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let nomeroAleatorio = Math.random()
console.log(`Número aleatório gerado: ${nomeroAleatorio}`);

// 12 Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numeroInteiroAleatorio = Math.floor(Math.random() * 10) + 1;
console.log(`Número inteiro aleatório gerado: ${numeroInteiroAleatorio}`);

// 13 Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numeroInteiroAleatorio1000 = Math.floor(Math.random() * 1000) + 1;
console.log(`Número inteiro aleatório gerado entre 1 e 1000: ${numeroInteiroAleatorio1000}`);

