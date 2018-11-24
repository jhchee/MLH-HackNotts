// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/CKeyIbT3vXI

function Particle(x, y,z, hu, firework) {
  this.pos = createVector(x,y,z);
  this.firework = firework;
  this.lifespan = 1000;
  this.hu = hu;
  this.acc = createVector(0, 0,0);
  
  if (this.firework) {
    this.vel = createVector(0, random(-20, -16),0);
  } else {
    this.vel = p5.Vector.random3D();
    this.vel.mult(random(2, 10));
  }
 
  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }
    
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.done = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }

  this.show = function() {
    colorMode(HSB);
    //console.log(this.pos.z)
    if (!this.firework) {
      strokeWeight(2);
      stroke(hu, 255, 255, this.lifespan);
    } else {
      strokeWeight(4);
      stroke(hu, 255, 255);
    }
    push();
      translate(this.pos.x,this.pos.y,this.pos.z);

      sphere(1);
    pop()
  }
}
