let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const myCanvas = select("#myCanvas");
// using the canvas API below
const ctx = myCanvas.getContext("2d");
myCanvas.height = 500;
myCanvas.width = 500;

let size = 0;
let positionX = 0;
let positionY = 0;
let line = 0;

function animate() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  // draw each frame
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.strokeStyle = "green";
  ctx.lineWidth = line;
  ctx.arc(positionX, positionY, size, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  size += 0.1;
  positionX += 0.5;
  positionY += 0.5;
  line += 0.02;

  // repeat the animation
  requestAnimationFrame(animate);
}

animate();

// https://www.youtube.com/watch?v=ymmtEgp0Tuc
// time of 14.30
