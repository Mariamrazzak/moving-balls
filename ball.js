
var positionX = 0;
var positionY = 0;
var velocity = 40;
var reverse = false;
var ball = document.getElementById("ball");
let bally = document.getElementById("bally");
let ballz = document.getElementById("ballz")
//write a function that can change the position of the html element "ball"
function moveBall() {
  // two x-axis coordinates
  var Xmin = 0;
  var Xmax = 500;
  var Ymin = 0;
  var Ymax = 400;

  if (reverse) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
    bally.style.left = positionX + "px";
    bally.style.top = positionY + "px";
    ballz.style.left = positionX + "px";
    ballz.style.top = positionY + "px";
  } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
    bally.style.left = positionX + "px";
    bally.style.top = positionY + "px";
    ballz.style.left = positionX + "px";
    ballz.style.top = positionY + "px";
  }

  if (
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
  ) {
    reverse = !reverse;
  }
}

setInterval(moveBall,100)
