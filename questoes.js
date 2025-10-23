// 1 - Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B é mostre se a soma é menor que C.

let a = 1
let b = 2
let c = 3
let soma = a + b
alert(`A soma de a e b é ${soma}`)
if (soma > c) {
    alert("A soma de a e b é maior que c")
} else {alert("C é maior que a soma de a e b")};


// 2 - Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo.

let num = parseFloat(prompt("Digite um número"));
if (num % 2 == 0) {
    alert("O numero é par")
} else {
    alert("O número é ímpar")
};

if (num < 0) {
    alert("O numero é negativo")
} else {
    alert("O numero é positivo")
};

//3 - Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar os dois valores, caso contrário devera multiplicar A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a uma variável C e imprimir seu valor na tela.

let A = parseFloat(prompt("Digite o primeiro número"));
let B = parseFloat(prompt("Digite o segundo número"));
let C;
if (A == B) {
    C = A + B
    alert(`A soma dos números é ${C}`)
} else {
    C = A * B
    alert(`A multiplicação dos números é ${C}`)
};
alert(`O resultado é ${C}`)

// 4 - Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.

let num2 = parseFloat(prompt("Digite um número"));
let ante = num2 - 1;
let su = num2 + 1;
alert(`O antecessor do número é ${ante} e seu sucessor é ${su}`)

// 5 - Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, calcule quantos salários mínimos esse usuário ganha e imprima na tela o resultado. (Base para o Salário mínimo R$ 1.293,20).

let min = 1293.20;
let user = parseFloat(prompt("Digite seu salário"));
let resul = Math.floor(user / min);
alert(`Você ganha aproximadamente ${resul} salarios minimos`)

// 6 - Faça um algoritmo que leia um valor qualquer e imprima na tela com um reajuste de 5%.

let valor = parseFloat(prompt("Digite um valor"));
let resul2 = valor*1.05
alert(`O valor com um reajuste de 5% é ${resul2}`)

// 7 - Faça um algoritmo que leia dois valores booleanos (lógicos) e determine se ambos são VERDADEIRO ou FALSO.

let bool1 = true;
let bool2 = false;
if (bool1 && bool2) {
    alert(`Ambos os valores são verdadeiros`)
} else if (!bool1 && !bool2) {
    alert(`Ambos os valores são falso`)
} else {alert(`Um é falso e outro é verdadeiro`)};

// 8 - Faça um algoritmo que leia três valores inteiros diferentes e imprima na tela os valores em ordem decrescente.
let numes = [];
let n1 = parseFloat(prompt("Digite um valor"));
let n2 = parseFloat(prompt("Digite um valor"));
let n3 = parseFloat(prompt("Digite um valor"));
let ordem = numes.sort((a, b) => b - a);
alert(`A ordem decrescente é ${ordem}`)

//9 - Faça um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa, leia o seu peso e sua altura e imprima na tela sua condição de acordo com a tabela abaixo:
// Fórmula do IMC = peso / (altura) ²
// Tabela Condições IMC
// Abaixo de 18,5   | Abaixo do peso          
// Entre 18,6 e 24,9 | Peso ideal (parabéns)  
// Entre 25,0 e 29,9 | Levemente acima do peso
// Entre 30,0 e 34,9 | Obesidade grau I 
// Entre 35,0 e 39,9 | Obesidade grau II (severa)
// Maior ou igual a 40 | Obesidade grau III (mórbida)

let peso = parseFloat(prompt("Digite seu peso"));
let altura = parseFloat(prompt("Digite seu peso"));
let imc = peso / (altura)**2;
if (imc > 18.5) {
    alert(`Abaixo do peso`)
} else if (24.9 > imc > 18.6) {
    alert(`Peso ideal`)
} else if (25 > imc > 29.9) {
    alert(`Levemente acima do peso`)
} else if (30 > imc > 34.9) {
    alert(`Obesidade grau I`)
} else if (35 > imc > 39.9) {
    alert(`Obesidade grau II`)
} else {
    alert(`Obesidade grau III`)
};

// 10 - Faça um algoritmo que leia três notas obtidas por um aluno, e imprima na tela a média das notas.
// 11 - Faça um algoritmo que leia quatro notas obtidas por um aluno, calcule a média das nota obtidas, imprima na tela o nome do aluno e se o aluno foi aprovado ou reprovado. Para o aluno ser considerado aprovado sua média final deve ser maior ou igual a 7.

11 - Faça um algoritmo que leia quatro notas obtidas por um aluno, calcule a média das nota obtidas, imprima na tela o nome do aluno e 

 se o aluno foi aprovado ou reprovado. Para o aluno ser considerado aprovado sua média final deve ser maior ou igual a 7.

 

 12 - Faça um algoritmo que leia o valor de um produto e determine o valor que deve ser pago, conforme a escolha da forma de pagamento

 pelo comprador e imprima na tela o valor final do produto a ser pago. Utilize os códigos da tabela de condições de pagamento para efetuar o cálculo adequado.

 

 Tabela de Código de Condições de Pagamento

 

 1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto

 2 - À Vista no cartão de crédito, recebe 10% de desconto

 3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros

 4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10%

 

 13 - Faça algoritmo que leia o nome e a idade de uma peso e imprima na tela o nome da pessoa e se ela é maior ou menor de idade. 

14 - Faça um algoritmo que receba um valor A e B, e troque o valor de A por B e o valor de B por A e imprima na tela os valores.

15 - Faça um algoritmo que leia o ano em que uma pessoa nasceu, imprima na tela quantos anos, meses e dias essa pessoa ja viveu. Leve em 

consideração o ano com 365 dias e o mês com 30 dias.

(Ex: 5 anos, 2 meses e 15 dias de vida)

16 - Faça um algoritmo que leia três valores que representam os três lados de um triângulo e verifique se são válidos, determine se o triângulo é 

equilátero, isósceles ou escaleno.

17 - Faça um algoritmo que leia uma temperatura em Fahrenheit e calcule a temperatura correspondente em grau Celsius. Imprima na tela as duas temperaturas.

Fórmula: C = (5 * ( F-32) / 9)

18 - Francisco tem 1,50m e cresce 2 centímetros por ano, enquanto Sara tem 1,10m e cresce 3 centímetros por ano. Faça um algoritmo que calcule e imprima na tela em quantos anos serão necessários para que Francisco seja maior que Sara.

19 - Faça um algoritmo que imprima na tela a tabuada de 1 até 10.

20 - Faça um algoritmo que receba um valor inteiro e imprima na tela a sua tabuada.

21 - Faça um algoritmo que mostre um valor aleatório entre 0 e 100.

22 - Faça um algoritmo que leia dois valores inteiros A e B, imprima na tela o quociente e o resto da divisão inteira entre eles.

21 - Faça um algoritmo que efetue o cálculo do salário líquido de um professor. As informações fornecidas serão: valor da hora aula, número de aulas lecionadas no mês e percentual de desconto do INSS. Imprima na tela o salário líquido final.

22 - Faça um algoritmo que calcule a quantidade de litros de combustível gastos em uma viagem, sabendo que o carro faz 12km com um litro. Deve-se fornecer ao usuário o tempo que será gasto na viagem a sua velocidade média, distância percorrida e a quantidade de litros utilizados para fazer a viagem.

Fórmula: distância = tempo x velocidade.

            litros usados = distância / 12.