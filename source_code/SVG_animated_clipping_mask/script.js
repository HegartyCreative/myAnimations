let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const city_ship = select("#city_ship > g");

let pause = select("#pause");

gsap.set(".container", { autoAlpha: 1 });

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

// Intro

master.fromTo(
  city_ship,
  {
    x: 90,
  },
  {
    x: 0,
  }
);

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
