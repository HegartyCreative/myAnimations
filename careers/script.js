let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

gsap.set(".wrapper", { autoAlpha: 1 });

let pause = select("#pause");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});

master.pause();

master.to(
  ".logo1",
  {
    opacity: 0,
  },
  "=+1"
);

master.from(".clouds", {
  x: -210,
  duration: 0.75,
});

master.fromTo(
  ".rain_main",
  {
    scaleY: 0,
    transformOrigin: "top top",
    y: 20,
  },
  {
    scaleY: 1,
    transformOrigin: "top top",
    y: 0,
    duration: 0.4,
  }
);

master.to(
  ".clouds, .rain_main, .rain_minor, .large_puddle, .small_puddle, .man, .umbrella",
  {
    x: -72,
    duration: 0.4,
  },
  "=+1.5"
);

master.from(".logo2", {
  y: -110,
  ease: "back.out(1.7)",
});

master.to(
  ".text, .cta",
  {
    opacity: 1,
  },
  "=-0.25"
);

master.fromTo(
  ".umbrella",
  {
    opacity: 0,
    y: 10,
  },
  {
    opacity: 1,
    y: 0,
  },
  "=+1"
);

master.to(
  ".rain_main",
  {
    opacity: 0,
    duration: 0.1,
  },
  "<"
);

master.to(
  ".rain_minor",
  {
    opacity: 1,
    duration: 0.1,
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
