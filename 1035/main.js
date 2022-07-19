var input = require('fs').readFileSync('./1035/stdin', 'utf8')
var lines = input.split(' ')

/*
  
  Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for maior do que A, e a soma de C com D for maior que a soma de A e B e se C e D, ambos, forem positivos e se a variável A for par escrever a mensagem "Valores aceitos", senão escrever "Valores nao aceitos".

  Entrada
  Quatro números inteiros A, B, C e D.

  Saída
  Mostre a respectiva mensagem após a validação dos valores.
 
 */

var A = parseInt(lines[0])
var B = parseInt(lines[1])
var C = parseInt(lines[2])
var D = parseInt(lines[3])

if (B > C && D > A && C + D > A + B && C > 0 && D > 0 && A % 2 == 0) {
  console.log('Valores aceitos')
} else {
  console.log('Valores nao aceitos')
}
