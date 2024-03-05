// estrutura basica, assim como em arrays usa-se os colchetes,
// para declarar um objeto caracteriza - se pelo uso das chaves
const pessoa = {}

// o conteuddo dos objetos se da por chave(propriedade) e valor
// no exemplo abaixo, temos 3 propriedades, nome, sobrenome e idade,
// seus valores podem sem de qualquer tipo, string, number, boolean, tambe arrays e objetos
const pessoa2 = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  apeLidos: ['Luizinho', 'Luizao', 'Luizinho'],
  temCNH: true
}

// Existem duas formas de acessar as propriedades de um objeto

// conotação de ponto
pessoa2.nome

// conotação de colchetes
pessoa2['nome']

// Podemos alterar as propriedades de um objeto, pois mesmo estando em uma const estamos alterando o valor da propriedade e não o valor da constante

// Essa alteração é permitida
pessoa2.nome = 'João'
pessoa2.sobrenome = 'Silva'
pessoa2.idade = 25

// Essa não
// pessoa2 = []

// para acrescentarmos uma nova propriedade ao objeto, basta adicionar uma nova chave e seu valor usando a conotação de colchetes
pessoa2['profissao'] = 'Programador'

// Para excluir uma propriedade do objeto, basta usar o delete
delete pessoa2.temCNH

// desestruturação de objetos
// Ao desestruturarmos um objeto podemos usa=los diretamente como uma constante OBS: Por ser uma constante, não podem ser alteradas
const { nome, sobrenome, idade } = pessoa2

// Isso não é permitido
nome = 'João'

// Isso é permitido
pessoa2.nome = 'João'

// shorthand, significa atalho, para facilitar a atribuição valores em variaveis para as propriedades de um objeto, caso elas tenham o mesmo nome, a declaração da variavel a ser atribuida pode ser omitida
const cor = 'vermalho'
const marca = 'ferrari'
const motor = 'v8'
const nomeMoledo = 'Enzo'

const carro = {
  cor,
  marca,
  motor,
  // como o nome da constante é diferente do nome da propriedade, não podemos usar o shorthand
  modelo: nomeMoledo
}
