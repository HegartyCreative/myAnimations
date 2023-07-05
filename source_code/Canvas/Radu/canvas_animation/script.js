let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const el = select("#myCanvas");
const ctx = el.getContext("2d");

const minX = 100;
const rangeX = 200;
const midRad = 10;
const rangeRad = 20;
let p = 0;
let sign = 1;

animate();

function animate() {
  const x = minX + rangeX * p;
  const rad = midRad + rangeRad * Math.sin(p * Math.PI);
  p = p + 0.02 * sign;

  if (p > 1) {
    sign = -1;
  }

  if (p < 0) {
    sign = 1;
  }

  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  ctx.beginPath();
  ctx.arc(x, 200, rad, 0, Math.PI * 2);
  ctx.stroke();

  requestAnimationFrame(animate);
}
