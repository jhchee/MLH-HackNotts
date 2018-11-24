let timeline_controller = function(model) {
  let canvas = document.getElementById('timeline');

  function withinPanel(x,y) {
    return (x > model.panel.x) && (y > model.panel.y) && (x < model.panel.width) && (y < model.panel.height);
  }

  const MIN_TIME = -1;

  //allow the user to scroll
  canvas.addEventListener("mousemove", (e) => {
    if (withinPanel(e.offsetX, e.offsetY) && e.buttons & 1) {
      let timerange = model.panel.startTime - model.panel.endTime;
      model.panel.startTime += (timerange * e.movementX / model.panel.width);
      model.panel.endTime += (timerange * e.movementX / model.panel.width);

      // stop scrolling past the start on the timeline
      if (model.panel.startTime < MIN_TIME) {
        model.panel.endTime -= (model.panel.startTime - MIN_TIME);
        model.panel.startTime = MIN_TIME;
      }
    }
  });

  // allow the user to zoom
  canvas.addEventListener("wheel", (e) => {
    if (withinPanel(e.offsetX, e.offsetY)) {
      let timerange = model.panel.endTime - model.panel.startTime;
      let fraction = (e.offsetX - model.panel.x) / model.panel.width;

      const ZOOM_LEVEL = 5/4;
      if (e.deltaY > 0) {  // scroll down == zoom out
        model.panel.startTime -= (timerange * fraction * (ZOOM_LEVEL - 1));
        model.panel.endTime += (timerange * (1-fraction) * (ZOOM_LEVEL - 1));

        // stop scrolling past the start on the timeline
        if (model.panel.startTime < MIN_TIME) {
          model.panel.endTime -= (model.panel.startTime - MIN_TIME);
          model.panel.startTime = MIN_TIME;
        }
      } else if (e.deltaY < 0) { // scroll up == zoom in
        model.panel.startTime += (timerange * fraction * (1 - 1/ZOOM_LEVEL));
        model.panel.endTime -= (timerange * (1-fraction) * (1 - 1/ZOOM_LEVEL));
      }
    }
  });
}(timeline_model);
