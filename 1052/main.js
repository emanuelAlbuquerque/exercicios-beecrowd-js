var input = require('fs').readFileSync('./1052/stdin', 'utf8')
var lines = input.split('\n')

/*
Leia um valor inteiro entre 1 e 12, inclusive. Correspondente a este valor, deve ser apresentado como resposta o mês do ano por extenso, em inglês, com a primeira letra maiúscula.

Entrada
A entrada contém um único valor inteiro.

Saída
Imprima por extenso o nome do mês correspondente ao número existente na entrada, com a primeira letra em maiúscula.
 */

var mes = parseInt(lines)
var meses = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

for (let i = 1; i <= meses.length; i++) {
  switch (mes) {
    case i:
      console.log(meses[i - 1])
      break
  }
}
