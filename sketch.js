var backgroundImg;
var girl,girlSprite;
var zombie,zombieSprite;


function preload(){
  backgroundImg = loadImage("images/background.png");
  girl= loadAnimation("images/girl1.png","images/girl2.png");
  zombie = loadAnimation("images/zombie1.png","images/zombie2.png");

}


function setup() {
  createCanvas(windowWidth,windowHeight);

  girlSprite =createSprite(width/10,height-200);
  girlSprite.addAnimation("player",girl);
  girlSprite.scale = 0.4;

  zombieSprite = createSprite(width-800,height-100);
  zombieSprite.addAnimation("computer",zombie);

}

function draw() {
  background(backgroundImg);

  //moving the girl 
  if(keyIsDown(UP_ARROW && girlSprite.position.y>=571)){
      girlSprite.position.y = girlSprite.position.y - 2;
  }     
 else if(keyIsDown(DOWN_ARROW && girlSprite.position.x>=685)){
    girlSprite.position.y = girlSprite.position.y + 2;
 }
  else if(keyIsDown(RIGHT_ARROW)){
  girlSprite.position.x = girlSprite.position.x + 2;
  }
  else if (keyIsDown(LEFT_ARROW)){
    girlSprite.position.x = girlSprite.position.x - 2;
  }
  console.log(girlSprite.position.y);
  console.log(girlSprite.position.x);
  
  drawSprites();
}

