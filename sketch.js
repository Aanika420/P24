
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane = new Plane(400,650,800,100);
	hammer = new Hammer(100,200);
	stone = new Stone(100,600,100,100);
	rubber = new Rubber(500,600,25);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(250);
  
  plane.display();
  hammer.display();
  stone.display();
  rubber.display();

  drawSprites();
 
}



