function Firework() {
  this.particles = [];
  this.firework = null;
  this.hu = Math.random() * 255;
  this.firework = new Particle(
    Math.random() * windowWidth - windowWidth / 2,
    height / 2,
    Math.random() * 1600 - 800,
    this.hu
  );
  this.particles = [];
}

done = () => {
  if (this.firework == null && this.particles.length == 0) {
    return true;
  }
  return false;
};

run = () => {
  if (this.firework != null) {
    fill(this.hu, 255, 255);
    this.firework.applyForce(0.1);
    this.firework.update();
    this.firework.display();
  }
  if (this.firework.explode()) {
    for (var i = 0; i < 750; i++) {
      particles.add(new Particle(this.firework.location, this.hu)); // Add "num" amount of particles to the arraylist
    }
    this.firework = null;
  }
  for (var i = particles.length() - 1; i >= 0; i--) {
    p = particles.get(i);
    p.applyForce(0.1);
    p.run();
    if (p.isDead()) {
      particles.pop(i);
    }
  }
};
