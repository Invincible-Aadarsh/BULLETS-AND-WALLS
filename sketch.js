var bullet, wall;
var thickness,speed, weight;

function setup() {
  createCanvas(1600,400);
  thickness = random(23,83);
  speed = random(223,321);
  weight = random(30,52);
bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
  
}

function draw() {
  background(255,255,255);  

  if(wall.x-bullet.x < bullet.width/2 + wall.width/2){
   bullet.velocityX = 0;
   var D = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);

   if(D<10){
     bullet.shapeColor = "green";
   }
  
   else{
     bullet.shapeColor = "red";
   }
  }
  drawSprites();
}