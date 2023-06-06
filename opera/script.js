let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

gsap.set(".container", { autoAlpha: 1 });

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

master
  .to(".sean", {
    transformOrigin: "center center",
    duration: 1.5,
    scale: 0.9,
    rotation: 49.5,
    ease: "none",
  })
  .to(
    "image, .starter",
    { duration: 1.5, scale: 1.5, transformOrigin: "50% 50%", x: 10 },
    "<"
  )

  .from(
    ".one",
    {
      x: -80,
      y: -100,
      ease: "Power4.easeOut",
    },
    "-=0.55"
  )

  .from(
    ".two",
    {
      x: -90,
      y: -110,
      ease: "Power4.easeOut",
    },
    "-=0.25"
  )

  .from(
    ".three",
    {
      x: -120,
      y: -140,
      ease: "Power4.easeOut",
    },
    "-=0.25"
  )

  .from(
    ".date",
    {
      x: -85,
      y: -80,
      ease: "Power4.easeOut",
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
