let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const myCanvas = select("#myCanvas");
const ctx = myCanvas.getContext("2d");
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  myCanvas.width = window.innerWidth;
  myCanvas.height = window.innerHeight;
});

const mouse = {
  x: undefined,
  y: undefined,
};

myCanvas.addEventListener("click", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  drawCircle();
});

myCanvas.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  drawCircle();
});

function drawCircle() {
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.strokeStyle = "yellow";
  ctx.lineWidth = 3;
  ctx.stroke();
}

drawCircle();

//https://www.youtube.com/watch?v=Yvz_axxWG4Y
// 17.48
