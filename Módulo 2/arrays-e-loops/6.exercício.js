const palavra = "Programação";

const palavraAlterada = palavra.toLowerCase();

let encontrada = false;

for(let letra of palavraAlterada){

    if (letra === "p"){
        console.log("Tem a letra p");
        encontrada = true;
        break;
    }
}

if (encontrada === false){
    console.log("Não tem a letra p");
}