var ship, shipImg, sea, seaImg;
function preload(){
seaImg=loadImage("sea.png")
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(400,400);

sea = createSprite(200,200,800,800);
sea.addImage("background",seaImg);
sea.velocityX=-2
sea.x = sea.width/2

ship = createSprite(150,250,10,10);
ship.addAnimation("moving ship",shipImg)
ship.scale =0.3
  
}

function draw() {
  background("blue");
 drawSprites()

 if(sea.x <0){
   sea.x = sea.width/2
 }

}