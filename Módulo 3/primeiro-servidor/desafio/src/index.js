// iniciar projeto com 'npm init -y' no terminal
// instalar a biblioteca express com 'npm install express' no terminal

// importar express para o arquivo index.js:
const express = require('express');

// instanciar o express para podermos usar ele:
const app = express();

const arrayDePessoas = [
  { id: 21, nome: 'Maria', idade: 32 },
  { id: 21, nome: 'Camila', idade: 17 },
  { id: 21, nome: 'Fernando', idade: 20 },
  { id: 21, nome: 'João', idade: 57 }
]

app.get('/usuarios', (req, res) => {
  // posso fazer dessa forma que esta no codigo, declarando a variavel que contem o array de pessoas
  // fora da rota e apenas acessando ela aqui, ou posso declarar essa variavel aqui dentro
  // direto, vai funcionar das duas formas.
  res.send(arrayDePessoas);
})

// nossa aplicacao estara ouvindo a porta 3000: 
app.listen(3000);

// iniciar o servidor: no terminal: node .\src\index.js
// rodar a aplicacao em http://localhost:3000/usuarios
// matar o servidor com 'ctrl' + 'c'