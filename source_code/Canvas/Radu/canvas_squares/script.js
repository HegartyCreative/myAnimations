let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const myCanvas = select("#myCanvas");
const ctx = myCanvas.getContext("2d");
const thickness = 10;
let x = 0,
  y = 0,
  w = 200,
  h = 200;
let i = 1;

while (i <= 10) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  if (i % 2 == 1) {
    ctx.fillStyle = "blue";
  } else {
    ctx.fillStyle = "white";
  }
  ctx.fill();
  x = x + thickness;
  y = y + thickness;
  w = w - thickness - thickness;
  h = h - thickness - thickness;
  i = i + 1;
}
