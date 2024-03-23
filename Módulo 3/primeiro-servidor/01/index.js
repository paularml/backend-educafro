// Começamos um servidor genérico colocando o comando “npm init -y” no terminal.
// instalamos a lodash por meio do comando 'npm install lodash' no terminal.

//const lodash = require('lodash')
//desestruturar a uniq direto:
const { uniq } = require('lodash');

//importar um arquivo de arrays para consumir ele nesse arquivo:
const { arrayNumeros, arrayLetras } = require('./array');

const arrayNumeroUnico = uniq(arrayNumeros);
const arrayLetraUnica = uniq(arrayLetras);

console.log(arrayNumeroUnico);
console.log(arrayLetraUnica);
