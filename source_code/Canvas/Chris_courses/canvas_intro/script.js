let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);
const canvas = select("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext("2d");

// Rectangle
// c.beginPath();
// c.fillStyle = "blue";
// c.fillRect(50, 50, 50, 50);
// c.fillStyle = "green";
// c.fillRect(150, 150, 150, 150);

// line
// c.beginPath();
// c.strokeStyle = "red";
// c.moveTo(150, 200);
// c.lineTo(300, 30);
// c.lineTo(400, 400);
// c.stroke();

// arc
// A thousand circles placed at random locations with a random stroke color each time you refresh the screen
// let randomColor = Math.floor(Math.random() * 16777215).toString(16);

// for (let i = 0; i < 1000; i++) {
//   let x = Math.random() * window.innerWidth;
//   let y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2);
//   c.strokeStyle = "#" + randomColor;
//   c.stroke();
// }

const mouse = {
  x: undefined,
  y: undefined,
};

var maxRadius = 40;
var minRadius = 2;

var colorArray = ["#C4F1C8", "#E5BFBE", "#EEE9D7", "#B9A3BA", "#D7ACC0"];

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener("resize", function (event) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  init();
});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fill();
    c.fillStyle = this.color;
    c.stroke();
    c.strokeStyle = "white";
  };
  this.update = function () {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    if (
      mouse.x - this.x < 50 &&
      mouse.x - this.x > -50 &&
      mouse.y - this.y < 50 &&
      mouse.y - this.y > -50
    ) {
      if (this.radius < maxRadius) {
        this.radius += 1;
      }
    } else if (this.radius > this.minRadius) {
      this.radius -= 1;
    }

    this.draw();
  };
}

var circleArray = [];

function init() {
  circleArray = [];
  for (let i = 0; i < 800; i++) {
    let radius = Math.random() * 3 + 1;
    let x = Math.random() * (canvas.width - radius * 2) + 2;
    let y = Math.random() * (canvas.height - radius * 2) + 2;
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;

    circleArray.push(new Circle(x, y, dx, dy, radius));
  }
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
init();
