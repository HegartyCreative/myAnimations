let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const myCanvas = select("#myCanvas");
const ctx = myCanvas.getContext("2d");

// LINE
// ctx.beginPath();
// ctx.lineWidth = 10;
// ctx.moveTo(10, 10);
// ctx.lineTo(100, 100);
// ctx.lineTo(100, 300);
// ctx.lineTo(400, 300);
// ctx.lineTo(400, 100);
// ctx.stroke();
// ctx.strokeStyle = "green";
// ctx.stroke();
// ctx.fillStyle = "red";
// ctx.fill();

// RECTANGLES
ctx.beginPath();
ctx.lineWidth = 5;
ctx.rect(10, 10, 100, 100);
ctx.fillStyle = "red";
ctx.fill();
ctx.beginPath();
ctx.rect(50, 50, 100, 100);
ctx.strokeStyle = "red";
ctx.stroke();
ctx.beginPath();
ctx.rect(110, 110, 100, 100);
ctx.strokeStyle = "red";
ctx.stroke();
ctx.beginPath();
ctx.rect(150, 150, 100, 100);
ctx.strokeStyle = "red";
ctx.stroke();

// CIRCLE
ctx.beginPath();
ctx.lineWidth = 3;
ctx.arc(400, 150, 80, 0, Math.PI * 2);
ctx.strokeStyle = "blue";
ctx.stroke();
