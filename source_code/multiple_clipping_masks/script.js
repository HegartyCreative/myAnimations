let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

// Create variables
const plane = select("#plane > path");
const lorry = select("#lorry > path");

let master = gsap.timeline({
  // defaults: {duration: 1, opacity: 0},
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

// Set the elements
gsap.set(".container", { autoAlpha: 1 });

// Intro

master.from(plane, {
  y: 100,
});

master.from(
  lorry,
  {
    x: 100,
  },
  "<"
);

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
