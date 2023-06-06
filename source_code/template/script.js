let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

// Avoids error message in Chrome
gsap.config({
  nullTargetWarn: false,
  trialWarn: false,
});

gsap.set(".null", { opacity: 1 });

// Create varialbles

const id = select("#id");
const class = select("#class");


// Set the elements

gsap.set(".container", { autoAlpha: 1 });


// Functions

const circleAnim = (item) => {
  let master = gsap.timeline();
  master.fromTo(
    item,
    {
      scale: 0,
      autoAlpha: 0,
    },
    {
      scale: 1,
      autoAlpha: 1,
      ease: "back.out(1.5)",
    }
  );
  return master;
};

// Start animation

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();



// Incorporate timeline within function into main timeline
master.add(circleAnim(train_circle));




// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
