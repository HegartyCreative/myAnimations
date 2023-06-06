let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

gsap.set(".container", { autoAlpha: 1 });

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

master.to(".wrapper", {
  scale: 1.15,
  ease: "none",
  duration: 5,
});

// Intro
master.to(
  ".background",
  {
    transformOrigin: "center center",
    rotate: 360,
    duration: 60,
    ease: "none",
  },
  "<"
);

master.to(
  ".globe",
  {
    scale: 1.15,
  },
  "<"
);

master.to(
  "h1",
  {
    opacity: 1,
  },
  "<"
);

master.to(
  ".plane_top",
  {
    transformOrigin: "center center",
    rotate: 270,
    duration: 60,
    ease: "none",
  },
  "<"
);

master.to(
  ".clouds2",
  {
    transformOrigin: "center center",
    rotate: 270,
    duration: 60,
    ease: "none",
  },
  "<"
);

master.to(
  ".clouds1",
  {
    transformOrigin: "center center",
    rotate: 270,
    duration: 60,
    ease: "none",
  },
  "<"
);

master.to(
  ".clouds3",
  {
    transformOrigin: "center center",
    rotate: 270,
    duration: 60,
    ease: "none",
  },
  "<"
);

master.to(
  ".clouds4",
  {
    transformOrigin: "center center",
    rotate: 270,
    duration: 60,
    ease: "none",
  },
  "<"
);

master.to(
  ".plane_bottom",
  {
    transformOrigin: "center center",
    rotate: 270,
    duration: 60,
    ease: "none",
  },
  "<"
);

master.to(
  ".sun",
  {
    transformOrigin: "center center",
    rotate: 270,
    duration: 60,
    ease: "none",
  },
  "<"
);

master.to(
  ".balloon1",
  {
    transformOrigin: "center center",
    rotate: 270,
    duration: 60,
    ease: "none",
  },
  "<"
);

master.to(
  ".balloon2",
  {
    transformOrigin: "center center",
    rotate: 270,
    duration: 60,
    ease: "none",
  },
  "<"
);

master.to(
  ".circles1",
  {
    transformOrigin: "center center",
    rotate: 360,
    duration: 60,
    ease: "none",
  },
  "<"
);

master.to(
  ".circles2",
  {
    transformOrigin: "center center",
    rotate: -360,
    duration: 60,
    ease: "none",
  },
  "<"
);

master.to(
  ".circles3",
  {
    transformOrigin: "center center",
    rotate: 270,
    duration: 60,
    ease: "none",
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
