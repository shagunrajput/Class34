const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var gamestate="onsling";
var color;
var rope;


function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(750,height-100,1500,20);
    color="yellow";
    box1=new Box(1000,50,color);
    box2=new Box(1000,50,color);
    box3=new Box(1000,50,color);
    box4=new Box(1000,50,color);
    box5=new Box(1000,50,color);
    box6=new Box(1000,50,color);

    color="red";
    box7=new Box(900,50,color);
    box8=new Box(900,50,color);
    box9=new Box(900,50,color);
    box10=new Box(900,50,color);
    box11=new Box(900,50,color);
    box12=new Box(900,50,color);

    color="purple";
    box13=new Box(800,50,color);
    box14=new Box(800,50,color);
    box15=new Box(800,50,color);
    box16=new Box(800,50,color);
    box17=new Box(800,50,color);
    box18=new Box(800,50,color);

    color="DARKgreen";
    ball=new Ball(600,300,30,color);

    rope=new Rope (ball.body,{x:600,y:100});

    

}
function draw(){
    background("SKYblue");
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

   ball.display();
   rope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-80})
}
