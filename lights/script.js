let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

gsap.set(".container", { autoAlpha: 1 });

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

// Intro

master.to(".xmas", {
  autoAlpha: 0,
});

master.set("#line, #connection, #circle", {
  autoAlpha: 0,
});

master.set(".star", {
  transformOrigin: "center center",
  autoAlpha: 0,
  scale: 0,
});

master.set(".message", {
  transformOrigin: "center center",
  autoAlpha: 0,
  scale: 0,
});

master.set(".myCircle", {
  transformOrigin: "center center",
  autoAlpha: 0,
  scale: 0,
});

master.fromTo(
  "#line, #connection, #circle",
  {
    autoAlpha: 0,
  },
  {
    autoAlpha: 1,
  }
);

master.fromTo(
  ".star",
  {
    autoAlpha: 0,
  },
  {
    autoAlpha: 1,
    duration: 5,
    scale: 1,
    stagger: {
      // wrap advanced options in an object
      each: 0.05,
      from: "random",
      ease: "power4.inOut",
      // repeat: -1, // Repeats immediately, not waiting for the other staggered animations to finish
      // yoyo: true,
    },
  }
);

master.fromTo(
  ".message, .myCircle",
  {
    autoAlpha: 0,
  },
  {
    autoAlpha: 1,
    duration: 3,
    scale: 1,
    stagger: {
      each: 0.05,
      from: "random",
      ease: "power4.inOut",
    },
  }
);

master.to(
  ".star",
  {
    autoAlpha: 0,
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
