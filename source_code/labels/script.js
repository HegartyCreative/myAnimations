let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const container = select(".container");
const square = select(".square");
const circle = select(".circle");

gsap.set(container, { autoAlpha: 1 });

// Nested timeline
var master = gsap.timeline({
  paused: true,
  onComplete: () => (pause.innerHTML = "Play"),
});

// move element horizontally 100px
master
  .to(square, 0.5, {
    x: 100,
  })
  .add("go") // add a label
  // move element vertically 100px
  // with reference to the 'go' label
  .to(
    square,
    1,
    {
      y: 100,
    },
    "go"
  )
  // rotate otherElement
  // with reference to the 'go' label
  .to(
    circle,
    0.5,
    {
      scale: 3,
    },
    "go"
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
