var shipImgs,ship
var seaImg,sea

function preload()
{
  shipImgs = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  
  seaImg = loadImage("sea.png")
  

}

function setup(){
  createCanvas(400,400);
  sea = createSprite (200,200,400,10)
  sea.addImage (seaImg);
  sea.scale = 0.3
  sea.velocityX = -5

  ship = createSprite (150,200,20,20)
  ship.addAnimation ("shipMoving",shipImgs);
  ship.scale = 0.3

  
}

function draw() 
{
  background("blue");

  if(sea.x < 0){
    sea.x = 200
  }


  drawSprites()
 
}