//1  Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calcularIMC(altura, peso) {
    if (altura <= 0 || peso <= 0) {
        return "Altura e peso devem ser maiores que zero.";
    }
    const imc = peso / (altura * altura);
    return imc.toFixed(2); // .toFixed(2); faz o valor ter 2 casas decimais 
} 


//2 Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
    if (numero < 0) {
        return "Número deve ser maior ou igual a zero.";
    }
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let fatorial = 1;
    for (let contador = 2; contador <= numero; contador++) {
        fatorial *= contador;
    }
    console.log(fatorial);
    return fatorial;
}

calcularFatorial(5) 