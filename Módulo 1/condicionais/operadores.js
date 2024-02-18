//  operadores de comparação (<, >, <=, >=)

10 > 5 // true
10 < 5 // false
10 >= 5 // true
10 <= 5 // false

const idade = 18

if (idade >= 18) {
  console.log('maior de idade')
} else {
  console.log('menor de idade')
}

// operaderes de igualdade (==, !=)
// testam a igualdade dos valores ignorando seus tipos

10 == '10' // true
10 === 10 // true
10 !== 10 // false
10 != '10' // false

// operadore de identidade (===, !==)
// testam a igualdade dos valores consideramdo seus tipos

10 === '10' // false
10 === 10 // true
10 !== '10' // true
10 !== 10 // false

// operadores logicos (&&, ||, !)

//  && (e):  Ele retorna verdadeiro (true) apenas se todas as expressões
// condicionais conectadas por ele forem verdadeiras.Caso contrário, retorna falso

if (10 > 5 && 10 < 20) {
  console.log('verdadeiro')
} else {
  console.log('falso')
}

// || (ou): Ele retorna verdadeiro (true) se uma das expressões condicionais conectadas
// por ele for verdadeira.Caso contrário, retorna falso.Ou seja, independentemente de
// quantas expressões haja, apenas uma precisa ser verdadeira.

10 > 5 // true
10 === 20 // false

if (10 > 5 || 10 === 20) {
  console.log('verdadeiro')
} else {
  console.log('falso')
}

// ! (negação): Ele inverte o valor de uma expressão. Se ela for verdadeira,
// retorna falso. Se for falsa, retorna verdadeiro.

10 > 5 // true
10 === 20 // false
!10 > 5 // false
!10 === 20 // true

if (!10 > 5) {
  console.log('verdadeiro')
} else {
  console.log('falso')
}
