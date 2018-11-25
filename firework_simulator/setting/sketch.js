var timeSlice = [];

function updateX(val) {
  document.getElementById("x-index").value = val;
}
function updateY(val) {
  document.getElementById("y-index").value = val;
}
function updateZ(val) {
  document.getElementById("z-index").value = val;
}
function updateTimeSlice(val) {
  document.getElementById("time-slice").value = val;
}

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20, WEBGL);
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
}

function display(time) {
  var i = 0;
  var j = 0;

  for (i = 0; i < timeSlice.length; i++) {
    if (timeSlice[i].launched_time == time) {
      var firework = timeSlice[i].firework;
      for (j = 0; j < timeSlice[i].firework.length; j++) {
        push();
        translate(firework[j].pos.x, firework[j].pos.y, firework[j].pos.z);
        sphere(1);
        pop();
      }
      break;
    }
  }
}
