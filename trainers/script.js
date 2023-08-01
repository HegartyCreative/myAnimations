let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const container = select(".container");
const trainer = select("#trainer");
const circle1 = select("#circle1");
const circle2 = select("#circle2");
const price = select("#price");
const priceFull = select("#priceFull");
const priceOffer = select("#priceOffer");
const line = select("#line");
const company = select("#company");
const telephone = select("#telephone");
let exitTime = 0;

gsap.set(".container", { autoAlpha: 1 });

let master = gsap.timeline({ paused: true });

master.set(trainer, {
  transformOrigin: "top center",
});

master.set(circle1, {
  transformOrigin: "left top",
});

master.set(circle2, {
  transformOrigin: "right bottom",
});

master.set(line, {
  transformOrigin: "bottom left",
});

// Start of animation

master.to(trainer, {
  scale: 0.9,
  y: -30,
  x: 50,
  duration: 0.75,
});

master.to(
  circle1,
  {
    scale: 1.3,
    duration: 0.75,
  },
  "-0.15"
);
master.to(
  circle2,
  {
    scale: 1.1,
    duration: 0.75,
  },
  "-0.15"
);

master.from(priceFull, {
  y: -90,
  ease: "Bounce.easeOut",
});

master.from(line, {
  opacity: 0,
});

master.to(
  priceFull,
  {
    scale: 0.7,
    y: -30,
  },
  "+=1"
);

master.to(
  line,
  {
    scale: 0.7,
    y: -34,
    x: 20,
  },
  "<"
);

master.from(priceOffer, {
  x: -140,
});

master.from(company, {
  opacity: 0,
});

master.from(
  telephone,
  {
    opacity: 0,
  },
  "-=0.25"
);

exitTime = master.duration();

// Set the elements

container.addEventListener("mouseenter", function () {
  if (master.time() < exitTime) {
    master.play();
  } else {
    master.restart();
  }
});

container.addEventListener("mouseleave", function () {
  if (master.time() < exitTime) {
    master.reverse();
  } else {
    master.play();
  }
});
