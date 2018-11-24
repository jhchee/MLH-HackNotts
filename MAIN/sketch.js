// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/CKeyIbT3vXI

var fireworks = [];
var gravity;

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
  colorMode(RGB);
  background(0, 0, 0, 255);
  push();
  translate(0, 0, 0);
  noFill();
  stroke(255);
  box(800, 800, 800);
  pop();
  if (random(1) < 0.03) {
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
