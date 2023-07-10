let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

// Variables
const background = select("#background");
const title = select("#title");
const background_A = select("#background_A");
const balloon_A = select("#balloon_A");
const background_B = select("#background_B");
const balloon_B = select("#balloon_B");
const text1 = select("#text1");
const text2 = select("#text2");
const web = select("#web");
const phone = select("#phone");
const twitter = select("#twitter");
const textOpacity = 1;

// Set the elements
gsap.set(".container", { autoAlpha: 1 });
gsap.set(background_A, { transformOrigin: "center center" });

const master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

// Intro

master.to(title, {
  opacity: textOpacity,
  y: -20,
  duration: 1.5,
  ease: "power2.easeIn",
});
// Image1
master
  .to([title, background], { duration: 0, opacity: 0 }, "+=1")
  .from(background_A, { duration: 3, scale: 2 }, "-=2")
  .to(balloon_A, { duration: 2, y: -70, ease: "power2.easeIn" }, "-=1.5")
  .from(
    text1,
    { duration: 2, opacity: 0, y: 80, ease: "power3.easeIn" },
    "-=1"
  );

// Image2
master
  .from(background_B, { opacity: 0, duration: 3, scale: 2 }, "+=0.5")
  .to([balloon_A, background_A, text1], { duration: 0, opacity: 0 }, "<")
  .to(balloon_B, { opacity: 1 }, "-=1.5")
  .to(balloon_B, { duration: 2, y: -70, ease: "power2.easeIn" }, "<")
  .from(
    text2,
    { duration: 2, opacity: 0, y: 80, ease: "power3.easeIn" },
    "-=1"
  );

// End

master.to(
  web,
  {
    opacity: textOpacity,
  },
  ">"
);

master.to(
  phone,
  {
    opacity: textOpacity,
  },
  ">"
);

master.to(
  twitter,
  {
    opacity: textOpacity,
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
