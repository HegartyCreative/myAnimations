let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

gsap.set(".container", { autoAlpha: 1 });

// Introduction

master.to(".logo", {
  opacity: 0,
});

master.from(".believe", {
  x: -230,
  duration: 0.25,
});

master.to(
  ".believe",
  {
    opacity: 0,
    duration: 0.25,
  },
  "=+0.5"
);

master.from(".innovation", {
  opacity: 0,
  scale: 5,
  duration: 0.25,
  ease: "back.out(1.7)",
});

master.to(
  ".starts",
  {
    opacity: 1,
    duration: 0.1,
  },
  "=+0.5"
);

master.to(
  ".innovation",
  {
    opacity: 0,
    duration: 0.1,
  },
  "<"
);

master.to(
  ".when",
  {
    opacity: 1,
    duration: 0.1,
  },
  "=+0.5"
);

master.to(
  ".starts",
  {
    opacity: 0,
    duration: 0.1,
  },
  "<"
);

master.to(
  ".listen",
  {
    opacity: 1,
    duration: 0.1,
  },
  "=+0.5"
);

master.to(
  ".when",
  {
    opacity: 0,
    duration: 0.1,
  },
  "<"
);

// People

master.to(
  ".listen",
  {
    opacity: 0,
    duration: 0.1,
  },
  "=+1"
);

// Working

master.to(
  ".working",
  {
    opacity: 1,
    duration: 0.25,
  },
  "+=0.25"
);

master.to(".working", {
  x: -45,
  ease: "power4.out",
  duration: 0.25,
});

master.to(
  ".with",
  {
    opacity: 1,
    duration: 0.5,
  },
  "=-0.25"
);

master.to(
  ".hiv",
  {
    opacity: 1,
    duration: 0.25,
  },
  ">"
);

master.to(
  ".working, .with",
  {
    opacity: 0,
    duration: 0.1,
  },
  "<"
);

master.to(
  ".community_image, .square",
  {
    opacity: 1,
    duration: 0,
  },
  "=+0.5"
);

master.fromTo(
  ".community_image, .square",
  {
    scale: 1.2,
  },
  {
    scale: 1,
    duration: 3,
  },
  "=-0.5"
);

master.to(
  ".hiv, .square",
  {
    opacity: 0,
    duration: 0.25,
  },
  "=-0.25"
);

master.to(
  ".community_image",
  {
    opacity: 0,
    duration: 0.75,
  },
  "=+0.5"
);

master.to(
  ".decades",
  {
    opacity: 1,
    duration: 0.25,
  },
  "=-0.5"
);
master.to(
  ".used",
  {
    opacity: 1,
    duration: 0.25,
  },
  "=+1"
);

master.to(
  ".decades",
  {
    opacity: 0,
    duration: 0.15,
  },
  "<"
);

master.to(
  ".disease",
  {
    opacity: 1,
  },
  "=+1"
);

master.to(
  ".used",
  {
    opacity: 0,
    duration: 0.15,
  },
  "<"
);

master.fromTo(
  ".disease",
  {
    scale: 1,
  },
  {
    scale: 1.4,
    duration: 3.5,
  },
  "-=2"
);

master.from(
  ".science",
  {
    x: -210,
    ease: "back.out(2)",
  },
  "-=2"
);

master.from(
  ".technology",
  {
    x: 240,
    ease: "back.out(2)",
  },
  "-=1.5"
);

master.from(
  ".talents",
  {
    x: -245,
    ease: "back.out(2)",
  },
  "-=1"
);

master.to(
  ".think",
  {
    opacity: 1,
    duration: 0.25,
  },
  "=+0.75"
);

master.to(
  ".science, .technology, .talents",
  {
    opacity: 0,
  },
  "<"
);

master.to(
  ".disease",
  {
    opacity: 0,
  },
  "<"
);

master.to(
  ".think",
  {
    opacity: 0,
  },
  "=+0.75"
);

master.to(
  ".every",
  {
    opacity: 1,
  },
  "=-0.25"
);

master.to(
  ".every",
  {
    opacity: 0,
  },
  "=+0.75"
);

master.from(
  ".reduce",
  {
    opacity: 0,
    y: -20,
    scaleY: 0,
  },
  "=-0.25"
);

master.from(
  ".people",
  {
    opacity: 0,
    y: -20,
    scaleY: 0,
  },
  "=+0.25"
);

master.to(
  ".reduce, .people",
  {
    opacity: 0,
  },
  "=+2"
);

master.to(
  ".logo",
  {
    opacity: 1,
  },
  "=-0.5"
);

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
