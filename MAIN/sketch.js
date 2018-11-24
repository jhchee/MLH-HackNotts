var fireworks = [];
var gravity;
var initial = Date.now();

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB);
  gravity = createVector(0, 0.2, 0);
  stroke(255);
  strokeWeight(4);
  background(0);
  createEasyCam({ distance: 400 });
}

function draw() {
  var time = Math.round((Date.now() - initial)/1000);
  
  colorMode(RGB);
  background(0, 0, 0, 255);

  // plane
  push();
  noStroke();
  fill(100);
  translate(0, 400, 0);
  rotateX(0.5 * PI);
  plane(800, 800);
  pop();

  // platform of lauching firework
  push();
  noStroke();
  fill(255);
  translate(0, 400, 0);
  rotateX(0.5 * PI);
  plane(40, 40);
  pop();

  // box of restriction
  push();
  translate(0, 0, 0);
  noFill();
  stroke(255);
  strokeWeight(1);
  box(800, 800, 800);
  pop();

  //input add firework to display

  // if(inputJson.length>0){
  //   if(inputJson[0].launch_time<=time){
  //     fireworks.push(new Firework(inputJson[0].pos.x,inputJson[0].pos.y,inputJson[0].pos.z));
  //     delete inputJson[0];  
  //   }
  // }

  if (random(1) < 0.05) {
    fireworks.push(new Firework());
  }

  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();

    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
