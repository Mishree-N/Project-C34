//constants
const Engine = Matter.Engine ;
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint=Matter.Constraint;

//variables
var myEngine, myWorld ; 
var backgroundImg;
var hero, ground, flyRope, monster;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21;

function preload() {

  //load background image
  backgroundImg=loadImage("images/GamingBackground.png");

}

function setup() {
  //canvas, engine & world
  createCanvas(2000, 800);
  myEngine = Engine.create ();
  myWorld = myEngine.world;

  //create ground
  ground=new Ground(0,550, 2100,10);

  //create hero
  hero=new Hero(200,250);

  //create flyRope
  flyRope=new Fly (hero.body, {x:200 , y: 150 });

  //create blocks
  b1=new Block(500,520);
  b2=new Block(500,470);
  b3=new Block(500,420);
  b4=new Block(500,370);
  b5=new Block(500,320);
  b6=new Block(500,270);
  b7=new Block(500,220);
  b8=new Block(600,520);
  b9=new Block(600,470);
  b10=new Block(600,420);
  b11=new Block(600,370);
  b12=new Block(600,320);
  b13=new Block(600,270);
  b14=new Block(600,220);
  b15=new Block(700,520);
  b16=new Block(700,470);
  b17=new Block(700,450);
  b18=new Block(700,370);
  b19=new Block(700,320);
  b20=new Block(700,270);
  b21=new Block(700,220);

  //create monster
  monster=new Monster(900,540);

}

function draw() {
  //background image
  background(backgroundImg);
  //run engine
  Engine.update (myEngine);

  //display everything
  hero.display();
  ground.display();
  flyRope.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  monster.display();

}

function mouseDragged(){

  //let mouse drag hero
  Matter.Body.setPosition(hero.body,{x : mouseX, y: mouseY});

}

