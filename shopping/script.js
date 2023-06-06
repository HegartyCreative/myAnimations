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

master.to(".monday", {
  rotation: 75,
  transformOrigin: "0% 100%",
  ease: "power4.in",
  duration: 1,
});
master.to(
  ".monday",
  {
    y: 300,
    ease: "power4.out",
    duration: 1,
  },
  "=-0.25"
);

master.to(
  ".tuesday",
  {
    rotation: -90,
    transformOrigin: "25% 100%",
    ease: "power4.in",
    duration: 1,
  },
  "=-0.75"
);

master.to(
  ".tuesday",
  {
    y: 300,
    ease: "power4.out",
    duration: 1,
  },
  "=-0.25"
);

master.to(
  ".wednesday",
  {
    rotation: 60,
    transformOrigin: "0% 100%",
    ease: "power4.in",
    duration: 1,
  },
  "=-0.75"
);

master.to(
  ".wednesday",
  {
    y: 300,
    ease: "power4.out",
    duration: 1,
  },
  "=-0.25"
);

master.to(
  ".thursday",
  {
    rotation: -70,
    transformOrigin: "25% 100%",
    ease: "power4.in",
    duration: 1,
  },
  "=-0.75"
);

master.to(
  ".thursday",
  {
    y: 300,
    ease: "power4.out",
    duration: 1,
  },
  "=-0.25"
);

master.to(
  ".set",
  {
    opacity: 1,
  },
  "=-0.5"
);

master.to(
  ".black",
  {
    opacity: 1,
  },
  "=-0.25"
);

master.to(
  ".date",
  {
    opacity: 1,
  },
  ">"
);

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
