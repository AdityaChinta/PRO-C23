var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//var box1;
var box2;
var box3;
//var person1;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);
	//box1=createSprite(900,500,150,20);
	box2=createSprite(1000,584,25,150);
	box2.shapeColor="red";

	box3=createSprite(815,584,25,150);
	box3.shapeColor="red";


	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	

	//person=createSprite(850,476,20,20);

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.0, isStatic:true});
	World.add(world, packageBody);
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 Engine.run(engine);
	
  
}


function draw() {
	
  rectMode(CENTER);
  
  background(80,80,80);
  //box1.display();
  box2.display();
  box3.display();
  if (packageSprite.x>200) {
	packageSprite.display(true);
  } else {
	packageSprite.display(false);
  }
  //if(packageSprite.y<=210){
	 // packageSprite.x!=helicopterSprite.x;
	  
  //}
  

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  if(keyCode===32){
	helicopterSprite.x=helicopterSprite.x+10;
	packageSprite.x=helicopterSprite.x;
  }
 
  if (keyCode === DOWN_ARROW) {
	packageSprite.x=helicopterSprite.x;
	Matter.Body.setStatic(packageBody,false);
  }

  console.log(helicopterSprite.y);
  console.log(packageSprite.y);
  
  drawSprites();
 
}

//function keyPressed() {

 

//}



