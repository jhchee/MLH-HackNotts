var timeSlice = [];
var newFirework= {}
function setup() {
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


}


function display(newFirework,time){
  var i = 0;
  var j = 0;

  for (i=0;i<timeSlice.length;i++){
    if(timeSlice[i].launched_time==time){
      var firework = timeSlice[i].firework;
      for(j=0;j<timeSlice[i].firework.length;j++){
        push();
          translate(firework[j].pos.x,firework[j].pos.y,firework[j].pos.z);
          sphere(1);
        pop();
      }
      break;
    }
  }

  if(!isEmpty(newFirework)){
    push();
          translate(newFirework.pos.x,newFirework.pos.y,newFirework.pos.z);
          sphere(1);
    pop();
  }

}

function saveFirework(newFirework,time){
  for (i=0;i<timeSlice.length;i++){
    if(timeSlice[i].launched_time==time){
      timeSlice[i].firework.push(newFirework);
      break;
    }
  }
}

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

object.onchange = function(){
  if(!isEmpty(newFirework)){
    newFirework.pos.x = this.value ;
  }
};