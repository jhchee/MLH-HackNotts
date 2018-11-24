/* timeline_model = {
  fireworks: [],
  panel: {
    startTime: 0,
    endTime: 15,
    x: 25,
    y: 40,
    width: 550,
    height: 135
  }
}; */

let timeline_model = function() {
  let fireworks = [
    { time: 5,  color: 'red'    },
    { time: 7,  color: 'blue'   },
    { time: 17, color: 'green'  },
    { time: 25, color: 'yellow' },
    { time: 36, color: 'orange' }
  ];

  let panel = {
    startTime: 0,
    endTime: 30,

    x: 25,
    y: 40,
    width: 550,
    height: 135
  };

  function addFirework(time, color) {
    let firework = {time: time, color: color};
    fireworks.push(firework);
    fireworks.sort((a, b) => a.time - b.time)
  }

  return {
    fireworks: fireworks,
    panel: panel,
    addFirework: addFirework
  }
}();
