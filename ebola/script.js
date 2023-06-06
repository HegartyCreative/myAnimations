let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});

master.pause();

master.to(".start", {
  opacity: 0,
  duration: 0,
});

master.to(".title", {
  x: -60,
  y: -138,
  rotation: -90,
  delay: 1,
  ease: "power4.out",
  duration: 0.5,
});

master.fromTo(
  ".isAn",
  {
    x: -13,
    // y: 130,
    rotation: -90,
    duration: 1,
    scale: 1,
    transformOriginX: "50% 50%",
    opacity: 0,
    ease: "power4.in",
  },
  {
    scale: 1.2,
    transformOriginX: "bottom bottom",
    y: 120,
    x: 10,
    rotation: -60,
    opacity: 1,
    duration: 0.5,
  },
  ">"
);
master.to(
  ".title",
  {
    opacity: 0,
  },
  "<"
);

master.to(".isAn", {
  rotate: -90,
  x: -40,
  y: 100,
});

master.fromTo(
  ".invisible",
  {
    x: 170,
    y: 320,
    scale: 3,
    rotate: -45,
  },
  {
    x: 55,
    y: 42,
    scale: 1,
    rotate: 0,
  }
);

master.to(
  ".foe",
  {
    opacity: 1,
  },
  ">"
);

master.from(".invisible_img", {
  y: 200,
  duration: 0.25,
  ease: "back.out(1)",
});

master.to(
  ".invisible_red",
  {
    opacity: 1,
  },
  ">"
);

master.to(
  ".isAn, .invisible, .foe",
  {
    x: -220,
    ease: "back.in(0.25)",
    stagger: 0.2,
    opacity: 0,
    duration: 0.25,
  },
  "=+0.25"
);

master.to(
  ".invisible_img, .invisible_red",
  {
    x: 200,
    ease: "back.in(0.25)",
    duration: 0.25,
  },
  "=-0.25"
);

master.to(".living, .inLiberia", {
  opacity: 1,
});

master.to(".living", {
  y: -10,
  scale: 0.9,
  transformOrigin: "0% 100%",
  duration: 0.25,
});

master.to(
  ".inLiberia",
  {
    y: -20,
    scale: 0.8,
    transformOrigin: "0% 100%",
  },
  "<"
);

master.fromTo(
  ".africa1",
  {
    opacity: 0,
    scale: 1.1,
    x: 0,
    y: 0,
  },
  {
    scale: 0.85,
    x: 145,
    y: -40,
    opacity: 1,
    duration: 0.5,
  },
  "<"
);

master.to(
  ".africa2",
  {
    opacity: 1,
  },
  ">"
);

master.fromTo(
  ".right, .now, .is",
  {
    y: 0,
    x: 0,
    opacity: 0,
  },
  {
    opacity: 1,
    y: -10,
    x: 10,
    duration: 0.4,
    ease: "power4.out",
  },
  ">"
);

master.fromTo(
  ".living",
  {
    scale: 1,
  },
  {
    scale: 0.5,
    rotate: -90,
    x: 30,
    y: 45,
    duration: 0.25,
  },
  "=+1"
);

master.fromTo(
  ".inLiberia",
  {
    scale: 1,
  },
  {
    scale: 0.5,
    rotate: -90,
    x: 52,
    y: 0,
    duration: 0.25,
  },
  "=-0.2"
);

master.fromTo(
  ".right",
  {
    scale: 1,
  },
  {
    scale: 0.5,
    rotate: -90,
    x: -51,
    y: -64,
    duration: 0.25,
  },
  "=-0.2"
);

master.to(".living", {
  y: 200,
  ease: "power4.in",
  duration: 0.5,
});

master.to(
  ".inLiberia",
  {
    y: 202,
    ease: "power4.in",
    duration: 0.5,
  },
  "=-0.25"
);

master.to(
  ".right",
  {
    y: 200,
    ease: "power4.in",
    duration: 0.5,
  },
  "=-0.15"
);

master.to(
  ".africa1",
  {
    x: 300,
    duration: 0.5,
  },
  ">"
);

master.to(
  ".africa2",
  {
    x: 156,
    duration: 0.5,
  },
  "<"
);

master.fromTo(
  ".living2",
  {
    x: 30,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.25,
  }
);

