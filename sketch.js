var form,bgImg1,game,gameState,database,playerCount,player;
function preload(){
    bgImg1=loadImage('Images/bg.jpg');
}
function setup(){
    createCanvas(displayWidth,displayHeight);
database=firebase.database();
    game=new Game();
    game.start();
    game.getState();
    player=new Player();
}
function draw(){
    if(gameState!=null){game.updateState();}
    game.wait();
    game.play();
    player.getCount();
    background(bgImg1);
}