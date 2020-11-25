function setup() {
  createCanvas(800, 400);
  fixdrect = createSprite(200, 200, 50, 80);
  movingrect = createSprite(400, 200, 80, 30);
  fixdrect.shapeColor = "green";
  movingrect.shapeColor = "green";
  fixdrect.debug = true;
  movingrect.debug = true;
}

function draw() {
  background(rgb(139, 69, 19));
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY
  console.log(movingrect.x - fixdrect.x);
  if ((movingrect.x - fixdrect.x) < (fixdrect.width / 2 + movingrect.width / 2) &&
    (fixdrect.x - movingrect.x) < (fixdrect.width / 2 - movingrect.width / 2) &&
    (movingrect.y - fixdrect.y) < (fixdrect.height / 2 + movingrect.height / 2) &&
    (fixdrect.y - movingrect.y) < (fixdrect.height / 2 - movingrect.height / 2)) {
    fixdrect.shapeColor = "red";
    movingrect.shapeColor = "red";
  } else {
    fixdrect.shapeColor = "green";
    movingrect.shapeColor = "green";
  }
  drawSprites();
}