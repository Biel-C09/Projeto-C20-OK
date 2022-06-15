const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


let engine;
let world;
var ball;
var ground;
var wall;
var angle=60;
var poly;


function setup() {
  
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution : 0.97,
    frictionAir : 0.01
  }

  var ground_options = {
    isStatic : true
  }

  

  ball = Bodies.circle(270,10,30,ball_options);
  World.add(world,ball);
  
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  wall = Bodies.rectangle(350,100,150,20,ground_options);
  World.add(world,wall);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background ("black");
 Engine.update(engine);

 ellipse(ball.position.x,ball.position.y,30);
 rect(wall.position.x,wall.position.y,150,20)
 rect(ground.position.x,ground.position.y,400,20);
 
}

