// DRY No Repeat Yourself

// As funçoes existem para evitar a repetição de codigo

// Função sem parametro
function helloWorld () {
  console.log('Hello World')
}
helloWorld()

// função com parametro
function hello (name) {
  console.log(`Hello ${name}`)
}
hello('Erick')

// função com retorno
function helloReturn (name) {
  return `Hello ${name}`
}
const result = helloReturn('Erick')

// arrow function
const helloArrow = name => `Hello ${name}`
const resultArrow = helloArrow('Erick')

// hosting: vai pegar um codigo e coloca-lo no topo de um arquivo ao executa-lo

// Essa é a principal diferença entre uma função e uma arrow function
// A function (tradicional) pode ser chamada antes de ser declarada devido ao hosting
// Arrow function não pode ser chamada antes de ser declarada pois não é afetada pelo hosting
