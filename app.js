 const express = require("express"); // importando o express
const app = express();

app.get("/",function(req,res){
    res.send("Bem vindo ao guia do programador")
});


app.get("/blog",function(req, res){
    res.send("Bem vindo ao meu blog!");

})

app.get("/canal/youtube",function(req,res){
    res.send("<h1>Bem vindo ao meu canal!</h1>");
})

app.get("/ola",function(req,res){
    res.send("<h1>Olá voce esta bem</h1>");
});

app.listen(8080,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");

    }else{
        console.log("Servidor iniciado com sucesso!");
    }
})

    