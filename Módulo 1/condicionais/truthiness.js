// "Truthiness" é um termo usado em programação para descrever como valores
// são avaliados em um contexto booleano.

// Por exemplo, em JavaScript, os seguintes valores são avaliados como falso
// em um contexto booleano e têm "falsidade"(falsidade em termos de verdade):

// false
// 0
// '' (string vazia)
// null
// undefined
// NaN (Not-a-Number)

const condition1 = false
const condition2 = 0
const condition3 = ''
const condition4 = null
const condition5 = undefined
const condition6 = NaN

if (condition1) {
  console.log(condition1)
} else if (condition2) {
  console.log(condition2)
} else if (condition3) {
  console.log(condition3)
} else if (condition4) {
  console.log(condition4)
} else if (condition5) {
  console.log(condition5)
} else if (condition6) {
  console.log(condition6)
} else {
  console.log('Todas as condições são falsas')
}
