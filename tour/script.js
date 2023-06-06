let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});

master.pause();

master.to(
  ".logo",
  {
    opacity: 0,
  },
  "=+1.5"
);

master.fromTo(
  ".year_background",
  {
    x: -300,
  },
  {
    x: 0,
    ease: "power4.out",
  },
  "=-0.25"
);

master.fromTo(
  ".location",
  {
    x: -270,
    y: 30,
    opacity: 0,
  },
  {
    x: 14,
    opacity: 1,
    ease: "back.out(1)",
  },
  "=-0.25"
);

master.to(".date", {
  opacity: 1,
});

master.from(".cyclist", {
  x: -210,
  ease: "back.out(1)",
});

master.to(
  ".year_background",
  {
    x: 300,
    ease: "power4.out",
  },
  "=+1"
);

master.to(".date, .location, .cyclist", {
  opacity: 0,
});

master.fromTo(
  ".left_shape",
  {
    opacity: 1,
    scale: 0,
    ease: "power4.out",
    transformOrigin: "bottom left",
  },
  {
    scale: 1,
    duration: 0.1,
  }
);

master.fromTo(
  ".right_shape",
  {
    opacity: 1,
    scale: 0,
    ease: "power4.out",
    transformOrigin: "top right",
  },
  {
    scale: 1,
    duration: 0.1,
  },
  "<"
);

master.to(".logo1", {
  opacity: 1,
});

// RIDERS

master.to("#riders", {
  opacity: 1,
  innerText: 176,
  snap: {
    innerText: 1,
    duration: 2,
  },
});

master.fromTo(
  ".riders",
  {
    x: -90,
    y: 135,
  },
  {
    x: 50,
  },
  "=-0.5"
);

master.from(".cyclists", {
  x: -290,
  ease: "back.out(1)",
});

// TEAMS

master.to(
  ".riders, #riders",
  {
    x: 300,
    ease: "back.in(1)",
    stagger: 0.15,
  },
  "=+2"
);

master.to("#teams", {
  opacity: 1,
  innerText: 22,
  snap: {
    innerText: 1,
    duration: 2,
  },
});

master.fromTo(
  ".teams",
  {
    x: -90,
    y: 135,
  },
  {
    x: 37,
    opacity: 1,
  },
  "=-0.5"
);

// STAGES

master.to(
  ".teams, #teams, .cyclists",
  {
    x: 300,
    ease: "back.in(1)",
    stagger: 0.15,
  },
  "=+2"
);

master.to("#stages", {
  opacity: 1,
  innerText: 21,
  snap: {
    innerText: 1,
    duration: 2,
  },
});

master.fromTo(
  ".stages",
  {
    x: -90,
    y: 135,
  },
  {
    x: 37,
    opacity: 1,
  },
  "=-0.5"
);

master.from(
  ".stage",
  {
    x: -290,
    ease: "back.out(1)",
  },
  "<"
);

// KM

master.to(
  ".stages, #stages",
  {
    x: 300,
    ease: "back.in(1)",
    stagger: 0.15,
  },
  "=+2"
);

master.to("#kms", {
  opacity: 1,
  innerText: 3404,
  snap: {
    innerText: 1,
    duration: 2,
  },
});

master.fromTo(
  ".kms",
  {
    x: -90,
    y: 135,
  },
  {
    x: 37,
    opacity: 1,
  },
  "=-0.5"
);

// Longest

master.to(
  ".kms, #kms",
  {
    x: 300,
    ease: "back.in(1)",
    stagger: 0.15,
  },
  "=+2"
);

master.to("#longests", {
  opacity: 1,
  innerText: 209,
  snap: {
    innerText: 1,
    duration: 2,
  },
});

master.fromTo(
  ".longests",
  {
    x: -90,
    y: 135,
  },
  {
    x: 37,
    opacity: 1,
  },
  "=-0.5"
);

master.to(
  ".longests, #longests",
  {
    x: 300,
    ease: "back.in(1)",
    stagger: 0.15,
  },
  "=+2"
);

master.to(
  ".left_shape",
  {
    x: -80,
    ease: "back.out(1)",
    duration: 0.25,
    transformOrigin: "bottom right",
  },
  "=+0.25"
);

master.to(
  ".right_shape",
  {
    x: 155,
    ease: "back.out(1)",
    duration: 0.25,
    transformOrigin: "top left",
  },
  "<"
);

master.to(
  ".stage",
  {
    x: 100,
    ease: "back.out(1)",
    duration: 0.25,
  },
  "=-0.25"
);

master.to(
  ".logo1",
  {
    x: 110,
    ease: "back.out(1)",
    duration: 0.25,
  },
  "<"
);

master.to(
  ".logo",
  {
    opacity: 1,
  },
  "=+0.25"
);

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
