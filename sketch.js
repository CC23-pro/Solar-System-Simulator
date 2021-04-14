var canvas={x:400,y:400};
var u=1;
var spaceImg;
var mercuryImg, venusImg, earthImg, marsImg, jupiterImg, saturnImg, uranusImg, neptuneImg;
function preload(){
  spaceImg=loadImage("Images/jpg");
}
function setup() {
  createCanvas(canvas.x, canvas.y);
}

function draw() {
  background(spaceImg);
  translate(canvas.x, canvas.y);
  push();
  
  pop();
}

function body(img, distance, size, rotationSpeed){
  image(img, distance, size);
  rotate(u+=rotationSpeed);
}