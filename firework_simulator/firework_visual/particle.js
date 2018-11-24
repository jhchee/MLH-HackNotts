// particle data structure

// location
// velocity
// acceleration
// lifespan
// seed
// hu

// constructor of particle that has not exploded
function Particle(x, y, z, h) {
  this.hu = h;
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(0, Math.random() * (-10 + 25) - 25, 0);
  this.location = createVector(x, y, z);
  this.seed = true;
  this.lifespan = 255.0;
}

// constructor of particle that has exploded
function ExplodedParticle(l, h) {
  this.lifespan = 255.0;
  this.location = l;
  this.seed = false;
  this.hu = h;
  this.acceleration = createVector(0, 0);
  this.velocity = createVector(Math.random, Math.random, Math.random);
}

// common method
applyForce = force => {
  this.acceleration.add(force);
};

run = () => {
  update();
  display();
};
explode = () => {
  if (this.seed && this.velocity.y > 0) {
    lifespan = 0;
    return true;
  }
  return false;
};

update = () => {
  this.velocity.add(this.acceleration);
  this.location.add(this.velocity);
  if (!this.seed) {
    this.lifespan -= 5;
    velocity.mult(0.9);
  }
  this.acceleration.mult(0);
};

display = () => {
  //   colorMode(HSB);

  stroke(this.hu, 255, 255, this.lifepsan);
  if (this.seed) {
    strokeWeight(4);
  } else {
    strokeWeight(2);
  }
  push();
  translate(this.location.x, this.location.y, this.location.z);
  point(0, 0);
  pop();
};

isDead = () => {
  if (lifespan < 0.0) {
    return true;
  } else {
    return false;
  }
};
