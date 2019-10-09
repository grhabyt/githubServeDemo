var ypos1,ypos2,ypos3,xpos1,xpos2,xpos3,speed1,speed2,speed3;
var balloon1,balloon2,balloon3;
var counter;

function preload(){
  balloon1 = loadImage("assets/1.png");
  balloon2 = loadImage("assets/2.png");
  balloon3 = loadImage("assets/3.png");
}
function setup() {
  createCanvas(1080,1920);
  xpos1 = random(width);
    ypos1= random(1920,2100);
    speed1 = random (10,20);

    xpos2 = random(width);
    ypos2= random(1920,2100);
    speed2 = random (10,20);

    xpos3 = random(width);
    ypos3= random(1920,2100);
    speed3 = random (10,20);

    counter = 0; //this counts the number of resets

}

function draw() {
  background(200);
  if(counter<3){
    image(balloon1,xpos1,ypos1);
    ypos1= ypos1-speed1;
    if(ypos1 <= 0)
    {
      speed1 = 0;
    }
    image(balloon2,xpos2,ypos2);
    ypos2= ypos2-speed2;
    if(ypos2 <= 0)
    {
      speed2 = 0;
    }
    image(balloon3,xpos3,ypos3);
    ypos3= ypos3-speed3;
    if(ypos3 <= 0)
    {
      speed3 = 0;
    }
  }else{
    background(0);
    fill(255);
    textSize(128);
    text("You", 450, 900);
    text("Win!", 440, 1060);

  }
}

function mousePressed(){
  if(mouseIsPressed)
  {
    xpos1 = random(width);
    ypos1= random(1920,2100);
    speed1 = random (10,20);

    xpos2 = random(width);
    ypos2= random(1920,2100);
    speed2 = random (10,20);

    xpos3 = random(width);
    ypos3= random(1920,2100);
    speed3 = random (10,20);

    counter++;
  }
  
}