const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rubberband, poly;
var ground, alsoground;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25;

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(1000, 150, 200, 10);
    alsoground = new Ground(700, 305, 250, 10);

    poly = new Poly(200, 200);

    rubberband = new Rope(poly.body, {x:300, y:200});
   //Stack 1
    //Level 1
    box1 = new Box4(610, 280);
    box2 = new Box4(640, 280);
    box3 = new Box4(670, 280);
    box4 = new Box4(700, 280);
    box5 = new Box4(730, 280);
    box6 = new Box4(760, 280);
    box7 = new Box4(790, 280);

    //Level 2
    box8 = new Box3(640, 240);
    box9 = new Box3(670, 240);
    box10 = new Box3(700, 240);
    box11 = new Box3(730, 240);
    box12 = new Box3(760, 240);

    //Level 3
    box13 = new Box2(670, 200);
    box14 = new Box2(700, 200);
    box15 = new Box2(730, 200);

    //Level 4
    box16 = new Box1(700, 160);

   //Stack 2
    //Level 1
    box17 = new Box4(930, 120);
    box18 = new Box4(960, 120);
    box19 = new Box4(990, 120);
    box20 = new Box4(1020, 120);
    box21 = new Box4(1050, 120);

    //Level 2
    box22 = new Box2(960, 80);
    box23 = new Box2(990, 80);
    box24 = new Box2(1020, 80);

    //Level 3
    box25 = new Box3(990, 40);
}

function draw() {
    background(0);
    Engine.update(engine);

    ground.display();
    alsoground.display();
    poly.display();
    rubberband.display();

  //Stack 1
    //Level 1
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    //Level 2
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    //Level 3
    box13.display();
    box14.display();
    box15.display();

    //Level 4
    box16.display();

  //Stack 2
    //Level 1
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();

    //Level 2
    box22.display();
    box23.display();
    box24.display();

    //Level 3
    box25.display();
}

function mouseDragged() {
  poly.body.position.x = mouseX;
  poly.body.position.y = mouseY;
}

function mouseReleased() {
  rubberband.fly()
}

function keyPressed() {
  if (keyCode = 32) {
    rubberband.attach(poly.body);
  }
}