let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let nfl = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
nfl.pause();

gsap.set(".container", { autoAlpha: 1 });

nfl.to(".background_full", { opacity: 1 });
nfl.to(
  ".background_right",
  { x: -260, ease: "back.out(1)", duration: 0.6 },
  "=+0.25"
);
nfl.to(".mask1, .mask2, .mask3", { opacity: 1 }, "=+0.15");
nfl.from("h1", { x: 195, duration: 0.5, ease: "back.out(1.7)" }, "=-0.25");
nfl.from("h2", { x: 130, duration: 0.5, ease: "back.out(1.7)" }, "=-0.25");
nfl.to(".team1, .team2, .team3", { opacity: 1 });

nfl.fromTo(
  ".logo",
  { scale: 0, opacity: 0 },
  { scale: 1.4, ease: "bounce", opacity: 1, duration: 1 },
  "=-0.75"
);

nfl.from(".bills", { x: -90, ease: "power2.out", duration: 0.45 }), "=-1";
nfl.to(".ground1", { opacity: 1, duration: 0.25 });
nfl.from(".team1", { y: -18, ease: "back.out(2)", duration: 0.5 }, "=+0.05");

nfl.from(".titans", { x: -90, ease: "power2.out", duration: 0.45 });
nfl.to(".ground_1", { opacity: 1, duration: 0.25 });
nfl.from(".team2", { y: -18, ease: "back.out(2)", duration: 0.5 }, "=+0.05");

nfl.from(".jags", { x: -90, ease: "power2.out", duration: 0.45 });
nfl.to(".ground2", { opacity: 1, duration: 0.25 });
nfl.from(".team3", { y: -18, ease: "back.out(2)", duration: 0.5 }, "=+0.05");

pause.addEventListener("click", () => {
  nfl.paused(!nfl.paused());
  if (nfl.progress() == 1) {
    nfl.restart();
  }
  pause.innerHTML = nfl.paused() ? "Play" : "Pause";
});
