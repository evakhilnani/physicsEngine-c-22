const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  myEngine=Engine.create();
  myWorld=myEngine.world;

  var groundOptions={
    isStatic:true
  }
  ground=Bodies.rectangle(200,390,200,20,groundOptions);
  World.add(myWorld,ground);
console.log(ground.position.x);

var ballOptions={
  restitution:1.0
}

ball=Bodies.circle(200,100,20,ballOptions);
World.add(myWorld,ball);
  
}

function draw() { 
  background(0);  
  Engine.update(myEngine);
  rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);

ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}