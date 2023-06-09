let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const container = select(".container");
const video = select(".video");
const yellow = select("#yellow");
const black = select("#black");
const green = select("#green");
const circle_yellow = select("#circle_yellow");
const red = select("#red");
const blue = select("#blue");
const pink = select("#pink");
const orange1 = select("#orange1");
const orange2 = select("#orange2");
const grey = select("#grey");
const design = select("#design");
const victoria = select("#victoria");
const web = select("#web");
const tel = select("#tel");
let pause = select("#pause");

gsap.set(container,{ autoAlpha: 1 });
gsap.set(yellow,{transformOrigin: "bottom center" });
gsap.set(green,{scale: 0, transformOrigin: "center center" });
gsap.set(circle_yellow, {scale: 0, transformOrigin: "center center" });
gsap.set(red,{transformOrigin: "top center" });
gsap.set(blue,{transformOrigin: "center right" });
gsap.set(orange1,{transformOrigin: "top left" });
gsap.set(orange2,{transformOrigin: "bottom center" });
gsap.set(black, {transformOrigin: "bottom center" });
gsap.set(pink,{transformOrigin: "center right" });
gsap.set(design,{transformOrigin: "center right" });
gsap.set(victoria,{transformOrigin: "top center" });
gsap.set(web,{transformOrigin: "center right" });
gsap.set(tel,{transformOrigin: "bottom center" });

// Nested timeline
var master = gsap.timeline({
  paused: true,
  onComplete: () => (pause.innerHTML = "Play"),
});

function playVideo() {
  const tl = gsap.timeline()
tl.add(() => {
  video.play();
})
  return tl;
}

function redAnim() {
  const tl = gsap.timeline()
tl.from(red, {
  x: -120,
  y: 120,
  duration: 0.75,
  ease: "power4.out"
})
  return tl;
}

function yellowAnim() {
  const tl = gsap.timeline()
tl.from(yellow, {
  x: 120,
  y: 120,
  duration: 0.75,
  ease: "power4.out"
})
  return tl;
}

function blueAnim() {
  const tl = gsap.timeline()
tl.from(blue, {
  x: 120,
  y: 120,
  duration: 0.75,
  ease: "power4.out"
})
  return tl;
}

function orange1Anim() {
  const tl = gsap.timeline()
tl.from(orange1, {
  x: -130,
  y: -120,
  duration: 0.75,
  ease: "power4.out"
})
  return tl;
}

function orange2Anim() {
  const tl = gsap.timeline()
tl.from(orange2, {
  x: 120,
  y: 120,
  duration: 0.75,
  ease: "power4.out"
})
  return tl;
}

function pinkAnim() {
  const tl = gsap.timeline()
tl.from(pink, {
  x: 160,
  y: -160,
  duration: 0.75,
  ease: "power4.out"
})
  return tl;
}

function designAnim() {
  const tl = gsap.timeline()
tl.from(design, {
  x: -220,
  y: 220,
  duration: 0.75,
  ease: "back.out(1.5)"
})
  return tl;
}

function greenAnim() {
  const tl = gsap.timeline()
tl.to(green, {
  scale: 1,
  ease: "back.out(1.5)",
  duration: 0.75,
  ease: "power4.out"
})
  return tl;
}

function victoriaAnim() {
  const tl = gsap.timeline()
tl.from(victoria, {
  x: -160,
  y: 160,
  duration: 0.75,
  ease: "back.out(1.5)"
})
  return tl;
}

function circle_yellowAnim() {
  const tl = gsap.timeline()
tl.to(circle_yellow, {
  scale: 1,
  ease: "back.out(1.5)",
  duration: 0.75,
  ease: "power4.out"
})
  return tl;
}

function blackAnim() {
  const tl = gsap.timeline()
tl.from(black, {
  x: 120,
  y: 120,
  duration: 0.75,
  ease: "power4.out"
})
  return tl;
}

function webAnim() {
  const tl = gsap.timeline()
tl.from(web, {
  x: 160,
  y: -160,
  duration: 0.75,
  ease: "power4.out"
})
  return tl;
}

function telAnim() {
  const tl = gsap.timeline()
tl.from(tel, {
  x: 120,
  y: 120,
  duration: 0.75,
  ease: "power4.out"
})
  return tl;
}

master
.add(playVideo())
.add(redAnim(), "+=2.5")
.add(yellowAnim(), "-=0.5")
.add(blueAnim(), "-=0.5")
.add(orange1Anim(), "-=0.5")
.add(orange2Anim(), "-=0.5")
.add(pinkAnim(), "-=0.5")
.add(designAnim(), "-=0.5")
.add(greenAnim(), "-=0.5")
.add(victoriaAnim(), "-=0.5")
.add(circle_yellowAnim(), "-=0.5")
.add(blackAnim(), "-=0.5")
.add(webAnim(), "-=0.5")
.add(telAnim(), "-=0.5");

// Button code

pause.addEventListener("click", () => {
  if (master.paused()) {
    master.paused(false);
    video.play();
  } else {
    master.paused(true);
    video.pause();
  }

  if (master.progress() == 1) {
    master.restart();
    video.play();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
