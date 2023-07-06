let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const myCanvas = select("#myCanvas");
const ctx = myCanvas.getContext("2d");
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;
let particlesArray = [];
let hue = 0;

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
  for (let i = 0; i < 5; i++) {
    particlesArray.push(new Particle());
  }
});

myCanvas.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 10; i++) {
    particlesArray.push(new Particle());
  }
});

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    // this.x = Math.random() * myCanvas.width;
    // this.y = Math.random() * myCanvas.height;
    this.size = Math.random() * 20 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = "hsl(" + hue + ", 100%, 50%)";
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.1;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}

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
  // ctx.fillStyle = "rgba(0, 0, 0, 0.02)";
  // ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);
  handleParticles();
  hue += 2;
  requestAnimationFrame(animate);
}

animate();
