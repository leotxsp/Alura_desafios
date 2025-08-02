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


//3 Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

function calcularDolarParaReais(numero){
    let cotacao = 4.8
    let ValorConvertido = (numero * cotacao)
    return ValorConvertido
}
//4 Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function calcularAreaEPerimetroDoRetangulo(altura,largura){
    return{
        perimetro: function(){
            let p = 2*(largura+altura);
            return p;
        },
        area:function(){
            let a = largura*altura;
            return a;
        }
    };
};

/*Exemplo de uso:
alert(calcularAreaEPerimetroDoRetangulo(5,5).area())
alert(calcularAreaEPerimetroDoRetangulo(5,5).perimetro())*/

//5 Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcularAreaEperimetroDoCirculo(raio){
    let pi = 3.14
    return{
        area:function(){
            let a = 2*pi*raio;
            return a
        },
        perimetro:function(){
            let p = pi*raio**2;
            return p;
        }
    }
}

/*Exemplo de uso:
alert(calcularAreaEperimetroDoCirculo(1).perimetro())*/

//6  Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function talbada(numero){
    for (let tabuada = 1; tabuada <= 10; tabuada++){
        let resultado = numero*tabuada
        console.log(`${numero} x ${tabuada} = ${resultado}`);
    }
}


talbada(1)

