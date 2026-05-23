// middleware de acesso
// ele será usado para realizar uma autenticação

const express = require(`express`)

const app = express(); // criando a aplicação

const PORT = 3000; // DEFININDO A PORTA DO SERVIDOR

app.use(express.json()); // nos permite interpretar JSON

function verificarAcesso(req, res,next){
    //const autorizado - true; //simulação de acesso
    const autorizado = false; // simulação de acesso
    // true : acesso liberado
    // false : negar acesso

    if(autorizado){
        next();
    } else {
        res.status(403).json({
            mensagem : "Acesso negado"
        });
    }
}

// Incluindo o Middleware na rota

app.get("/admin", verificarAcesso, (req,res) => {
    res.json({
        mensagem: "Área administativa! acessada"
    });
});

//definição do acesso
app.listen(PORT, () =>{
    console.log("server runing into http://localhost:3000");
});