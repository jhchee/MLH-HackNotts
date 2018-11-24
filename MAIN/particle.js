// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/CKeyIbT3vXI

function Particle(x, y, z, hu, firework) {
  this.firework = firework;
  if (this.firework) {
    this.pos = createVector(0, 400, 0);
    this.finalDestination = createVector(x, y, z);
  } else {
    this.pos = createVector(x, y, z);
  }
  this.lifespan = 800;
  this.hu = hu;
  this.acc = createVector(0, 0, 0);

  if (this.firework) {
    if (y >= 0) {
      this.vel = createVector(x / 10, -(400 - y) / 10, z / 10);
    } else {
      this.vel = createVector(x / 10, -(-y + 400) / 10, z / 10);
    }
  } else {
    this.vel = p5.Vector.random3D();

    // change the radius of dispersal
    this.vel.mult(random(2, 20));
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  };

  this.update = function() {
    if (!this.firework) {
      this.vel.mult(0.9);
      this.lifespan -= 4;
    }

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.done = function() {
    // define decay rate
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  };

  this.show = function() {
    colorMode(HSB);
    if (!this.firework) {
      strokeWeight(2);
      stroke(hu, 255, 255, this.lifespan);
    } else {
      strokeWeight(4);
      stroke(hu, 255, 255);
    }
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);

    sphere(0.5);
    pop();
  };
}
