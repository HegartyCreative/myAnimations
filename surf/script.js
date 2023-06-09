let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const video = select(".video");

let pause = select("#pause");

gsap.set(".container", { autoAlpha: 1 });

// When the video extends, the playhead moves back to two seconds and plays endless loop
var Video = document.querySelector('video');
Video.onended = function(e) {
  Video.currentTime = 0.1;
  Video.play();
};

// Intro
var tl = gsap.timeline({
  paused: true,
  onComplete: () => (pause.innerHTML = "Play"),
});
tl

.to(".start_logo", {
  autoAlpha: 0,
  y: 50,
  duration: 0.5,
  ease: "back.in(1.5)"
})

  .add(() => {
    video.play();
  }, 0)

  .fromTo(
    ".logo",
    { opacity: 0 },
    {
      opacity: 1,
    },
    "=+1"
  )

  .fromTo(
    "h1",
    { opacity: 0, y: 0 },
    {
      opacity: 1,
      y: 30,
      ease: "back.out(1.7)",
      duration: 0.75,
    },
    ">"
  )

  .fromTo(
    "h2",
    { opacity: 0, y: 0 },
    {
      opacity: 1,
      y: 10,
      ease: "back.out(1.7)",
      duration: 0.75,
    },
    "-=0.25"
  )

  .fromTo(
    ".book",
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      ease: "back.out(1.7)",
      duration: 0.75,
    },
    "-=0.5"
  )



// Button code

pause.addEventListener("click", () => {
  if (tl.paused()) {
    tl.paused(false);
    video.play();
  } else {
    tl.paused(true);
    video.pause();
  }

  if (tl.progress() == 1) {
    tl.restart();
    video.play();
  }
  pause.innerHTML = tl.paused() ? "Play" : "Pause";
});
