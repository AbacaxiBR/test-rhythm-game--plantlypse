var nota1, nota2, nota3, nota4;
var player, playerImg;
var placar;
var grupoMUSIC1,grupoMUSIC2,grupoMUSIC3,grupoMUSIC4;
var Som1, Som2, Som3, Som4;
var JOGAR = 1;
var ENCERRAR = 0;
var estadoDeJogo = JOGAR;
var Fundo, FundoImg;
var MUSIC1, MUSIC2, MUSIC3, MUSIC4;
var filtro1, filtro2, filtro3, filtro4, filtro5;
var filtroTotureal1,filtroTotureal2,filtroTotureal3
var setaD1, setaD1PNG;
var setaE1, setaE1PNG;
var setaC1, setaC1PNG;
var setaB1, setaB1PNG;


function preload(){
  playerImg  = loadImage("player - Animation1.png")
  FundoImg = loadImage("Fundo.png")
  Som1 = loadSound("Boa_Short.mp3")
  Som2 = loadSound("Bep_Short.mp3")
  Som3 = loadSound("Bee_Short.mp3")
  Som4 = loadSound("Ooh_Short.mp3")
  
  setaD1PNG = loadAnimation("Setas.png", "Setasdireita1.png", "Setasdireita2.png")
  setaE1PNG = loadAnimation("Setas.png", "Setasesquerda1.png", "Setasesquerda2.png")
    setaC1PNG = loadAnimation("Setas.png", "Setascima1.png", "Setascima1.png")
    setaB1PNG = loadAnimation("Setas.png", "Setasbaixo1.png", "Setasbaixo2.png")
  
  
  
  
  grupoMUSIC1= new Group();
  grupoMUSIC2= new Group();
  grupoMUSIC3= new Group();
  grupoMUSIC4= new Group();
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  filtro1 = 0
  filtro2 = 0
  filtro3 = 0
  filtro4 = 0
  filtro5 = 0
  
  filtroTotureal1 = 0
  filtroTotureal2 =0
  filtroTotureal3 = 0
  
  Fundo = createSprite(200, 200, 150, 150)
  Fundo.scale = 0.9
  Fundo.addImage(FundoImg)
  
  setaD1 = createSprite(600, 90, 40, 40);
  setaD1.addAnimation("mover1", setaD1PNG);
  setaD1.scale = 0.5;
  setaD1.visible = true;
  
  
  setaE1 = createSprite(600, 90, 40, 40);
  setaE1.addAnimation("mover1", setaE1PNG);
  setaE1.scale = 0.5;
  setaE1.visible = false;
  
  
  setaC1 = createSprite(600, 90, 40, 40);
  setaC1.addAnimation("mover1", setaC1PNG);
  setaC1.scale = 0.5;
  setaC1.visible = false;
  
  
  setaB1 = createSprite(600, 90, 40, 40);
  setaB1.addAnimation("mover1", setaB1PNG);
  setaB1.scale = 0.5;
  setaB1.visible = false;
  
  
  notaPl1 = createSprite(50, 50, 50, 50)
  notaPl1.shapeColor = "aqua"
  notaPl2 = createSprite(120, 50, 50, 50)
  notaPl2.shapeColor = "aqua"
  notaPl3 = createSprite(200, 50, 50, 50)
  notaPl3.shapeColor = "aqua"
  notaPl4 = createSprite(280, 50, 50, 50)
  notaPl4.shapeColor = "aqua"
  
  player = createSprite(200, 340, 50, 50)
  player.addImage( playerImg)
  
  
  placar = 0
}
function gerarNotas1() {
  if (filtro5 === 1){
  if (frameCount % Math.round(random(80, 200)) === 0) {
      filtro=1
      MUSIC1 = createSprite(50, 580, 50, 50);
      MUSIC1.velocityY  = -(3 + 0.2*placar/5)
      MUSIC1.shapeColor = "purple"
      grupoMUSIC1.add(MUSIC1);
  }
  }
}
function gerarNotas2() {
  if (filtro5 === 1){
  if (frameCount % Math.round(random(80, 200)) === 0) {
      MUSIC2 = createSprite(120, 580, 50, 50);
      MUSIC2.velocityY  = -(3 + 0.2*placar/5)
      MUSIC2.shapeColor = "purple"
      grupoMUSIC2.add(MUSIC2);
  }
  }
}
function gerarNotas3() {
  if (filtro5 === 1){
  if (frameCount % Math.round(random(80, 200)) === 0) {
      MUSIC3 = createSprite(200, 580, 50, 50);
      MUSIC3.velocityY  = -(3 + 0.2*placar/5)
      MUSIC3.shapeColor = "purple"
      grupoMUSIC3.add(MUSIC3);
  }
  }
}
function gerarNotas4() {
  if (filtro5 === 1){
  if (frameCount % Math.round(random(80, 200)) === 0) {
      MUSIC4 = createSprite(280, 580, 50, 50);
      MUSIC4.velocityY  = -(3 + 0.2*placar/5)
      MUSIC4.shapeColor = "purple"
      grupoMUSIC4.add(MUSIC4);
  }
  }
}


