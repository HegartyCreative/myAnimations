let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const container = select(".container");
const video = select(".video");
const mainTitle1 = select("#mainTitle1 > h1");
const mainTitle2 = select("#mainTitle2 > h1");
const mainTitle3 = select("#mainTitle3 > h1");
const subTitle1 = select("#subTitle1 > h2");
const subTitle2 = select("#subTitle2 > h2");
const subTitle3 = select("#subTitle3 > h2");

gsap.set(container,{ autoAlpha: 1 });
gsap.set(subTitle1,{ autoAlpha: 0 });
gsap.set(subTitle2,{ autoAlpha: 0 });
gsap.set(subTitle3,{ autoAlpha: 0 });


var master = gsap.timeline({
  paused: true,
  onComplete: () => (pause.innerHTML = "Play"),
});

master.pause();

master
.to(mainTitle1, {
  x: 147,
  duration: 1,
  ease: "power4.out"
}, "+=0.25")

.to(mainTitle2, {
  x: 157,
  duration: 0.75,
  ease: "power4.out"
}, "-=0.25")

.to(mainTitle3, {
  x: 167,
  duration: 0.75,
  ease: "power4.out"
}, "-=0.25")

.to(mainTitle3, {
  x: 167,
  duration: 0.75,
  ease: "power4.out"
}, "-=0.25")

.to(subTitle1, {
  x: 10,
  autoAlpha: 1,
  duration: 1,
  ease: "power4.out"
}, "-=0.25")

.to(subTitle2, {
  x: 10,
  autoAlpha: 1,
  duration: 1,
  ease: "power4.out"
}, "+=5")

.to(subTitle1, {
  autoAlpha: 0
}, "<")

.to(subTitle3, {
  x: 10,
  autoAlpha: 1,
  duration: 1,
  ease: "power4.out"
}, "+=1")

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

