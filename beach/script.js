let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let travel = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
travel.pause();

travel.to(
  ".right, .left",
  {
    opacity: 1,
  },
  "=+1"
);

travel.to(".master", { opacity: 0 }, ">");

travel.to(".right", {
  x: -235,
  y: -200,
  duration: 0.35,
  ease: "back.in(1.25)",
});

travel.to(
  ".left",
  {
    x: 235,
    y: 200,
    duration: 0.35,
    ease: "back.in(1.25)",
  },
  "<"
);

travel.to(
  ".circle",
  {
    opacity: 1,
  },
  "=-0.15"
);

travel.fromTo(
  ".umbrella",
  { opacity: 0, scale: 0 },
  {
    opacity: 1,
    scale: 1,
    duration: 0.45,
    transformOrigin: "bottom bottom",
    ease: Bounce.easeOut,
  },
  "=-0.3"
);
travel.fromTo(
  ".shell",
  { opacity: 0, scale: 0 },
  {
    opacity: 1,
    scale: 1,
    duration: 0.45,
    transformOrigin: "bottom bottom",
    ease: Bounce.easeOut,
  },
  "=-0.3"
);
travel.fromTo(
  ".cocktail1",
  { opacity: 0, scale: 0 },
  {
    opacity: 1,
    scale: 1,
    duration: 0.45,
    transformOrigin: "bottom bottom",
    ease: Bounce.easeOut,
  },
  "=-0.3"
);

travel.fromTo(
  ".fries",
  { opacity: 0, scale: 0 },
  {
    opacity: 1,
    scale: 1,
    duration: 0.45,
    transformOrigin: "bottom bottom",
    ease: Bounce.easeOut,
  },
  "=-0.3"
);

travel.fromTo(
  ".ball",
  { opacity: 0, scale: 0 },
  {
    opacity: 1,
    scale: 1,
    duration: 0.45,
    transformOrigin: "bottom bottom",
    ease: Bounce.easeOut,
  },
  "=-0.3"
);

travel.fromTo(
  ".sandals",
  { opacity: 0, scale: 0 },
  {
    opacity: 1,
    scale: 1,
    duration: 0.45,
    transformOrigin: "bottom bottom",
    ease: Bounce.easeOut,
  },
  "=-0.3"
);

travel.fromTo(
  ".chair",
  { opacity: 0, scale: 0 },
  {
    opacity: 1,
    scale: 1,
    duration: 0.45,
    transformOrigin: "bottom bottom",
    ease: Bounce.easeOut,
  },
  "=-0.3"
);

travel.fromTo(
  ".ring",
  { opacity: 0, scale: 0 },
  {
    opacity: 1,
    scale: 1,
    duration: 0.45,
    transformOrigin: "bottom bottom",
    ease: Bounce.easeOut,
  },
  "=-0.3"
);

travel.fromTo(
  ".burger",
  { opacity: 0, scale: 0 },
  {
    opacity: 1,
    scale: 1,
    duration: 0.45,
    transformOrigin: "bottom bottom",
    ease: Bounce.easeOut,
  },
  "=-0.3"
);

travel.fromTo(
  ".lotion",
  { opacity: 0, scale: 0 },
  {
    opacity: 1,
    scale: 1,
    duration: 0.45,
    transformOrigin: "bottom bottom",
    ease: Bounce.easeOut,
  },
  "=-0.3"
);

travel.fromTo(
  ".icecream",
  { opacity: 0, scale: 0 },
  {
    opacity: 1,
    scale: 1,
    duration: 0.45,
    transformOrigin: "bottom bottom",
    ease: Bounce.easeOut,
  },
  "=-0.3"
);

travel.fromTo(
  ".logo",
  { opacity: 0, scale: 0 },
  {
    opacity: 1,
    scale: 1,
    delay: 1,
    transformOrigin: "center center",
    ease: Power4.easeOut,
  },
  "=-1.5"
);

pause.addEventListener("click", () => {
  travel.paused(!travel.paused());
  if (travel.progress() == 1) {
    travel.restart();
  }
  pause.innerHTML = travel.paused() ? "Play" : "Pause";
});
