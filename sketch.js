var white1, white2, white3, white4, white5, white6, white7;
var black1, black2, black3, black4, black5, black6;
var rand;
var notes = [];
var check = [];
var gameStates = "start";

function setup(){
  createCanvas(600, 400);
  white1 = createSprite(250, 200, 25, 80);
  white1.shapeColor = "white";
  white2 = createSprite(300, 200, 25, 80);
  white2.shapeColor = "white";
  white3 = createSprite(350, 200, 25, 80);
  white3.shapeColor = "white";
  white4 = createSprite(400, 200, 25, 80);
  white4.shapeColor = "white";
  white5 = createSprite(450, 200, 25, 80);
  white5.shapeColor = "white";
  white6 = createSprite(500, 200, 25, 80);
  white6.shapeColor="white";
  white7 = createSprite(550, 200, 25, 80);
  white7.shapeColor="white";

  black1 = createSprite(275, 185, 20, 70);
  black1.shapeColor="black";
  black2 = createSprite(325, 185, 20, 70);
  black2.shapeColor="black";
  black3 = createSprite(375, 185, 20, 70);
  black3.shapeColor="black";
  black4 = createSprite(425, 185, 20, 70);
  black4.shapeColor="black";
  black5 = createSprite(475, 185, 20, 70);
  black5.shapeColor="black";
  black6 = createSprite(525, 185, 20, 70);
  black6.shapeColor = "black";
}

function draw(){
background("teal");

drawSprites();
}