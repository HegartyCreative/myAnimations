let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

gsap.set(".container", { autoAlpha: 1 });

let master = gsap.timeline({});

master.from("ellipse", {
  scale: 0,
  transformOrigin: "center center",
  stagger: 0.15,
  ease: "power4.out",
});

master.from(
  "#text path",
  {
    scale: 0,
    transformOrigin: "center center",
    stagger: 0.15,
    ease: "back.out(1.7)",
  },
  "-=0.85"
);
