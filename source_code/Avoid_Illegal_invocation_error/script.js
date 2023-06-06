let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const ball1 = select(".ball1");
const ball2 = select(".ball2");
const ball3 = select(".ball3");
const ball = gsap.utils.toArray(".ball");

gsap.set(ball1, { autoAlpha: 0 });
gsap.set(ball2, { autoAlpha: 0 });
gsap.set(ball3, { autoAlpha: 0 });

let master = gsap.timeline({});

master.to(ball1, {
  autoAlpha: 1,
  y: 200,
  duration: 1,
  ease: "back.out(0.5)",
});

master.to(ball2, {
  autoAlpha: 1,
  y: 200,
  duration: 1,
  ease: "back.out(0.5)",
});

master.to(ball3, {
  autoAlpha: 1,
  y: 200,
  duration: 1,
  ease: "back.out(0.5)",
});

master.to(ball, {
  autoAlpha: 0,
});
