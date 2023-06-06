let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

// Avoids error message in Chrome
gsap.config({
  nullTargetWarn: false,
  trialWarn: false,
});

gsap.set(".null", { opacity: 1 });

// Create varialbles

const myClip = select("#myClip");

// Set the elements

gsap.set(".container", { autoAlpha: 1 });
gsap.set(myClip, {scale: 1, transformOrigin: "center center" });

// Start animation

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

master.to("#myClip", {
  scale: 1.2,
  duration: 5
})
// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
