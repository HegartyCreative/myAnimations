let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const music = select("#music > path");

let master = gsap.timeline({});

master.to(music, {
  x: -130,
});
