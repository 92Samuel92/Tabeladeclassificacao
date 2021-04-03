var NumerodepontosGanhos=parseInt(prompt("Insira quantos pontos os jogadores ganham a cada vitoria ou empate"))
var Jogador1=prompt("Adicione o jogador 1")           

var Jogador2=prompt("Adicione o jogador 2")
 
var Jogador3=prompt("Adicione o jogador 3")
 
var Jogador4=prompt("Adicione o jogador 4")

var Jogador5=prompt("Adicione o jogador 5")

var Jogador6=prompt("Adicione o jogador 6")

var Jogador7=prompt("Adicione o jogador 7")

var Jogador8=prompt("Adicione o jogador 8")

var Jogador9=prompt("Adicione o jogador 9")

var Jogador10=prompt("Adicione o jogador 10")

var J1={
nome:Jogador1,
  vitorias:0,
  empates:0,
  derrotas:0,
  pontos:0  }

var J2={
nome:Jogador2,
  vitorias:0,
  empates:0,
  derrotas:0,
  pontos:0  }

var J3={
nome:Jogador3,
  vitorias:0,
  empates:0,
  derrotas:0,
  pontos:0  }

var J4={
nome:Jogador4,
  vitorias:0,
  empates:0,
  derrotas:0,
  pontos:0  }

var J5={
nome:Jogador5,
  vitorias:0,
  empates:0,
  derrotas:0,
  pontos:0  }

var J6={
nome:Jogador6,
  vitorias:0,
  empates:0,
  derrotas:0,
  pontos:0  }

var J7={
nome:Jogador7,
  vitorias:0,
  empates:0,
  derrotas:0,
  pontos:0  }

var J8={
nome:Jogador8,
  vitorias:0,
  empates:0,
  derrotas:0,
  pontos:0  }

var J9={
nome:Jogador9,
  vitorias:0,
  empates:0,
  derrotas:0,
  pontos:0  }

var J10={
nome:Jogador10,
  vitorias:0,
  empates:0,
  derrotas:0,
  pontos:0  }
alert("Se em pontos estiver Nan por favor recaregue a página e defina um número valido e inteiro")        

           J1.pontos=calculaPontos(J1)
J2.pontos=calculaPontos(J2)
J3.pontos=calculaPontos(J3)
J4.pontos=calculaPontos(J4)
J5.pontos=calculaPontos(J5)
J6.pontos=calculaPontos(J6)
J7.pontos=calculaPontos(J7)
J8.pontos=calculaPontos(J8)
J9.pontos=calculaPontos(J9)
J10.pontos=calculaPontos(J10)


function calculaPontos(jogador){
 var pontos= (jogador.vitorias*NumerodepontosGanhos)+jogador.empates
 return pontos
}



var jogadores=[J1,J2,J3,J4,J5,J6,J7,J8,J9,J10]

exibirJogadoresNaTela(jogadores)

function exibirJogadoresNaTela(jogadores){
  var html=""
  for(var i=0;i<jogadores.length;i++){
    html += "<tr><td>"+jogadores[i].nome+"</td>"
    html += "<td>"+jogadores[i].vitorias+"</td>"
    html += "<td>"+jogadores[i].empates+"</td>"
    html += "<td>"+jogadores[i].derrotas+"</td>"
    html += "<td>"+jogadores[i].pontos+"</td>"
    html += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td></tr>"
  }
  var tabelaJogadores= document.getElementById('tabelaJogadores')
  tabelaJogadores.innerHTML = html
}
function adicionarVitoria(i){
  var jogador= jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}
function adicionarDerrota(i){
   var jogador= jogadores[i]
  jogador.derrotas++
  exibirJogadoresNaTela(jogadores)
}
function adicionarEmpate(i){
  var jogador= jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)}
