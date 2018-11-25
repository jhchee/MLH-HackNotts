var timeSlice = [];
var newFirework= {}
var time = 0;

function updateX(val) {
  document.getElementById("x-index").value = val;
  if(!isEmpty(newFirework)){
    newFirework.pos.x = val ;
  }
}
function updateY(val) {
  document.getElementById("y-index").value = val;
  if(!isEmpty(newFirework)){
    newFirework.pos.y = 400-val ;
  }
}
function updateZ(val) {
  document.getElementById("z-index").value = val;
  if(!isEmpty(newFirework)){
    
        newFirework.pos.z = val ;  
    
  }
}

function updateTime(val){
  document.getElementById("timeSlice").value = val;
  time = val ;
}

function addButton(){
  newFirework = {"color": "yellow","pos": {"x": 0, "y": 400, "z": 0}}

};

function saveButton(){
  timeSlice[time].push(newFirework);
  newFirework = {};
}


function setup() {
  var i = 0;
  for(i=0;i<30;i++){
    timeSlice.push([]);

  }


  createCanvas(windowWidth/2, windowHeight/2, WEBGL);
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

  display();

}


function display(){

  var i = 0;
  var j = 0;

  
    
  
  for (j = 0; j < timeSlice[time].length; j++) {
    push();
    translate(timeSlice[time][j].pos.x, timeSlice[time][j].pos.y, timeSlice[time][j].pos.z);
    sphere(10);
    pop();
  }

  if(!isEmpty(newFirework)){
    push();
          translate(newFirework.pos.x,newFirework.pos.y,newFirework.pos.z);
          sphere(10);
    pop();
  }

}


function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

