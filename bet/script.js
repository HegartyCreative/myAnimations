let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

gsap.set(".container", { autoAlpha: 1 });

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

// Intro

master.to(".start", {
  opacity: 0,
});

master.fromTo(
  ".intro",
  {
    y: 20,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    stagger: 0.25,
  }
);

master.fromTo(
  "#map path",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    stagger: 0.003,
    duration: 0.5,
  },
  "<"
);

master.to(
  ".intro",
  {
    opacity: 0,
  },
  "-=2"
);

// Customers

master.to(
  ".logo",
  {
    opacity: 1,
    y: 10,
  },
  "-=2"
);

master.to(
  ".customers",
  {
    opacity: 1,
    y: -10,
  },
  "-=2"
);

master.to(
  ".blue",
  {
    opacity: 0,
  },
  "+=0.15"
);

// Use

master.to(
  ".use",
  {
    opacity: 1,
    stagger: 0.1,
    duration: 0.75,
  },
  "-=0.1"
);

// yellow

master.to(
  ".yellow",
  {
    x: 300,
    duration: 0.25,
  },
  ">"
);

master.from(".warning", {
  x: -230,
  stagger: 0.25,
  duration: 0.25,
});

master.from(
  ".touch",
  {
    y: 130,
    duration: 0.45,
    ease: "back.out(1.7)",
  },
  "-=0.25"
);

// red

master.to(
  ".black",
  {
    y: 250,
    duration: 0.25,
  },
  "+=0.45"
);

master.to(
  ".warning, .touch",
  {
    opacity: 0,
    duration: 0.1,
  },
  "-=0.25"
);

master.from(".size", {
  x: -240,
  stagger: 0.25,
  duration: 0.25,
});

master.to("#gamblers", {
  opacity: 1,
  innerText: 10,
  scale: 1.4,
  snap: {
    innerText: 1,
    duration: 2,
  },
});

master.to(
  ".enough, .fill, .yellow, .use",
  {
    opacity: 0,
  },
  "<"
);

master.from(
  ".park",
  {
    y: 110,
  },
  "-=0.35"
);

// Transition

master.from(
  ".transition",
  {
    y: -250,
    stagger: 0.03,
    ease: "power.out4",
    duration: 0.25,
  },
  "+=0.5"
);

master.to(
  "#gamblers, .park, .black",
  {
    opacity: 0,
  },
  "-=0.5"
);

master.to(
  ".transition",
  {
    y: 250,
    stagger: 0.03,
    ease: "power.out4",
    duration: 0.25,
  },
  "-=0.15"
);

master.to(
  ".man",
  {
    opacity: 1,
    duration: 0.2,
  },
  "-=0.5"
);

master.to(
  ".join",
  {
    opacity: 1,
    x: -20,
  },
  "-=0.15"
);

master.to(
  ".the",
  {
    opacity: 1,
    x: 20,
  },
  "-=0.25"
);

master.to(
  ".million",
  {
    opacity: 1,
    y: -20,
  },
  "-=0.15"
);

master.to(
  ".end",
  {
    opacity: 0,
    duration: 0.25,
  },
  "+=0.5"
);

// Heading

master.to(
  ".red",
  {
    x: 300,
    duration: 0.25,
  },
  ">"
);

master.to(".final", {
  opacity: 1,
  y: 20,
  stagger: 0.25,
});

// Closing

master.from(
  ".endRight",
  {
    x: 300,
    ease: "power.out4",
    duration: 0.2,
  },
  "+=2"
);

master.to(".logo2", { opacity: 1, y: 30 });

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
