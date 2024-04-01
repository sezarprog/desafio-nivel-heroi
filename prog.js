// código desenvolvido para classificar nível de herói
// Formação Lógica de programação Dio
//
//Regras de pontos XP
//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante
//
//REGRAS DAS FASES DO JOGO:
//Com o. Jacost....
//
//inicio
let nomeJogador
let nomeHeroi
let venceu
let xpInicial
let xpAcumulado
let xpPerdido
const octonex = "Caso escolha o Octonex (🦑), você téra apenas uma batalha para chegar ao fim do jogo, más se perder morrerá\n"
const timeHerois = [ //declarando matriz
  ["1 ", "Letosp 👾", "M", "1000", 10],
  ["2 ", "Jacost 👽", "M", "2000", 20],
  ["3 ", "Octonex 🦑", "F", "4500", 45]
] // fim matriz
const obstaculos = [ //declarando matriz de obstáculos 
  ["vencer: DINOREX 🐱‍🐉", 3000, 30],
  ["vencer: tetramoster",4000, 40],
  ["pular vale", 2000, 20],
  ["vencer Leãoteg", 5300, 50],
  ["vencer max",6000, 60],
  ["vencer sepatur", 7000, 70]
] // fim matriz dede obstaculos
console.log ("Olá\n Seja bem vindo ao jogo 😀! \n Digite um nome de jogador ou apelido a sua escolha:\n")
console.log (nomeJogador = " Tacontud\n")
console.log ("Certo, você digitou: " + nomeJogador + "😀! Agora escolha um Herói para jogar:\n")
console.log ("-> "+ timeHerois[0][0] + timeHerois[0][1] + "\n")
console.log ("-> "+ timeHerois[1][0] + timeHerois[1][1] + "\n")
console.log ("-> "+ timeHerois[2][0] + timeHerois[2][1] + "\n")
console.log (octonex) 
console.log ("OBS: " + octonex)
console.log ("Ok 😎 " + nomeJogador + "- Você fez uma ótima escolha" + timeHerois[1][1] + " já vem com treinamento básico de " +  timeHerois[1][3] + "XP"+
" e está no nível " + timeHerois[1][4]+" 😉\n" )
//inicio do jogo
console.log("Iniciando o jogo...aguarde um momento, po favor!\n")
console.log (" Primeira fase... \n "+ obstaculos[0][1]+ " pontos se "+obstaculos[0][0]+"\n")
console.log ("Jogando...\n")
for (let x = 0; x < 10; x++) {
            console.count("Fases jogadas");
        }
//
venceu = false
xpInicial = 2000
if (venceu) {
  console.log ("\n"+nomeJogador+" vc venceu 😃 e esta com: " + (xpInicial+obstaculos[0][1])+' XP´S')
} else if (xpInicial >=2000){
  // Se o caminho da esquerda tiver uma ponte quebrada, João vai procurar outro caminho.
console.log ("\n"+nomeJogador+"Você perdeu, más como é seu primeiro desafio, continuará com os "+ xpInicial+"XP´s iniciais")
}else {
  // Se não tiver obstáculo nem ponte quebrada no caminho da esquerda, João seguirá por esse caminho.
  console.log ("Vamos tentar novamente 😁")
  
}
xpAcumulado = 0+xpInicial; // Você pode mudar isso para outros dias

switch (xpAcumulado) {
  case 0:
  case 999:
    console.log("O Jogador **"+nomeJogador+"** tem "+xpAcumulado+" xp");
    console.log("Esta no nível de ** FERRO! **"+'😊💙.')
    break;
  case 1001:
  case 2000:
    console.log("O Jogador **"+nomeJogador+"** tem "+xpAcumulado+" xp");
    console.log("Esta no nível de ** BRONZE! **"+'😊💙.')
    break;
  default:
  console.log("Dia!");
  }
  console.log ("Vamos tentar novamente 😁")