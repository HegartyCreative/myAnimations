let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const container = select(".container");
const square = gsap.utils.toArray(".square");

gsap.set(container, { autoAlpha: 1 });

var master = gsap.timeline({
  paused: true,
  onComplete: () => (pause.innerHTML = "Play"),
});

master.from(square, {
  y: -150,
  stagger: 0.25,
  ease: "back.out(3)",
  duration: 1,
});

master.to(
  square,
  {
    y: 300,
    stagger: 0.25,
    ease: "back.in(1.3)",
    duration: 1,
  },
  "+=1"
);

// Button code

pause.addEventListener("click", () => {
  if (master.paused()) {
    master.paused(false);
  } else {
    master.paused(true);
  }

  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
