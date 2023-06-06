let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let master = gsap.timeline({});

master.from(".house", {
  attr: {
    points: "90 364 90 364 227 363 363 363 363 363",
  },
  ease: "bounce",
  duration: 0.75,
});

points = "90 364 90 227 227 136 363 227 363 363";
