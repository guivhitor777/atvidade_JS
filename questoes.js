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
let resul2 = valor * 1.05
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



//9 - Faça um algoritmo que calcule o IMC (Índice de Massa Corporal) de uma pessoa, leia o seu peso e sua altura e imprima na tela sua condição de acordo com a tabela abaixo:
// Fórmula do IMC = peso / (altura) ²
// Tabela Condições IMC
// Abaixo de 18,5   | Abaixo do peso          
// Entre 18,6 e 24,9 | Peso ideal (parabéns)  
// Entre 25,0 e 29,9 | Levemente acima do peso
// Entre 30,0 e 34,9 | Obesidade grau I 
// Entre 35,0 e 39,9 | Obesidade grau II (severa)
// Maior ou igual a 40 | Obesidade grau III (mórbida)


// 10 - Faça um algoritmo que leia três notas obtidas por um aluno, e imprima na tela a média das notas.

 

// 11 - Faça um algoritmo que leia quatro notas obtidas por um aluno, calcule a média das nota obtidas, imprima na tela o nome do aluno e se o aluno foi aprovado ou reprovado. Para o aluno ser considerado aprovado sua média final deve ser maior ou igual a 7.