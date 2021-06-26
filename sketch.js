var backgroundImg;
var girl,girlSprite;
var zombie,zombieSprite,zombieGroup;
var gameState = "PLAY";
var score;
var gameOver,gameOverSprite;
    


function preload(){
  backgroundImg = loadImage("images/background.png");
  girl= loadAnimation("images/girl1.png","images/girl2.png");
  zombie = loadAnimation("images/zombie1.png","images/zombie2.png");
  gameOver = loadImage("images/gameover.png");
  
  

}


function setup() {
  createCanvas(windowWidth,windowHeight);

  girlSprite =createSprite(width/10,height-200);
  girlSprite.addAnimation("player",girl);
  girlSprite.scale = 0.8;

  zombieGroup = new Group();

  gameOverSprite =createSprite(width/2,height/2);
  gameOverSprite.addImage(gameOver);
  gameOverSprite.visible = false;
  gameOverSprite.scale = 0.5;

}

function draw() {
  background(backgroundImg);
  text("score : "+score,width-200,50);


  //spawning the zombie
  
  if (frameCount % 120 === 0) {
    zombieSprite = createSprite(width,height-100);
    zombieSprite.position.y = Math.round(random(585,671));
    zombieSprite.scale = 0.8;
   zombieSprite.addAnimation("computer",zombie);
   
    zombieSprite.setVelocity (-3,0);
  
     //add each cloud to the group
     zombieGroup.add(zombieSprite);

   }

   if (gameState==="PLAY"){
    score = score + Math.round(frameCount/60);
    console.log(score);

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

  //zombieSprite.setVelocity(-2,0);


   if(girlSprite.overlap(zombieGroup)){
    gameState = "END";
    }

  }
   
      if (gameState === "END") {
      gameOverSprite.visible = true;
      zombieSprite.remove();
      girlSprite.remove();

     
     }


     drawSprites();
  
  

}
