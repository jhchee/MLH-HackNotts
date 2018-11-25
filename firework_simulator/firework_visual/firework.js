function Firework(x, y, z) {
  this.hu = random(255);
  this.firework = new Particle(x, y, z, this.hu, true);
  this.exploded = false;
  this.particles = [];

  this.done = function() {
    if (this.exploded && this.particles.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  this.update = function() {
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();
      if (
        this.firework.vel.y >= 0 ||
        (abs(this.firework.finalDestination.x) <= abs(this.firework.pos.x) &&
          this.firework.finalDestination.y >= this.firework.pos.y &&
          abs(this.firework.finalDestination.z) <= abs(this.firework.pos.z))
      ) {
        this.exploded = true;
        this.explode();
      }
    }

    for (var i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();

      if (this.particles[i].done() || this.particles[i].pos.y > 400) {
        this.particles.splice(i, 1);
      }
    }
  };

  this.explode = function() {
    for (var i = 0; i < 100; i++) {
      var p = new Particle(
        this.firework.pos.x,
        this.firework.pos.y,
        this.firework.pos.z,
        this.hu,
        false
      );
      this.particles.push(p);
    }
  };

  this.show = function() {
    if (!this.exploded) {
      this.firework.show();
    }

    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  };
}
