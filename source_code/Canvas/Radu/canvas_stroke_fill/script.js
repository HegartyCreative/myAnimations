let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const myCanvas = select("#myCanvas");
const ctx = myCanvas.getContext("2d");

ctx.beginPath();
ctx.rect(100, 100, 200, 200);
ctx.lineWidth = 40;
ctx.strokeStyle = "rgb(226, 118, 236)";
ctx.fillStyle = "#FF5733";
ctx.stroke();
ctx.fill();
