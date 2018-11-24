class Firework {
  constructor(time, color) {
    this.time = time;
    this.color = color;
    this.x = 0;
    this.y = 0;
    this.z = 0;
    this.timeline_y = timeline_y;
  }
}

let timeline_model = function() {
  let fireworks = [
    { time: 5,  color: 'red'    , timeline_y: 74  },
    { time: 7,  color: 'blue'   , timeline_y: 53  },
    { time: 17, color: 'green'  , timeline_y: 76  },
    { time: 25, color: 'yellow' , timeline_y: 19  },
    { time: 36, color: 'orange' , timeline_y: 106 }
  ];

  let panel = {
    startTime: 0,
    endTime: 30,

    x: 25,
    y: 40,
    width: 550,
    height: 135
  };

  let addButton = {
    active: false,
    x: 600,
    y: 25,
    width: 175,
    height: 60
  };

  let deleteButton = {
    x: 600,
    y: 100,
    width: 175,
    height: 60
  };

  function addFirework(time, color, timeline_y) {
    let firework = new Firework(time, color, timeline_y);
    fireworks.push(firework);
    fireworks.sort((a, b) => a.time - b.time)
  }

  function exportJSON() {
    return JSON.stringify(fireworks);
  }

  return {
    fireworks: fireworks,
    panel: panel,
    addButton: addButton,
    deleteButton: deleteButton,
    addFirework: addFirework,
    exportJSON: exportJSON
  }
}();
