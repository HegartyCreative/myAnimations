const demo = document.querySelector(".demo");
const tl = gsap
  .timeline({ defaults: { duration: 1.3 } })
  .to(demo, { attr: { viewBox: "0 0 100 100" } })
  .to(demo, { attr: { viewBox: "0 100 100 100" } })
  .to(demo, { attr: { viewBox: "100 0 100 100" } })
  .to(demo, { attr: { viewBox: "100 100 100 100" } })
  .to(demo, { attr: { viewBox: "0 0 200 200" } });
