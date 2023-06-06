let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

gsap.set(".container", { autoAlpha: 1 });

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

// Intro

master.to(".main, .start, .date", {
  opacity: 0,
});

// One

master.from(".one_heading", {
  x: -290,
  ease: "back.out(1)",
});

master.from(
  ".cricket",
  {
    x: -110,
    ease: "back.out(1)",
  },
  "-=0.25"
);

master.from(
  ".one_author",
  {
    x: 190,
    ease: "back.out(1)",
  },
  ">"
);

master.from(
  ".one_body",
  {
    x: 190,
    ease: "back.out(1)",
  },
  "-=0.25"
);

master.to(
  ".one_heading, .cricket, .one_author, .one_body ",
  {
    opacity: 0,
  },
  "+=8"
);

// Two

master.from(".two_heading", {
  x: -250,
  ease: "back.out(1)",
});

master.from(
  ".master",
  {
    x: -110,
    ease: "back.out(1)",
  },
  "-=0.25"
);

master.from(
  ".two_author",
  {
    x: 190,
    ease: "back.out(1)",
  },
  ">"
);

master.from(
  ".two_body",
  {
    x: 190,
    ease: "back.out(1)",
  },
  "-=0.25"
);

master.to(
  ".two_heading, .master, .two_author, .two_body ",
  {
    opacity: 0,
  },
  "+=8"
);

// Three

master.from(".three_heading", {
  x: -270,
  ease: "back.out(1)",
});

master.from(
  ".cheat",
  {
    x: -110,
    ease: "back.out(1)",
  },
  "-=0.25"
);

master.from(
  ".three_author",
  {
    x: 190,
    ease: "back.out(1)",
  },
  ">"
);

master.from(
  ".three_body",
  {
    x: 190,
    ease: "back.out(1)",
  },
  "-=0.25"
);

master.to(
  ".three_heading, .cheat, .three_author, .three_body ",
  {
    opacity: 0,
  },
  "+=8"
);

// Four

master.from(".four_heading", {
  x: -250,
  ease: "back.out(1)",
});

master.from(
  ".slow",
  {
    x: -110,
    ease: "back.out(1)",
  },
  "-=0.25"
);

master.from(
  ".four_author",
  {
    x: 190,
    ease: "back.out(1)",
  },
  ">"
);

master.from(
  ".four_body",
  {
    x: 190,
    ease: "back.out(1)",
  },
  "-=0.25"
);

master.to(
  ".four_heading, .slow, .four_author, .four_body ",
  {
    opacity: 0,
  },
  "+=8"
);

// Five

master.from(".five_heading", {
  x: -250,
  ease: "back.out(1)",
});

master.from(
  ".black",
  {
    x: -110,
    ease: "back.out(1)",
  },
  "-=0.25"
);

master.from(
  ".five_author",
  {
    x: 190,
    ease: "back.out(1)",
  },
  ">"
);

master.from(
  ".five_body",
  {
    x: 190,
    ease: "back.out(1)",
  },
  "-=0.25"
);

// end

master.to(
  ".five_heading, .black, .five_author, .five_body ",
  {
    opacity: 0,
  },
  "+=8"
);

master.to(".end, .start, .date", {
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
