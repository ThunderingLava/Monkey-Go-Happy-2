var monkey, score
var fruit, jungle
var monkeyImg, jungleImg
var stoneImg, fruitImg
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
  
  monkeyImg = loadAnimation("Monkey_01.png", "Monkey_02.png","Monkey_03.png","Monkey_04.png",
"Monkey_05.png","Monkey_06.png","Monkey_07.png", "Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  stoneImg = loadImage("stone.png")
  fruitImg = loadImage("banana.png")
  jungleImg = loadImage("jungle.jpg")
  
  
}

function setup() {
  createCanvas(600, 400);

  monkey = createSprite(150, 330, 20, 20);
  jungle = createSprite(200,200,600,400);
  ground = createSprite(300, 390, 600, 20);
  ground.visible = false
  
  fruitGroup = new Group();
  obsGroup = new Group();
  
  monkey.addAnimation("running", monkeyImg)
  monkey.scale = 0.15
  
  jungle.addImage("scene", jungleImg)
  jungle.depth = 0.5
  jungle.scale = 1.2
    jungle.velocityX= -10
  
  score = 0;
}

function draw() {
  background(220);
  
if(jungle.x <= 0){
  
  jungle.x = jungle.width/2
}
 

  
  
monkey.collide(ground);
  
  if(monkey.isTouching(fruitGroup)){
    
    score = score + 3;
       fruitGroup.destroyEach();
    
    switch(score){
        
      case 10: monkey.scale = 0.18
        break;
      case 20: monkey.scale = 0.20
        break;
      case 30: monkey.scale = 0.22
        break;
      case 40: monkey.scale = 0.24
        break;
      case 50: monkey.scale = 0.26
        break;
        default:break; 
    }
  }
  
  
  if(monkey.isTouching(obsGroup)){
    
    monkey.scale = 0.15;
  }

  //________________________________//
 
  if(gameState === PLAY){
    //Ground//
  ground.velocityX = - 7;
  if (ground.x < 0){
    ground.x = ground.width /2;
  } 
  
  
   // console.log(monkey.y)
  
    
     //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 290.09 ){
      monkey.velocityY = -15 ;
      
    }
  
    //gravity
    monkey.velocityY =  monkey.velocityY + 0.8;

    
    }
  
    
  /*
    
    
   else if(gameState === END) {
    //set velcity of each game object to 0
    ground.velocityX = 0;
    monkey.velocityY = 0;
    jungle.velocityX = 0;
  
     
    //place gameOver and restart icon on the screen
    var gameOver = createSprite(200,100);
    var restart = createSprite(200,200);
    
  
  }
  */
  
  spawnfruit();
  spawnObs();
  
  drawSprites();
  
  fill("black");
  textSize(20);
   text("Score:" + score,500,50);
  
}     



function spawnfruit(){
 
 
  if (frameCount % 60 === 0){
  
  var banana = createSprite(600, 120, 20, 20);
  banana.velocityX = -10; 
    banana.addImage(fruitImg);
    banana.scale =0.1
    
    banana.y = random(120,200)
    fruitGroup.add(banana);
    
  }
  
  
}




function spawnObs(){
  
  
  if (frameCount % 100 === 0){
  
  var stone = createSprite(600, 360, 20, 20);
  stone.velocityX = -10; 
    stone.addImage(stoneImg);
    stone.scale =0.3
 
    stone.setCollider("circle",0,0,140);
    
   obsGroup.add(stone);
    
  }
  
  
}
