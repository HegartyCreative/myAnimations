let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});

master.pause();

gsap.set(".container", { autoAlpha: 1 });

master.to(".top, .bottom", {
  opacity: 1,
});

master.to(
  ".model",
  {
    opacity: 1,
    y: -30,
    ease: "power.out4",
    duration: 1,
    repeat: -1,
    yoyo: true,
  },
  "<"
);

master.to(
  ".logo",
  {
    y: 5,
    repeat: -1,
    yoyo: true,
    ease: "power.out4",
    duration: 1,
  },
  "<"
);

master.to(
  ".left",
  {
    scaleY: 1.2,
    transformOrigin: "bottom bottom",
    duration: 0.25,
    stagger: {
      each: 0.25,
      repeat: -1,
      yoyo: true,
    },
  },
  "=-0.5"
);

master.to(
  ".left1",
  {
    scaleY: 1.3,
    transformOrigin: "bottom bottom",
    duration: 0.25,
    stagger: {
      each: 0.15,
      repeat: -1,
      yoyo: true,
    },
  },
  "<"
);

master.to(
  ".right",
  {
    scaleY: 1.2,
    transformOrigin: "bottom bottom",
    duration: 0.25,
    stagger: {
      each: 0.35,
      repeat: -1,
      yoyo: true,
    },
  },
  "<"
);

master.to(
  ".right1",
  {
    scaleY: 1.3,
    transformOrigin: "bottom bottom",
    duration: 0.25,
    stagger: {
      each: 0.25,
      repeat: -1,
      yoyo: true,
    },
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
