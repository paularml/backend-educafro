// estrutura basica de uma condicional

if (true) {
  // executa aqui se a condicional for verdadeira
} else {
  // executa aqui se a condicional for falsa
}

if ('1 condition') {
  // executa aqui se a primeira condicional for verdadeira
} else if ('2 condition') {
  // caso a primeira condicional seja falsa, executa aqui se a segunda condicional for verdadeira
} else {
  // caso ambas as condicionais sejam falsas, executa aqui
}

// OBS: sera executado apenas o primeiro bloco que for verdadeiro
// pode se colocar quantos else if quiser

// condição ternária

// estrutura:
// escreve a condição antes da interrogação ? apos a interrogação executa caso seja verdadeira: apos os dois pontos executa caso seja falso

const condition = true
const result = condition ? 'verdadeiro' : 'falso'
console.log(result)

// short-circuit  (curto-circuito)

// utilizando o operador &&
// caso a condicional seja verdadeira, sera atribuido a result2 o valor 'verdadeiro', caso
// contrario sera atribuido a result2 o valor de condition2
const condition2 = true
const result2 = condition2 && 'verdadeiro'
console.log(result2)

// utilizando o operador ||
// caso a condicional seja verdadeira, sera atribuido a result3 o valor de condition3 caso
// contrario sera atribuido a result3 o valor 'falso'
const condition3 = false
const result3 = condition3 || 'falso'
console.log(result3)
