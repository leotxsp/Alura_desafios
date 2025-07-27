alert("Boas vindas ao nosso site!")
let nome = "lua"
let idade = 25
let numeroDeVendas = 50
let saldoDisponivel = 10000
let mensagemDeErro = "Erro! Preencha todos os campos"

nome = prompt("Qual é o seu nome?")
if (nome) {
    alert(`Olá ${nome} seja bem-vindo(a)`)
}

idade = prompt("Qual é a sua idade?")

if (idade >= 18) {
    alert(`Parabéns, ${nome}, você já pode tirar a habilitação!`)
}else {
    alert(`Desculpe, ${nome}, você ainda não pode tirar a habilitação!`)
}