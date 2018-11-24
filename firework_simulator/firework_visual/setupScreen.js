let setupScreen = function() {
  let stage = new createjs.Stage("setup_screen");

  let leftSky          = new createjs.Shape(),
      leftGround       = new createjs.Shape(),
      rightSky         = new createjs.Shape(),
      rightGround      = new createjs.Shape(),
      leftUpArrow      = new createjs.Shape(),
      leftGroundArrow  = new createjs.Shape(),
      rightUpArrow     = new createjs.Shape(),
      rightGroundArrow = new createjs.Shape();

  function drawUpArrow(arrowObj) {
    arrowObj.graphics.setStrokeStyle(10, "round", "round");
    arrowObj.graphics.beginStroke("black");
    arrowObj.graphics.moveTo(300, 550);
    arrowObj.graphics.lineTo(300, 50);
    arrowObj.graphics.lineTo(290, 60);
    arrowObj.graphics.lineTo(310, 60);
    arrowObj.graphics.lineTo(300, 50);
    arrowObj.graphics.endStroke();
  }

  leftSky    .graphics.beginFill("#8ce").drawRect(10,10,580,540);
  leftGround .graphics.beginFill("#931").drawRect(10,550,580,540);
  rightSky   .graphics.beginFill("#8ce").drawRect(610,10,580,540);
  rightGround.graphics.beginFill("#931").drawRect(610,550,580,540);

  drawUpArrow(leftUpArrow); drawUpArrow(rightUpArrow);
  drawGroundArrow(leftGroundArrow); drawGroundArrow(rightGroundArrow);

  stage.addChild(leftSky); stage.addChild(leftGround);
  stage.addChild(rightSky); stage.addChild(rightGround);
  stage.addChild(leftUpArrow); stage.addChild(rightUpArrow);
  stage.update();
  stage.cache();

}();
