var x = 0;
var changeDirection;
let bg;

//Under Sketch do Add Folder (name = images)
//Upload image (god.png, PythSoc.png) to Folder

function setup() {
   bg = loadImage('images/myOffice.jpg');
  createCanvas(645,645);
  
  changeDirection = false;
  
}

function draw() {
  background(bg);
 fill (94,90,128)
  ellipse(x, 100, 100);
  if (x > width) {
    changeDirection = true;
  }
  //if the circle passes the right side, change the direction
  //effects of direction change happen below
  else if (x <= 0) {
    changeDirection = false;
  }
  //if the circle passes the left side (or becomes equal to 0)
  //changes the direction, effects are in the next if statement below

  if (x >= 0 && changeDirection == false) {
    x = x + 1;
  }
  //if x is greater than OR equal to 0, move right
  else if (changeDirection == true) {
    x = x - 1;
  }
  //once the switch is changed, x must have been bigger than width
  //move circle back to the left

  fill(0, 0, 0);
  strokeWeight(3);

  fill(94, 90, 128);
  circle(300, 200, 100);

  fill(94, 90, 128);
  circle(225, 200, 100);

  fill(94, 90, 128);
  circle(280, 125, 100);

  fill(94, 90, 128);
  circle(275, 125, 100);

  fill(94, 90, 128);
  circle(240, 100, 111);

  fill(94, 90, 128);
  circle(195, 170, 70);

  fill(94, 90, 128);
  circle(195, 245, 80);

  fill(94, 90, 128);
  circle(265, 150, 90);

  fill(94, 90, 128);
  circle(170, 245, 50);

  fill(94, 90, 128);
  circle(265, 245, 60);

  fill(94, 90, 128);
  circle(170, 100, 80);

  fill(94, 90, 128);
  circle(170, 150, 110);

  fill(94, 90, 128);
  circle(125, 222, 99);

  fill(94, 90, 128);
  circle(199, 100, 80);

  fill(94, 90, 128);
  circle(120, 190, 80);

  fill(78, 53, 36);
  translate(width / 12, height / 2);
  rotate(PI / -5.0);
  rect(130, -100, 125, 20);

  fill(34, 139, 34);
  ellipse(200, -50, 20, 80);

  fill(34, 139, 34);
  ellipse(180, -130, 20, 80);

  stroke(255, 255, 100);

  textSize(62);
  text("kate", 10, 30);
  fill(0, 102, 153);
  text("kate", 10, 60);
  fill(0, 102, 153, 51);
  text("kate", 10, 90);
}
