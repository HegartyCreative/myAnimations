let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

gsap.set(".container", { autoAlpha: 1 });

// Intro

// master.to(".start", {
//   opacity: 0,
// });

master.to(
  ".top2, .marketing2, .trends2, .year2, .leftCircle2, .rightCircle2 ",
  {
    opacity: 0,
  }
);

master.from(".top", {
  x: 200,
  ease: "back.out(1.5)",
});

master.from(
  ".marketing",
  {
    x: -240,
    ease: "back.out(1.5)",
  },
  "-=0.35"
);

master.from(
  ".trends",
  {
    x: 230,
    ease: "back.out(1.5)",
  },
  "-=0.35"
);

master.from(
  ".year",
  {
    x: -190,
    ease: "back.out(1.5)",
  },
  "-=0.35"
);

master.from(
  ".leftCircle",
  {
    x: -100,
    y: 100,
    ease: "back.out(1.5)",
  },
  "<"
);

master.from(
  ".rightCircle",
  {
    x: 100,
    y: -100,
    ease: "back.out(1.5)",
  },
  "<"
);

// Intro leave

master.to(
  ".leftCircle, .rightCircle",
  {
    opacity: 0.2,
    scale: 0.8,
  },
  "=+2"
);

master.to(
  ".top",
  {
    scale: 0.7,
    x: -100,
    y: -25,
  },
  "<"
);

master.to(
  ".marketing",
  {
    scale: 0.7,
    x: -10,
    y: -64,
  },
  "<"
);

master.to(
  ".trends",
  {
    scale: 0.7,
    x: -76,
    y: -78,
  },
  "<"
);

master.to(
  ".year",
  {
    scale: 0.7,
    x: 6,
    y: -116,
  },
  "<"
);

master.from(".subHeading", {
  opacity: 0,
});

// Bars

// Influencer

master.from(".influencer", {
  scaleY: 0,
  transformOrigin: "bottom bottom",
  duration: 0.5,
  ease: "back.out(1.5)",
});

master.fromTo(
  ".influencer_text",
  {
    opacity: 0,
    y: -30,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "back.out(1.75)",
  }
);

master.to(
  ".influencer_amount",
  {
    opacity: 1,
  },
  "<"
);

// Mobile

master.from(
  ".mobile",
  {
    scaleY: 0,
    transformOrigin: "bottom bottom",
    duration: 0.5,
    ease: "back.out(1.5)",
  },
  "-=0.25"
);

master.fromTo(
  ".mobile_text",
  {
    opacity: 0,
    y: -30,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "back.out(1.75)",
  }
);

master.to(
  ".mobile_amount",
  {
    opacity: 1,
  },
  "<"
);

// Short

master.from(
  ".short",
  {
    scaleY: 0,
    transformOrigin: "bottom bottom",
    duration: 0.5,
    ease: "back.out(1.5)",
  },
  "-=0.25"
);

master.fromTo(
  ".short_text",
  {
    opacity: 0,
    y: -30,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "back.out(1.75)",
  }
);

master.to(
  ".short_amount",
  {
    opacity: 1,
  },
  "<"
);

// Virtual

master.from(
  ".virtual",
  {
    scaleY: 0,
    transformOrigin: "bottom bottom",
    duration: 0.5,
    ease: "back.out(1.5)",
  },
  "-=0.25"
);

master.fromTo(
  ".virtual_text",
  {
    opacity: 0,
    y: -30,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "back.out(1.75)",
  }
);

master.to(
  ".virtual_amount",
  {
    opacity: 1,
  },
  "<"
);

// Experimental

master.from(
  ".experimental",
  {
    scaleY: 0,
    transformOrigin: "bottom bottom",
    duration: 0.5,
    ease: "back.out(1.5)",
  },
  "-=0.25"
);

master.fromTo(
  ".experimental_text",
  {
    opacity: 0,
    y: -30,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    ease: "back.out(1.75)",
  }
);

master.to(
  ".experimental_amount",
  {
    opacity: 1,
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
