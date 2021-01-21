
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score=0
var ground
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
   backImage=loadImage("jungle.jpg")
/*player_running =
  /*loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png",
"Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png",
"Monkey_09.png","Monkey_10.png")*/

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400
 monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
  
  
  ground=createSprite(300,400,1200,10)
  ground.velocityX=-4
  ground.x=ground.width/2
console.log(ground.x)
  bananaGroup=new Group()
  obstacleGroup= new Group()
}


function draw() {
background(backImage)
  console.log(monkey.y)
  spawnbanana()
  if(keyDown("space")&& monkey.y > 364) {
        monkey.velocityY = -15;
  }
  if (ground.x<0){
    ground.x=ground.width/2
  }
  
  monkey.velocityY = monkey.velocityY + 0.5
  
   monkey.collide(ground);
  
 if(monkey.isTouching(bananaGroup)){
   score++
   bananaGroup.destroyEach()
 }

stroke("white")
textSize(20)
fill("black")
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time: "+survivalTime,100,50)
  
  
  Spawnobstacle()
  drawSprites()
  /*stroke("white")
textSize(20)
fill("red")
text("score:"+score,200,80)*/

}
function spawnbanana(){
//write code here to spawn the banana
  if (frameCount % 200 ===0) {
    var banana = createSprite(600,120,40,10);
    banana.y=Math.round(random(120,200))
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    banana.lifetime = 200;
    banana.scale= 0.1
    bananaGroup.add(banana)
  }
  
  
}
function Spawnobstacle(){
  if (frameCount % 300=== 0) {
   obstacle = createSprite (600,360)
    obstacle.addImage(obstacleImage)
    obstacle.lifetime = 200;
    obstacle.velocityX=-3
    obstacle.scale=0.2
    obstacleGroup.add(obstacle)
  }
}


