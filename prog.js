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
//inicializando as variáveis
let nomeJogador 
let nomeHeroi
let venceu
let xpInicial
let xpAcumulado
let xpPerdido
//
//inicializando as constantes
const octonex = "Caso escolha o Octonex (🦑), você téra apenas uma batalha para chegar ao fim do jogo, más se perder morrerá\n"
//declarando matriz dos heróis
const herois = [ 
  ["1 ", "Letosp 👾", "M", "1000", 10],
  ["2 ", "Jacost 👽", "M", "2000", 20],
  ["3 ", "Octonex 🦑", "F", "4500", 45]
] // fim matriz 
//declarando matriz de oponentes 
const oponentes = [ 
  ["vencer: DINOREX 🐱‍🐉", 3000, 30],
  ["vencer: tetramoster",4000, 40],
  ["pular vale", 2000, 20],
  ["vencer Leãoteg", 5300, 50],
  ["vencer max",6000, 60],
  ["vencer sepatur", 7000, 70]
] // fim matriz de oponentes
// inicio das informações e perguntas iniciais do jogo
console.log ("Olá\n Seja bem vindo ao jogo 😀! \n Digite um nome de jogador ou apelido a sua escolha:\n")
console.log (nomeJogador = " Tacontud\n")
console.log ("Certo, você digitou: " + nomeJogador + "😀! Agora escolha um Herói para jogar:\n")
console.log ("-> "+ herois[0][0] + herois[0][1] + "\n")
console.log ("-> "+ herois[1][0] + herois[1][1] + "\n")
console.log ("-> "+ herois[2][0] + herois[2][1] + "\n")
console.log (octonex) 
console.log ("OBS: " + octonex)
// para melhorar da para adicinar uma estrutura de controle switch case
// abaixo com as opções de escolha dos heróis
console.log ("Ok 😎 " + nomeJogador + "- Você fez uma ótima escolha" + herois[1][1] + " já vem com treinamento básico de " +  timeHerois[1][3] + "XP"+
" e está no nível " + herois[1][4]+" 😉\n" )
//inicio do jogo
console.log("Iniciando o jogo...aguarde um momento, po favor!\n")
console.log (" Primeira fase... \n "+ oponentes[0][1]+ " pontos se "+oponentes[0][0]+"\n")
console.log ("Jogando...\n")
// um contador de fases
for (let fases = 0; fases < 10; fases++) {
 console.count("Fases jogadas");
}
// Abaixo uma estrutura condicional (if,else if, else) verifica se o heroi 
// venceu ou perdeu (venceu = true ou false),se tem XP inicial (xpInicial = 2000) 
// e segue com os argumentos.
venceu = false
xpInicial = 2000
if (venceu) {
  console.log ("\n"+nomeJogador+" vc venceu 😃 e esta com: " + (xpInicial+oponentes[0][1])+' XPs')
// Se o heroi ganhou (venceu = true), acumula seus XPs iniciais + XP da matriz obstáculos.
} else if (xpInicial >=2000){
// Então se o heroi perdeu (venceu = false), continua com seus XPs.
  console.log ("\n"+nomeJogador+"Você perdeu, más como é seu primeiro desafio, continuará com os "+ xpInicial+"XP´s iniciais")
}else {
// Então.
  console.log ("Vamos tentar novamente 😁")
}
xpAcumulado = 0 +xpInicial; // para melhorar depende da adição de uma 
// estrutura switch case com a sugestão linha 48, as variáveis já estariam com os valores definidos.
//
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
  // OBS:
  // Existem algumas implementações a serem adicionadas para melhorar este código, 
  // no entanto, como é somente para fins didáticos foram utilizados conceitos básicos
  // de uma primeira codificação e não serão adicionados, 
  // fica a critério de quem desejar adicionar!