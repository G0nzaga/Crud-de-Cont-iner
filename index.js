//Importando o Módulo Express
const express = require('express');

const bodyParser = require('body-parser')


//Criar uma cópia do Express, uma instância
const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

//Para criar arquivos estáticos dentro do Express
app.use(express.static('public'));

app.set('view engine', 'ejs');

//Rota Principal
app.get("/", (req, res) =>{
    res.render("index")
})

// const Pergunta = require("./database/Pergunta");
//Carregar a conexão
const connection = require("./database/database");



//Database, Estrutura chamada Promisse, chamar o "then" quando a autenticação ocorrer com sucesso
connection
.authenticate()
.then(() =>{
    console.log("Conexão feita com o banco de dados")
})
.catch((msgErro) =>{
    console.log(msgErro);
})

app.post("/crud", function(req, res){
    res.send("Texto: " +req.body.dataini+ " Conteudo: " + req.body.dataini)
})

const Pergunta = require('../Crud de Contêiner/database/Pergunta')


app.listen(8080, () =>{
    console.log('App rodando');
})