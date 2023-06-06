const master = gsap.timeline({ defaults: { duration: 0.75 } });

master.fromTo(
  "#circle",
  {
    x: -300,
  },
  {
    x: 0,
    ease: "back.out(1.5)",
  }
);
