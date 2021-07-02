const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);

  var ball_options = {
    restitution: 0.8
  }

	bob1 = Bodies.circle(350,10,10,ball_options);
  World.add(world,bob1);
  bob2 = Bodies.circle(400,10,10,ball_options);
  World.add(world,bob2);
  bob3 = Bodies.circle(450,10,10,ball_options);
  World.add(world,bob3);
  bob4 = Bodies.circle(500,10,10,ball_options);
  World.add(world,bob4);
  bob5 = Bodies.circle(550,10,10,ball_options);
  World.add(world,bob5);
  ellipse(bob1.position.x,bob1.position.y,10);

  rope1= new Rope(bob1,roof,-80,0);
  rope2= new Rope(bob2,roof,-80,0);
  rope3= new Rope(bob3,roof,-80,0);
  rope4= new Rope(bob4,roof,-80,0);
  rope5= new Rope(bob5,roof,-80,0);

  
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  

  //call display() to show ropes here
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();


 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
