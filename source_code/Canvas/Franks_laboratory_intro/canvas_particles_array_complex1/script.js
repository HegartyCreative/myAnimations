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
    this.x = mouse.x;
    this.y = mouse.y;
    // this.x = Math.random() * myCanvas.width;
    // this.y = Math.random() * myCanvas.height;
    this.size = Math.random() * 25 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
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
    if (particlesArray[i].size <= 0.3) {
      particlesArray.splice(i, 1);
      console.log(particlesArray.length);
      i--;
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  handleParticles();
  requestAnimationFrame(animate);
}

animate();
