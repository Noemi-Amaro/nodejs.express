// Primeiros passos para a criação de um servidor com express:
// abrir o terminal e dar os seguintes comandos:
// npm init -y (para inicializar o npm)
// npm install express (para a instalação das dependências do
// framework Express).

// Importa a biblioteca Express para dentro do projeto
const express =require ('express');

// Cria a aplicação Express
const app = express();

const PORT = 3000; // porta do servidor

//Middleware nativo do Express que permite a nossa aplicação 
//interpretar dados enviados em JSON.
app.use(express.json());

//Criação de uma rota com método GET
app.get("/", (req, res) =>{
    res.send("Servidor Express funcionando");
});

// Porta definida para iniciar o servidor
app.listen(PORT, () =>{
console.log(`Servidor funcionando em http://localhost:${PORT}`);
});
