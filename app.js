var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");
var HtmlParser = require("./HtmlParser");
var Writer = require("./Writer");
var PDFWriter = require("./PDFwriter");

var leitor = new Reader();
var escritor = new Writer();

async function main(){
     var dados = await leitor.Read("./arquivo.csv");
     var dadosProcessados = Processor.Process(dados);

     var usuarios = new Table(dadosProcessados);

     var html = await HtmlParser.Parse(usuarios);

     escritor.Writer("meuhtmlgerado.html", html);

     PDFWriter.WritePDF(Date.now() + ".PDF",html);

}

main();