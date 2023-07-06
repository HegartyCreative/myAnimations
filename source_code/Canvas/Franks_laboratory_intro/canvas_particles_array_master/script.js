let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const myCanvas = select("#myCanvas");
const ctx = myCanvas.getContext("2d");
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;
let particlesArray = [];

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
});

myCanvas.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

class Particle {
  constructor() {
    this.x = Math.random() * myCanvas.width;
    this.y = Math.random() * myCanvas.height;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 50, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.strokeStyle = "yellow";
    ctx.lineWidth = 3;
    ctx.stroke();
  }
}

function init() {
  for (let i = 0; i < 1000; i++) {
    particlesArray.push(new Particle());
  }
}

init();

function handleParticles() {
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    particlesArray[i].draw();
  }
}

function animate() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}

animate();
