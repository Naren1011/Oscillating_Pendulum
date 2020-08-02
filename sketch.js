const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var circle, log;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  log = new Stand(200,100,150,15);
  circle = new Bob(200,250,50);

  var options ={
    bodyA: circle.body,
    bodyB: log.body,
    stiffness: 0.05,
    lenght: 10
  }
  var chain = Constraint.create(options);
  World.add(world, chain);

}

function draw() {
  background("white");
  Engine.update(engine);

  circle.display();
  log.display();

  strokeWeight(3);
  fill("white");
  line(circle.body.position.x, circle.body.position.y, log.body.position.x, log.body.position.y);

  if(keyCode === 32){
    circle.fly();
  }
  if(keyCode === 13){
    circle.stop();
  }
  fill("black")
  text("Press Space and use your mouse to start to oscillation", 80, 20);
  text("Press Enter to stop the oscillation", 125,50);
 
  /* rectMode(CENTER);
  strokeWeight(4);
  stroke("brown");
  fill("white");
  var stand = rect(200, 100, 150, 15);
  

  noStroke();
  fill(255, 0, 0, 175);
  var circle = ellipse(200,250,50,50);
  strokeWeight(3);
  fill("white");
  var chain = rect(200,149,20,120);
  var options ={
    bodyA: stand,
    bodyB: circle,
    stiffness: 0.5,
    length: 10
  }
  var chain = Constraint.create(options);
  World.add(world, chain);
  
  
 var chain = line(circle.x, circle.y, stand.x, stand.y);*/
 
}
