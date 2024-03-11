// Exercício Extra
const numeroCartao = "1111222233334444";

const primeirosDigitos = numeroCartao.slice(0,4);
let ultimosDigitos = numeroCartao.slice(-4);
ultimosDigitos = ultimosDigitos.padStart(12, "*");

// console.log(primeirosDigitos);
// console.log(ultimosDigitos);

const numeroCartaoCorrigido = primeirosDigitos + ultimosDigitos;

console.log(numeroCartaoCorrigido);