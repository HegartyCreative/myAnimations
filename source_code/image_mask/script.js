let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

gsap.set(".container", { autoAlpha: 1 });

let master = gsap.timeline({});

master.from(".sean", {
  xPercent: 100,
  ease: "expo.in",
  duration: 3,
});
