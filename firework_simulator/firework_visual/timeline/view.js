let timeline_view = function(model) {
  let canvas = document.getElementById('timeline');
  let ctx = canvas.getContext('2d');

  function init() {
    requestAnimationFrame(draw);
  }

  function draw() {
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    /* DRAW THE TIMELINE PANEL */
    ctx.fillStyle = 'silver';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'white';
    ctx.fillRect(model.panel.x, model.panel.y, model.panel.width, model.panel.height);
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'gray';
    for (let i = Math.floor(model.panel.startTime + 1); i < model.panel.endTime; i++) {
      ctx.beginPath();
      let x = model.panel.width * (i - model.panel.startTime) / (model.panel.endTime - model.panel.startTime) + model.panel.x;
      ctx.moveTo(x, model.panel.y);
      ctx.lineTo(x, model.panel.y + model.panel.height);
      ctx.stroke();
    }
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'black';
    ctx.strokeRect(model.panel.x, model.panel.y, model.panel.width, model.panel.height);
    ctx.restore();

    /* DRAW THE FIREWORK NODES */
    ctx.save();
    let prevTime = 0, count = 0;
    for (const firework of model.fireworks) {
      if (firework.time > model.panel.startTime && firework.time < model.panel.endTime) {
        let x = model.panel.width * (firework.time - model.panel.startTime) / (model.panel.endTime - model.panel.startTime) + model.panel.x;

        if (firework.time === prevTime) count++;
        else {
          prevTime = firework.time;
          count = 0;
        }

        ctx.fillStyle = firework.color;
        ctx.beginPath();
        ctx.arc(x,model.panel.y + firework.timeline_y, 5, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
      }
    }
    ctx.restore();

    

    /* DRAW THE ADD BUTTON */
    ctx.save();
    ctx.lineWidth = 5;
    ctx.fillStyle = (model.addButton.active) ? 'white' : 'gray';
    ctx.beginPath();
    ctx.rect(model.addButton.x, model.addButton.y, model.addButton.width, model.addButton.height);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    /* DRAW THE DELETE ALL BUTTON */
    ctx.save();
    ctx.lineWidth = 5;
    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.rect(model.deleteButton.x, model.deleteButton.y, model.deleteButton.width, model.deleteButton.height);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    /* DRAW THE TIMESTAMPS */
    ctx.save();
    ctx.font = "18px sans-serif";
    ctx.textAlign = 'left';
    ctx.fillText(model.panel.startTime, model.panel.x, model.panel.y - 10);
    ctx.textAlign = 'right';
    ctx.fillText(model.panel.endTime, model.panel.x + model.panel.width, model.panel.y - 10);
    ctx.restore();

    requestAnimationFrame(draw);
  }

  init();
}(timeline_model);
