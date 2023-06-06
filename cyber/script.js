let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

gsap.set(".container", { autoAlpha: 1 });

master.to(".logo", {
  opacity: 0,
});

master.fromTo(
  ".believe",
  { opacity: 0, scale: 15, transformOrigin: "center center" },
  {
    opacity: 1,
    scale: 1,
    ease: "none",
    duration: 0.25,
  }
);

master.fromTo(
  ".simplified",
  { opacity: 0 },
  {
    opacity: 1,
    ease: "power4.out",
    duration: 0.15,
  },
  "=+1"
);

master.to(
  ".believe",
  {
    opacity: 0,
    duration: 0.1,
  },
  "<"
);

master.from(
  ".business",
  { x: 190, ease: "back.out(1.2)", duration: 0.25 },
  "+=0.5"
);

master.to(
  ".simplified",
  {
    x: -74,
    ease: "back.out(1.2)",
    duration: 0.25,
  },
  "-=0.22"
);

master.to(
  ".simplified, .business",
  {
    y: 150,
    ease: "back.in(1)",
    stagger: 0.1,
    duration: 0.1,
  },
  "+=0.5"
);

master.from(
  ".cybersecurity",
  {
    y: -200,
    ease: "back.out(1.7)",
    duration: 0.25,
  },
  "+=0.25"
);

master.from(
  ".available",
  {
    x: -250,
    ease: "back.out(1.7)",
    duration: 0.25,
  },
  "+=0.25"
);

master.to(
  ".cybersecurity",
  {
    y: -24,
    ease: "back.out(1.7)",
    duration: 0.25,
  },
  "<"
);

master.from(
  ".all",
  {
    x: 220,
    ease: "back.out(1.7)",
    duration: 0.25,
  },
  "<"
);

master.from(
  ".one",
  {
    y: -250,
  },
  "+=1"
);

master.from(
  ".two",
  {
    y: 250,
  },
  "-=0.35"
);

master.from(
  ".three",
  {
    y: -250,
  },
  "-=0.35"
);

master.to(
  ".cybersecurity, .available, .all",
  {
    opacity: 0,
  },
  ">"
);

master.from(".protect", {
  x: 120,
  ease: "back.out(1.7)",
});

master.from(
  ".your",
  {
    x: 120,
    ease: "back.out(1.7)",
  },
  "-=0.25"
);

master.from(
  ".business2",
  {
    x: 120,
    ease: "back.out(1.7)",
  },
  "-=0.25"
);

master.from(
  ".today",
  {
    x: 120,
    ease: "back.out(1.7)",
  },
  "-=0.25"
);

master.to(
  ".one, .two, .three, .protect, .your, .business2, .today",
  {
    opacity: 0,
    duration: 0.75,
  },
  "+=1"
);

master.to(".four", {
  left: 0,
  duration: 0.25,
});

master.from(".soBackground", {
  x: -190,
  ease: "back.out(1)",
});

master.from(
  ".so",
  {
    x: -190,
    ease: "back.out(1)",
  },
  "-=0.25"
);

master.from(".growBackground", {
  x: 180,
  ease: "back.out(1)",
});

master.from(
  ".grow",
  {
    x: 170,
    ease: "back.out(1)",
  },
  "-=0.25"
);

master.to(
  ".so, .soBackground, .grow, .growBackground",
  {
    opacity: 0,
  },
  "+=1"
);

master.to(".four", {
  opacity: 0,
});

master.to(
  ".logo",
  {
    opacity: 1,
  },
  "-=0.25"
);

master.from(".company", {
  y: 80,
  ease: "back.out(1.7)",
});

master.to(
  ".logo",
  {
    y: -20,
    ease: "back.out(1.7)",
  },
  "<"
);

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
