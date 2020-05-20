                                                                       var ball,img,paddle;
function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=-4;
  ball.velocityY=-3;
  paddle=createSprite(390,200,20,100);
  paddle.addImage(paddleimg)
  

}

function draw() {
  background("purple");
  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
 
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);
  paddle.collide(edges[3]);
   paddle.collide(edges[2]);
  if(keyDown(UP_ARROW))
  {
   paddle.velocityY=-4;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    
    paddle.velocityY=4;
    
    
  }
  drawSprites();
  
}

function explosion()
{
  ball.velocityY=random(-8,8);
}

