let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let music = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
music.pause();

music.fromTo(
  "h2",
  { opacity: 1 },
  { opacity: 0, ease: "power.out(4)" },
  "=+0.4"
);

music.fromTo(
  ".main",
  { opacity: 0 },
  { opacity: 1, ease: "power.out(4)" },
  "=+0.4"
);
music.fromTo(
  "h3",
  { opacity: 0, y: 5 },
  { opacity: 1, y: 0, duration: 0.25, ease: "power.out" },
  "=+0.05"
);

music.fromTo("h1", { x: -290 }, { x: 0, ease: "power.out" });

music.fromTo(
  ".checked",
  { opacity: 0, y: 5, scale: 0 },
  {
    opacity: 1,
    scale: 1.2,
    y: 0,
    stagger: 0.1,
    ease: "back.out(5)",
    duration: 0.5,
  },
  "=-0.75"
);

music.fromTo(
  "h4, h5",
  { y: 50 },
  { y: 0, ease: "power.out", duration: 0.25 },
  "=-0.75"
);

pause.addEventListener("click", () => {
  music.paused(!music.paused());
  if (music.progress() == 1) {
    music.restart();
  }
  pause.innerHTML = music.paused() ? "Play" : "Pause";
});
