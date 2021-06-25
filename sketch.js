var backgroundImg;
var girl,girlSprite;
var zombie,zombieSprite,zombieGroup;


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
  if(keyIsDown(UP_ARROW) && girlSprite.position.y>=585){
      girlSprite.position.y = girlSprite.position.y - 2;
  }     
 else if(keyIsDown(DOWN_ARROW) && girlSprite.position.y<=671){
    girlSprite.position.y = girlSprite.position.y + 2;
 }
  else if(keyIsDown(RIGHT_ARROW)){
  girlSprite.position.x = girlSprite.position.x + 2;
  }
  else if (keyIsDown(LEFT_ARROW)){
    girlSprite.position.x = girlSprite.position.x - 2;
  }
  console.log(girlSprite.position.y);

  zombieSprite.setVelocity(-2,0);
 
  function spawnZombies() {
    //write code here to spawn the zombies
    if (frameCount % 60 === 4) {
      zombieSprite.y = Math.round(random(80,120));
      zombieSprite.velocityX = -3;
      
       //assign lifetime to the variable
       zombieSprite.lifetime = 100;
      
       //adjust the depth
       zombieSprite.depth = girlSprite.depth;
       girlSprite.depth = girlSprite.depth + 1;

       //add each cloud to the group
       zombieGroup.add(zombieSprite);

        }
     }
     drawSprites();
  }