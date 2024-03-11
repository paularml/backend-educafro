// EXERCÍCIO
const nome = "joão pedro silva";

const lista = nome.split(" ");

// console.log(lista);

let nomeFormatado = "";

for(let nome of lista){
    let primeiraLetra = nome.slice(0,1);
    let resto = nome.slice(1);

    let primeiraLetraMaiuscula = primeiraLetra.toUpperCase();

    nomeFormatado += primeiraLetraMaiuscula + resto + " ";

    // console.log(nomeFormatado); // apenas para visualização do que está acontecendo dentro do loop
}

console.log(nomeFormatado.trim());