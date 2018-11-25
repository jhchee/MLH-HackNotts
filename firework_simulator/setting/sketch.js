var timeSlice = [];
var newFirework = {};
var time = 0;
var camera;
var randomised = false;
var currentIndex = 0;
var editMode = false;

function randomiseFirework() {
  randomised = true;
  previewJson();
}

function update(isSlide) {
  var data = { time: 0, pos: { x: 0, y: 400, z: 0 } };
  if (isSlide) {
    data.pos.x = document.getElementById("x-slide").value;
    data.pos.y = 400 - document.getElementById("y-slide").value;
    data.pos.z = document.getElementById("z-slide").value;
    data.time = document.getElementById("time-slide").value;
  } else {
    data.pos.x = document.getElementById("x-index").value;
    data.pos.y = 400 - document.getElementById("y-index").value;
    data.pos.z = document.getElementById("z-index").value;
    data.time = document.getElementById("time-slice").value;
  }

  document.getElementById("x-slide").value = data.pos.x;
  document.getElementById("y-slide").value = 400 - data.pos.y;
  document.getElementById("z-slide").value = data.pos.z;
  document.getElementById("time-slide").value = data.time;

  document.getElementById("x-index").value = data.pos.x;
  document.getElementById("y-index").value = 400 - data.pos.y;
  document.getElementById("z-index").value = data.pos.z;
  document.getElementById("time-slice").value = data.time;
  time = data.time;

  if (!isEmpty(newFirework)) {
    newFirework.pos.x = data.pos.x;
    newFirework.pos.y = data.pos.y;
    newFirework.pos.z = data.pos.z;
  }

  // create drop down list

  var innerString = "";
  for (var j = 0; j < timeSlice[time].length; j++) {
    innerString =
      innerString +
      '<option indexId="' +
      j.toString() +
      '" > Fireworks ' +
      j.toString() +
      "</opion></br>";
  }
  console.log(document.getElementById("drop-down"));
  document.getElementById("drop-down").innerHTML = innerString;
}

function addButton() {
  document.getElementById("x-slide").value = 0;
  document.getElementById("y-slide").value = 0;
  document.getElementById("z-slide").value = 0;

  document.getElementById("x-index").value = 0;
  document.getElementById("y-index").value = 0;
  document.getElementById("z-index").value = 0;

  if (editMode) {
    // console.log(currentIndex);
    timeSlice[time].splice(currentIndex, 0, newFirework);
    // console.log(timeSlice[time].length);
    editMode = false;
  }
  newFirework = { pos: { x: 0, y: 400, z: 0 } };
  timeSlice[time].push(newFirework);

  update(true);
}

function editFirework() {
  if (editMode) {
    timeSlice[time].splice(currentIndex, 0, newFirework);
  }
  currentIndex = document.getElementById("drop-down").selectedIndex;
  newFirework = timeSlice[time].splice(currentIndex, 1)[0];
  console.log(newFirework);
  editMode = true;
}

function loadButton() {
  if (!isEmpty(JSON.parse(localStorage.getItem("fireworks")))) {
    timeSlice = JSON.parse(localStorage.getItem("fireworks"));
  }
}

function previewJson() {
  let data = JSON.stringify(timeSlice);

  localStorage.setItem("fireworks", data);
  window.location = "../firework_visual/display.html?randomised=" + randomised;
}

function resetButton() {
  camera.reset();
}

function setup() {
  var i = 0;
  for (i = 0; i <= 30; i++) {
    timeSlice.push([]);
  }

  createCanvas(windowWidth - 20, windowHeight - 20, WEBGL);

  colorMode(HSB);
  stroke(255);
  strokeWeight(4);
  background(0);
  camera = createEasyCam({ distance: 1000 });
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

  display();
}

function display() {
  var i = 0;

  for (var j = 0; j < timeSlice[time].length; j++) {
    push();
    translate(
      timeSlice[time][j].pos.x,
      timeSlice[time][j].pos.y,
      timeSlice[time][j].pos.z
    );
    sphere(10);
    pop();
  }

  if (!isEmpty(newFirework)) {
    push();
    fill(255, 0, 0);
    noStroke();
    translate(newFirework.pos.x, newFirework.pos.y, newFirework.pos.z);
    sphere(10);
    pop();
  }
}

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}
