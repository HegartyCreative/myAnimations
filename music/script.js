let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

gsap.set(".container", { autoAlpha: 1 });

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

// Intro

master.to(".main", {
  opacity: 0,
  delay: 2,
});

master.from(
  ".back",
  {
    x: 120,
    y: 120,
    ease: "power4.out",
    duration: 1,
  },
  "-=0.5"
);

master.from(
  ".front",
  {
    x: 120,
    y: 120,
    ease: "power4.out",
    duration: 1,
  },
  "<"
);

master.to(
  ".text",
  {
    opacity: 1,
  },
  ">"
);

master.from(
  ".black",
  {
    x: 210,
    y: 210,
    ease: "power4.out",
    duration: 0.75,
  },
  "-=0.5"
);

master.to(".text", {
  rotation: 180,
  duration: 0.75,
  transformOrigin: "177px 126px",
  ease: "back.out(0.75)",
});

master.to(
  ".address",
  {
    left: 160,
    top: 110,
    ease: "back.out(0.75)",
  },
  "-=0.25"
);

master.to(
  ".web",
  {
    left: 182,
    top: 120,
    ease: "back.out(0.75)",
  },
  "-=0.25"
);

master.to(
  ".number",
  {
    left: 238,
    top: 110,
    ease: "back.out(0.75)",
  },
  "-=0.25"
);

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