master.fromTo(
  ".with",
  {
    x: 30,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.25,
  },
  "=+0.75"
);

master.to(
  ".living2",
  {
    x: -240,
  },
  "<"
);

master.fromTo(
  ".anxiety",
  {
    x: 30,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 0.25,
  },
  "=+0.75"
);

master.to(
  ".with",
  {
    x: -240,
  },
  "<"
);

master.to(
  ".anxiety_img",
  {
    y: -130,
    opacity: 1,
    ease: "back.out(1.7)",
  },
  "=+0.75"
);

master.fromTo(
  ".anxiety",
  {
    y: 0,
    x: 0,
  },
  {
    y: -30,
    x: 0,
    ease: "back.out(1.7)",
  },
  "<"
);

master.to(
  ".anxiety, .anxiety_img",
  {
    opacity: 0,
  },
  "=+0.75"
);

master.from(
  ".situation",
  {
    y: -105,
    ease: "back.out(1.2)",
    duration: 0.25,
  },
  "=+0.5"
);

master.from(
  ".where",
  {
    y: 140,
    ease: "back.out(1.2)",
    duration: 0.25,
  },
  "<"
);

master.to(
  ".situation, .where",
  {
    scale: 50,
    transformOrigin: "75% 25%",
    duration: 0.15,
  },
  "=-0.25"
);

// People are

master.from(".people", {
  x: 250,
  ease: "back.out(1.7)",
});

master.from(
  ".are",
  {
    x: -280,
    ease: "back.out(1.7)",
  },
  "=+0.25"
);

master.fromTo(
  ".man",
  {
    opacity: 0,
  },
  {
    opacity: 1,
    stagger: 0.1,
  },
  "=-0.75"
);

master.to(
  ".people",
  {
    x: 4,
    y: -30,
    scale: 0.95,
    duration: 0.5,
  },
  "=-0.25"
);

master.to(
  ".man",
  {
    opacity: 0,
  },
  "<"
);

master.to(
  ".are",
  {
    x: -60,
    y: -40,
    scale: 0.6,
    duration: 0.5,
  },
  "=-0.25"
);

master.to(".suspicious", {
  opacity: 1,
});

master.to(
  ".people, .are, .suspicious, .situation, .where",
  {
    opacity: 0,
    duration: 0.2,
  },
  "=+1"
);

// Fluids

// master.to(".fluids_mask", {
//   opacity: 1,
// });

master.fromTo(
  ".fluids_img",
  {
    opacity: 0,
    scale: 0,
  },
  { opacity: 1, scale: 1, ease: "back.out(1.7)" }
);

master.from(".any1", {
  y: -125,
  ease: "back.out(0.75)",
});

// master.to(".fluids_mask", {
//   opacity: 0,
// });

master.fromTo(
  ".fluids",
  {
    y: -20,
    opacity: 0,
  },
  {
    y: 5,
    ease: "back.out(0.75)",
    opacity: 1,
  }
);

master.to(".fluids", {
  x: -250,
  ease: "back.in(1.7)",
  duration: 0.5,
});

master.to(
  ".any1",
  {
    x: 250,
    ease: "back.in(1.7)",
    duration: 0.5,
  },
  "<"
);

master.to(
  ".fluids_img",
  {
    scale: 0,
    ease: "back.in(1.7)",
  },
  "<"
);

// Handshake

master.to(".any2", {
  opacity: 1,
});

master.to(
  ".handshake",
  {
    opacity: 1,
  },
  "=-0.25"
);

master.to(
  ".or",
  {
    opacity: 1,
  },
  "=-0.25"
);

master.to(
  ".human",
  {
    opacity: 1,
  },
  "=-0.25"
);

master.to(".contact_woman_img, .contact_man_img, .contact_child_img", {
  opacity: 1,
});

master.from(
  ".contact_man_img",
  {
    x: -40,
  },
  "<"
);

master.from(
  ".contact_child_img",
  {
    x: 40,
  },
  "<"
);

// Ebola

master.from(
  ".red",
  {
    x: -300,
    ease: "back.out(1)",
  },
  "=+1"
);

master.to(
  ".any1, .handshake, .or, .human, .contact_child_img, .contact_man_img, .contact_woman_img, .any2",
  {
    opacity: 0,
  },
  "<"
);

