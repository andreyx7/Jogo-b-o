let startButton, aprenderTratorButton, aprenderIrrigacaoButton, aprenderDroneButton;
let tela = 0; 
let inicioImg, personagemImg, menuImg, tratorImg, irrigacaoImg, droneImg;
let mensagemTopo = "Bem-vindo ao jogo Aventura na Agricultura";
let mensagemBaixo = "";
let timer = 0;
let botoesCriados = false;
let opcoesEscolhidas = 0;

function preload() {
  inicioImg = loadImage("inicio.png");
  personagemImg = loadImage("personagem.png");
  menuImg = loadImage("menu.png");
  tratorImg = loadImage("trator.png");
  irrigacaoImg = loadImage("irrigação.png");
  droneImg = loadImage("drone.png");
}

function setup() {
  createCanvas(600, 590);
  startButton = createButton("Start");
  startButton.position(width / 2 - 40, height / 2);
  startButton.mousePressed(startGame);
}

function startGame() {
  tela = 1; 
  startButton.hide();
  timer = millis(); 
}

function draw() {
  background(220);

  if (tela === 0) {
    image(inicioImg, 0, 0, width, height);
  } else if (tela === 1) {
    image(personagemImg, 0, 0, width, height);
    let tempoDecorrido = millis() - timer;
    if (tempoDecorrido > 6000) {
      tela = 2;
    } else if (tempoDecorrido > 3000) {
      mensagemTopo = "Selecione uma das 3 opções";
      mensagemBaixo = "para aprender um pouco mais";
    } 
    exibirMensagens();
  } else if (tela === 2) {
    image(menuImg, 0, 0, width, height);
    image(tratorImg, 50, 50, 150, 150);
    image(irrigacaoImg, width - 200, 50, 150, 150);
    image(droneImg, width / 2 - 75, height / 2 - 75, 150, 150);
    if (!botoesCriados) {
      criarBotoesAprender();
      botoesCriados = true;
    }
  } else if (tela === 3) {
    image(personagemImg, 0, 0, width, height);
    exibirMensagens();
  } else if (tela === 4) {
    image(personagemImg, 0, 0, width, height);
    mensagemTopo = "Parabéns! Você terminou o jogo!";
    mensagemBaixo = "Você aprendeu um pouco sobre agricultura!";
    exibirMensagens();
  }
}

function criarBotoesAprender() {
  aprenderTratorButton = createButton("Aprender sobre Tratores");
  aprenderTratorButton.position(50, 220);
  aprenderTratorButton.mousePressed(() => aprender("Tratores são essenciais na agricultura!", "Eles ajudam a preparar o solo e plantar."));

  aprenderIrrigacaoButton = createButton("Aprender sobre Irrigação");
  aprenderIrrigacaoButton.position(width - 200, 220);
  aprenderIrrigacaoButton.mousePressed(() => aprender("A irrigação é crucial para o crescimento das plantas!", "Ela garante que as plantas recebam água suficiente."));

  aprenderDroneButton = createButton("Aprender sobre Drones");
  aprenderDroneButton.position(width / 2 - 75, height / 2 + 100);
  aprenderDroneButton.mousePressed(() => aprender("Drones ajudam a monitorar as plantações!", "Eles coletam dados para otimizar a produção."));
}

function aprender(topico, descricao) {
  tela = 3;
  mensagemTopo = topico;
  mensagemBaixo = descricao;
  removerBotoesAprender();
  opcoesEscolhidas++;
  setTimeout(() => {
    tela = opcoesEscolhidas >= 3 ? 4 : 2; 
  }, 6000);
}

function removerBotoesAprender() {
  if (aprenderTratorButton) aprenderTratorButton.remove();
  if (aprenderIrrigacaoButton) aprenderIrrigacaoButton.remove();
  if (aprenderDroneButton) aprenderDroneButton.remove();
  botoesCriados = false;
}

function exibirMensagens() {
  fill(255);
  stroke(0);
  rect(width / 2 - 300, 20, 600, 150, 15);
  fill(0);
  textSize(24);
  textAlign(CENTER, CENTER);
  text(mensagemTopo, width / 2, 80);
  text(mensagemBaixo, width / 2, 110);
}


