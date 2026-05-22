// Rotas no Express

//formatação de rota + metodo com o express:
// app.metodo("caminho", função)
//onde:
// app -> aplicação express
// metodo -> tipo da requisição http (get, post, put, delete)
// caminho -> rota
// função -> o que será executado quando a rota for acessada
//rota= ex: /produtos

const express =require ('express');
const app = express();
const PORT = 3000;
app.use(express.json());

// Método GET com rota de produtos
app.get("/produtos", (req ,res) => {
    res.json([
        {id: 1, nome: "Notebook", preco: 5000},
        {id: 2, nome: "Mouse", preco: 50}
    ]);
});

app.get("/usuarios", (req, res) => {
    res.json([
        {id: 1, nome: "Noemi"},
        {id: 2, nome: "Paulo"}
    ]);
});

//--------------------------------------------------------------------

//Método POST com rota de produtos
app.post("/produtos", (req, res) => {
    const novoProduto = req.body;
    res.json({
        mensagem : "Produto cadastrado com sucesso",
        produto: novoProduto
    });
});

//--------------------------------------------------------------------

//Método PUT para iniciar 
// id é para saber qual objeto eu quero alterar

app.put("/produtos/:id", (req, res) => {
    // Captura o ID da requisição
    const id = req.params.id;

    const dadosAtualizados = req.body;

    res.json({
        mensagem: " Produto atualizado com sucesso",
        id: id,
        dados: dadosAtualizados
    });
});

//--------------------------------------------------------------------

// Método DELETE com rota produtos
app.delete("/produtos/:id", (req, res) => {
    const id = req.params.id;
    res.json({
        mensagem: "Produto removido com sucesso ",
        id: id
    });
});


//--------------------------------------------------------------------

// Porta definida para iniciar o servidor   
app.listen(PORT, () =>{
console.log(`Servidor funcionando em http://localhost:${PORT}`);
});