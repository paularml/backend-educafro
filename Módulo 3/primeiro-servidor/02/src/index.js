// iniciar projeto com 'npm init -y' no terminal
// instalar a biblioteca express com 'npm install express' no terminal

// importar express para o arquivo index.js:
const express = require('express');

// instanciar o express para podermos usar ele:
const app = express();

app.get('/home', (request, response) => {
  response.send('Olá… esse é meu primeiro servidor com Express!')
})

app.get('/', (req, res) => {
  res.send('Essa é a rota principal')
})

// podemos passar variaveis para o send! ex:

app.get('/array', (req, res) => {
  const array = [1, 2, 3, 4, 5]
  res.send(array)
})


// nossa aplicacao estara ouvindo a porta 3000: 
app.listen(3000);

// iniciar o servidor: no terminal: node .\src\index.js
// rodar a aplicacao em http://localhost:3000/ , http://localhost:3000/home , e http://localhost:3000/array
// matar o servidor com 'ctrl' + 'c'


// funcao normal:
// function exemplo () { }

// arrow function:
// const exemplo = () => { }
