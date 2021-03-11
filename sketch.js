var bg , bgImg;
var rocket , rocketImg;
var climber , climberImg;
var star , starImg;
var star_Group , climber_Group;
var magicSound ;
var meteor , meteorImg;
var meteor_Group;

function preload(){
bgImg = loadImage("images/planet.jpg");
rocketImg = loadImage("images/rocket.png");
climberImg = loadImage("images/climber.jpg");
starImg = loadImage("images/image.png");
magicSound = loadSound("starSound.mp3");
meteorImg = loadImage("images/meteor.png");
}

function setup() {
  createCanvas(1200,600);

  //console.log()
  bg = createSprite(600,300,1000,600);
  bg.addImage(bgImg);
  bgImg.resize(windowWidth, windowHeight)
 bg.scale = 0.9
 bg.velocityX = -5

 rocket = createSprite(80,500);
 rocket.addImage(rocketImg);
 rocket.scale = 0.4;

 star_Group = createGroup();
 climber_Group = createGroup();
 meteor_Group = createGroup();
 }

function draw() {
  background(255,255,255);  

  if(bg.x < 400){
    bg.x = 600
  }

  if(keyDown("left_arrow")){
    rocket.x = rocket.x-5;
  }
  
  if(keyDown("right_arrow")){
    rocket.x = rocket.x + 5;
  }

  if(keyDown("up_arrow")){
    rocket.y = rocket.y -5;
  }

  if(keyDown("down_arrow")){
    rocket.y = rocket.y + 5;
  }

  if(frameCount % 150 === 0){
    climb();
    bubble_star();
  }

  if(frameCount % 160 === 0){
    meteor_fall();
  }

  if(meteor_Group.isTouching(rocket)){
    rocket.destroy();
star_Group.setVelocityXEach(0);
climber_Group.setVelocityXEach(0);
bg.velocityX = 0;
meteor_Group.setVelocityYEach(0);
  }

  if(star_Group.isTouching(rocket)){
  star.destroy();
  //magicSound.loop();
  }

  drawSprites();
}

function climb(){
  climber = createSprite(600,400,100,100);
  climber.addImage(climberImg);
  climber.y = Math.round(random(200,600));
  climber.scale = 0.5;
  climber.velocityX = -3;

  climber_Group.add(climber);
}

function bubble_star(){
  star = createSprite(600,150,100,100);
   star.addImage(starImg);
   star.y = climber.y-60 ;
   star.velocityX = -3;
   star.scale = 0.2

   star_Group.add(star);
}

function meteor_fall(){
  meteor = createSprite(0,5);
  meteor.addImage(meteorImg);
  meteor.x = Math.round(random(300,600));
  meteor.scale = 0.3;
  meteor.velocityY = 4;

  meteor_Group.add(meteor);
}

