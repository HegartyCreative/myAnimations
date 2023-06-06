let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});

master.pause();

master.to(".logo2", {
  opacity: 0,
});

master.fromTo(
  "#mountain1",
  {
    scaleY: 0,
    transformOrigin: "bottom bottom",
  },
  {
    scaleY: 1,
    transformOrigin: "bottom bottom",
    ease: "back.out(2)",
    stagger: 0.25,
  },
  "<"
);

master.fromTo(
  "#Statue1, #liberty, #building1, #mountain2, #pisa, #ben, #mountain3, #building1, #building2, #building3, #arc, #windmill ",
  {
    scaleY: 0,
    transformOrigin: "bottom bottom",
  },
  {
    scaleY: 1,
    transformOrigin: "bottom bottom",
    ease: "back.out(2)",
    stagger: 0.25,
  }
);

master.to(
  "#clouds, #sun, #balloon",
  {
    opacity: 1,
    stagger: 0.25,
  },
  "=-3"
);

master.fromTo(
  ".logo",
  {
    opacity: 0,
    scale: 0,
  },
  {
    opacity: 1,
    scale: 1,
    ease: "back.out(1.5)",
  }
);

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
