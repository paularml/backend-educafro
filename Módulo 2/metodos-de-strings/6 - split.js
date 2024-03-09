// SPLIT
const nome = "João Pedro Silva Albuquerque"

const listaNomes = nome.split(" ");
const primeiroNome = listaNomes[0];
const ultimoNome = listaNomes[listaNomes.length - 1];

// const nomeCorrigido = primeiroNome + " " + ultimoNome;
const nomeCorrigido = `${primeiroNome} ${ultimoNome}`;

// console.log(listaNomes);
console.log(nomeCorrigido);