// Exercício Extra 2
const nomeDoArquivo = "foto.jpeg";

const tipoArquivo = nomeDoArquivo.slice(-4);

if (tipoArquivo === ".png" || tipoArquivo === ".pdf"){
    console.log("Arquivo válido");
} else {
    console.log("Arquivo inválido");
}