// The Ebola virus

master.from(".ebola", {
  x: -275,
  y: -85,
  ease: "back.out(1)",
});

master.from(
  ".ebola_background",
  {
    x: -250,
    ease: "back.out(1)",
  },
  "=-0.15"
);

master.from(".virus", {
  x: 285,
  y: 135,
  ease: "back.out(0.3)",
});

master.from(
  ".virus_background",
  {
    x: 270,
    ease: "back.out(0.3)",
  },
  "=-0.15"
);

master.to(
  ".ebola",
  {
    x: -250,
    ease: "back.in(1)",
    duration: 0.75,
  },
  "=+1"
);

master.to(
  ".ebola_background",
  {
    opacity: 0,
    duration: 0.25,
  },
  "=-0.75"
);

master.to(
  ".virus",
  {
    x: 270,
    ease: "back.in(1)",
    duration: 0.75,
  },
  "=-0.5"
);

master.to(
  ".virus_background",
  {
    opacity: 0,
    duration: 0.25,
  },
  "=-0.75"
);

master.from(".yr", {
  x: -270,
  stagger: 0.25,
  ease: "back.out(1)",
});

master.from(
  ".africa3",
  {
    x: 300,
    ease: "power4.out",
  },
  "=-1"
);

master.to(
  ".yr",
  {
    x: -300,
    stagger: 0.15,
    ease: "back.out(1)",
  },
  "=+1"
);

master.to(
  ".virus_background, .red",
  {
    x: -300,
    duration: 0.25,
    ease: "power4.out",
  },
  "=-0.5"
);

master.to(
  ".africa3",
  {
    x: 300,
    ease: "power4.out",
  },
  "=-0.5"
);

// Outbreak;

master.to(".disease", {
  opacity: 1,
});

master.from(".outbreak", {
  x: -270,
  ease: "back.out(1)",
});

master.from(
  ".spread",
  {
    x: 250,
    ease: "back.out(1)",
  },
  "=-0.25"
);

master.to(".outbreak", {
  x: -50,
  y: -50,
  scale: 0.7,
  ease: "back.out(1)",
});
master.to(
  ".spread",
  {
    x: -55,
    y: -70,
    scale: 0.7,
    ease: "back.out(1)",
  },
  "=-0.25"
);

master.from(
  ".rate",
  {
    x: 250,
    ease: "back.out(1)",
  },
  "=+0.1"
);

master.to(
  ".outbreak, .spread",
  {
    x: -230,
    ease: "power4.out",
  },
  "=+0.75"
);

master.to(
  ".rate",
  {
    x: 230,
    ease: "power4.out",
  },
  "=-0.25"
);

// Estimated

master.from(
  ".estimated",
  {
    y: 170,
    ease: "back.out(1)",
  },
  "=-0.25"
);

master.from(
  ".there",
  {
    y: 170,
    ease: "back.out(1)",
  },
  "=-0.25"
);

master.to(
  ".estimated",
  {
    rotation: -90,
    scale: 0.8,
    x: -90,
    y: 30,
    ease: "back.out(1)",
    duration: 0.5,
  },
  "=+0.5"
);

master.to(
  ".there",
  {
    rotation: -90,
    scale: 0.8,
    x: -65,
    y: -4,
    ease: "back.out(1)",
    duration: 0.5,
  },
  "=-0.25"
);

master.to(
  "#numbers",
  {
    opacity: 1,
    innerText: 10000,
    snap: {
      innerText: 100,
      duration: 4,
    },
  },
  ">"
);

master.to(".cases", {
  opacity: 1,
});

master.to(
  ".estimated, .there",
  {
    x: -170,
    opacity: 0,
  },
  "=+0.25"
);

master.to(
  "#numbers",
  {
    scale: 1.5,
    x: -30,
    y: 30,
  },
  "<"
);

master.to(
  ".cases",
  {
    x: -60,
    y: 40,
  },
  "<"
);

master.to(".disease", {
  opacity: 0,
});

master.to(
  "#numbers, .cases",
  {
    opacity: 0,
  },
  "=+1"
);

// End

master.to(".end_text", {
  opacity: 1,
});

master.to(".website", {
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
