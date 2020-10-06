var car,wall;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  speed = random(55,90);
  weight = random (400,1500);
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  wall.color(80,80,80);
  car.velocityX= speed;
  deformation = 0.5*weight*speed*speed/22500;
 if( car.deformation<100){
   car.color("green");
  car.code(0,255,0);
 }
 if( car.deformation>180){
  car.color("gred");
 car.code(255,0,0);
}
}

function draw() {
  background(255,255,255);  
  drawSprites();
}