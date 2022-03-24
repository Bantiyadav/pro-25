const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var engine,world,paperObject,groundObject,dustbinObject;

function setup() {
	createCanvas(1200, 400);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;


    paperObject = new paper(40,40,20);
      dustbinObject = new dustbin(1000,450);
    groundObject = new ground(600,400);

	Engine.run(engine);
  
}


function draw() {
	
	rectMode(CENTER);
	background(100);

paperObject.display();  
dustbinObject.display();
groundObject.display();
	

}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.Body,paperObject.body.position,{x:85,y:-85});
    
  	}
}
