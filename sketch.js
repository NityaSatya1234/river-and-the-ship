var sea,seaImg
var ship,shipImg 
function preload(){
seaImg=loadImage("sea.png");
shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(600,300);

  sea=createSprite(300,150,600,20);
  sea.addImage("s1",seaImg)
  sea.scale=0.3
  sea.velocityX=-2
  ship=createSprite(150,200,80,80);
  ship.addAnimation("s2",shipImg)
  ship.scale=0.2
}

function draw() {
  background("blue");
 
 if(sea.x<0){
 sea.x=sea.width/8
 }
  
drawSprites();
}