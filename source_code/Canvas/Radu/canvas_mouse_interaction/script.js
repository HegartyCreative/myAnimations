let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const myCanvas = select("#myCanvas");
const ctx = myCanvas.getContext("2d");

const minRad = 10;
const rangeRad = 20;
let p = 0;

let x = 200;
let y = 200;

animate();

function animate() {
  p = p + 0.02;

  if (p > 1) {
    p = 0;
  }

  const rad = minRad + rangeRad * p;

  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  ctx.beginPath();
  ctx.arc(x, y, rad, 0, Math.PI * 2);
  ctx.stroke();

  requestAnimationFrame(animate);
}

myCanvas.addEventListener("mousemove", function (info) {
  x = info.offsetX;
  y = info.offsetY;
});