function draw() {
  background("white")
  gerarNotas1()
  gerarNotas2()
  gerarNotas3() 
  gerarNotas4()
  

  if (filtro4 === 1){
    setaD1.visible = false;
    setaE1.visible = true;
  }
  
    if (filtro1 === 1){
    setaB1.visible = true;
    setaE1.visible = false;
  }
  
    if (filtro3=== 1){
    setaC1.visible = true;
    setaB1.visible = false;
  }
  
    if (filtro2 === 1){
    setaC1.visible = false;
  }
  
  if (keyWentDown(UP_ARROW)){
      if (filtroTotureal1 === 1 && filtroTotureal2 === 1 && filtroTotureal3 === 1){
      filtro5 = 1
      filtro2 =1
      nota2 = createSprite(120, 50, 50, 50)
      nota2.shapeColor = "Red"
      setInterval(destroyNota2, 100);
      }
  }
  if (keyWentDown(RIGHT_ARROW)){
      filtroTotureal1 = 1
      filtro4 =1
      nota4 = createSprite(280, 50, 50, 50)
      nota4.shapeColor = "Red"
      setInterval(destroyNota4, 100);
    }
  

    if (keyWentDown(LEFT_ARROW)){
    if (filtroTotureal1 === 1 ){
      filtroTotureal2 = 1
      filtro1 =1
      nota1 = createSprite(50, 50, 50, 50)
      nota1.shapeColor = "Red"
      setInterval(destroyNota1, 100);
  }
  }
    if (keyWentDown(DOWN_ARROW)){
      if (filtroTotureal1 === 1 && filtroTotureal2 === 1){
      filtroTotureal3 = 1
      filtro3 = 1
      nota3 = createSprite(200, 50, 50, 50)
      nota3.shapeColor = "Red"
      setInterval(destroyNota3, 100);
      }
  }
    if (grupoMUSIC1.isTouching(nota1)){
        grupoMUSIC1.destroyEach()
        placar = placar + 5
        Som1.play()
  }
      if (grupoMUSIC2.isTouching(nota2)){
          grupoMUSIC2.destroyEach()
          placar = placar + 5
          Som2.play()
  }
      if (grupoMUSIC3.isTouching(nota3)){
          grupoMUSIC3.destroyEach()
          placar = placar + 5
          Som3.play()
  }
      if (grupoMUSIC4.isTouching(nota4)){
          grupoMUSIC4.destroyEach()
          placar = placar + 5
          Som4.play()
  }
  drawSprites();
  textSize(25);
  fill(0)
  text("Placar : "+ placar,250,50);
}
function destroyNota1(){
    nota1.destroy()
}
function destroyNota2(){
    nota2.destroy()
}
function destroyNota3(){
    nota3.destroy()
}

function destroyNota4(){
    nota4.destroy()
}
