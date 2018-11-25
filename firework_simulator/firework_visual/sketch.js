var fireworks = [];
var gravity;
var initial = Date.now();
var inputJson = JSON.parse(localStorage.getItem("fireworks"));
var i = 0;
var j = 0;
var urlParams = new URLSearchParams(window.location.search);
var randomFirework = urlParams.get("randomised");

function randomiseFirework() {
  randomFirework = true;
}

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20, WEBGL);
  colorMode(HSB);
  gravity = createVector(0, 0.2, 0);
  stroke(255);
  strokeWeight(4);
  background(0);
  createEasyCam({ distance: 1200 });
}

function draw() {
  var time = Math.round((Date.now() - initial) / 1000);

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
  if (randomFirework) {
    if (random(1) < 0.05) {
      fireworks.push(
        new Firework(random(-400, 400), random(-400, 400), random(-400, 400))
      );
    }
  } else if (i <= 30 && i <= time) {
    document.getElementById("timeslice-counter").innerHTML = i;
    for (j = 0; j < inputJson[i].length; j++) {
      fireworks.push(
        new Firework(
          inputJson[i][j].pos.x,
          inputJson[i][j].pos.y,
          inputJson[i][j].pos.z
        )
      );
    }
    i++;
  }

  for (var k = fireworks.length - 1; k >= 0; k--) {
    fireworks[k].update();
    fireworks[k].show();

    if (fireworks[k].done()) {
      fireworks.splice(k, 1);
    }
  }
}
