const express = require(`express`); // Importa o express

const app = express(); // Criação da aplicação

const PORT = 3000; // definindo a porta do servidor

app.use(express.json()); // permite interpretar JSON

// configurações dos middlewares
function logger(req, res,next){ //middleware de log
    console.log(req.method, req.url); // Exibi o método e a url acessada
    next(); // continua a execução
};

app.use(logger); // aplica o middleware em todas as rotas

// Middleware de validação de senha
function verificarAcesso(req,res,next){
    const senha= req.query.senha; // query os dados que envio na url depois da barra/

    if(senha === '1234'){
        next();
    } else {
        res.status(403).json({
        mensagem : 'Acesso negado, senha incorreta'
        });
       
    }
}

let produtos = [
    { id: 1, nome: "Notebook", preco: 7500},
    { id: 2, nome: "Mouse", preco: 80},
];

// Rota inicial
app.get("/", (req,res) => {
    res.send('Servidor Express funcionando');
});


app.get("/produtos", (req, res) => {
    res.json({
        ListadeProdutos: produtos
    });
});


// busca de produto pelo ID da URL
app.get("/produtos/:id", (req, res) =>{
    const id = req.params.id;
    res.json({
        mensagem: "Produto encontrado",
        id: produtos [id-1]
    });
});


// cadastrar um novo produto
app.post("/produtos", (req, res) => {
    const novoProduto = req.body; // captura dos dados enviados no body da requisição
    produtos.push(novoProduto); // envia o novo produto para o array de produtos

    res.json({
        mensagem: 'Poduto cadastrado com sucesso',
        produto : novoProduto

    });
});

// atualizar um produto existente
app.put("/produtos", (req, res) => {
    const dadosAtualizados = req.body;

    produtos = produtos.map(produto => {

        if(produtos.id === dadosAtualizados.id){
                return{
                    ...produto, 
                    preco: dadosAtualizados.preco
                };
        }
        return produto;
    });

    res.json({
        ListadeProdutos: produtos
    });
});

// deletar um produto existente
app.delete("/produtos", (req, res) => {
    const produtoDeletado = req.body;

    const produto = produtos.findIndex(produto => produto.id === produtoDeletado.id)
if(produto > -1){
     produtos.splice(produto,1);
}

res.json({
    mensagem : "Produto deletado",
    ListadeProdutos: produtos
});

});

// Rota protegida
app.get("/admin", verificarAcesso, (req, res) => {
    res.json({
        mensagen: 'Área administrativa acessada'
    });
});


//Declarando a porta
app.listen(PORT, () => {
    console.log("server runing into http://localhost:3000")
});