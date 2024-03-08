// FOR
const caixaDeLapisDeCor = ["Azul", "Verde", "Vermelho", "Laranja"];

// for(let i = 0; i < caixaDeLapisDeCor.length; i++){
//     console.log(caixaDeLapisDeCor[i]);
// }

const listaDeNumeros = [4, 7, 6];

let soma = 0;

for(let indice = 0; indice < listaDeNumeros.length; indice++){
    soma += listaDeNumeros[indice];
    console.log(soma);
}

const media = soma / listaDeNumeros.length;

console.log(media);