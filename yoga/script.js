let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});

master.pause();

master.to(".start", {
  opacity: 0,
});

master.from(
  ".heading",
  {
    x: -140,
    ease: "back.out(1.5)",
  },
  "=+0.5"
);

master.to(
  ".body_text",
  {
    opacity: 1,
    duration: 0.25,
  },
  "=-0.25"
);

// One

master.from(
  ".one",
  {
    scale: 0,
    ease: "back.out(1.5)",
    duration: 0.5,
    transformOrigin: "right bottom",
  },
  "=-0.25"
);

master.from(
  ".one_text",
  {
    x: 110,
    ease: "back.out(1.5)",
    duration: 0.5,
  },
  "=-0.25"
);

master.to(
  ".one, .one_text",
  {
    opacity: 0,
  },
  "=+1.5"
);

// Two

master.from(".two", {
  scale: 0,
  ease: "back.out(1.5)",
  duration: 0.5,
  transformOrigin: "right bottom",
});

master.from(
  ".two_text",
  {
    x: 110,
    ease: "back.out(1.5)",
    duration: 0.5,
  },
  "=-0.25"
);

master.to(
  ".two, .two_text",
  {
    opacity: 0,
  },
  "=+1.5"
);

// Three

master.from(".three", {
  scale: 0,
  ease: "back.out(1.5)",
  duration: 0.5,
  transformOrigin: "right bottom",
});

master.from(
  ".three_text",
  {
    x: 110,
    ease: "back.out(1.5)",
    duration: 0.5,
  },
  "=-0.25"
);

master.to(
  ".three, .three_text",
  {
    opacity: 0,
  },
  "=+1.5"
);

// Four

master.from(".four", {
  scale: 0,
  ease: "back.out(1.5)",
  duration: 0.5,
  transformOrigin: "bottom bottom",
});

master.from(
  ".four_text",
  {
    x: -80,
    ease: "back.out(1.5)",
    duration: 0.5,
  },
  "=-0.25"
);

master.to(
  ".four, .four_text",
  {
    opacity: 0,
  },
  "=+1.5"
);

// Five

master.from(".five", {
  scale: 0,
  ease: "back.out(1.5)",
  duration: 0.5,
  transformOrigin: "right bottom",
});

master.from(
  ".five_text",
  {
    x: 110,
    ease: "back.out(1.5)",
    duration: 0.5,
  },
  "=-0.25"
);

master.to(
  ".five, .five_text",
  {
    opacity: 0,
  },
  "=+1.5"
);

master.set(".start", {
  opacity: 1,
});

master.set(".cta2", {
  opacity: 1,
});

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
