let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

gsap.set(".container", { autoAlpha: 1 });

let retail = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
retail.pause();

// Intro

retail.set(".startingShape, .saleText", {
  opacity: 0,
});

retail.from(
  ".introText",
  {
    x: -140,
    ease: "back.out(1.7)",
  },
  ">"
);

retail.from(
  ".cta",
  {
    x: -120,
    ease: "back.out(1.7)",
  },
  "-=0.25"
);

retail.from(
  ".shape2",
  {
    x: -25,
    ease: "back.out(1.7)",
  },
  "-=0.25"
);

retail.from(
  ".shape1",
  {
    x: 95,
    ease: "back.out(1.7)",
  },
  "<"
);

// One
retail.from(".one", { x: 190, duration: 0.5, ease: "back.out(1.5)" }, "=+0.15");

retail.from(
  ".one_text_full",
  { x: -115, duration: 0.25, ease: "back.out(1.5)" },
  "=-0.25"
);
retail.to(".line1", { opacity: 1, duration: 0.25 }, "=+2");
retail.to(".one_text_full, .line1", {
  y: 110,
  ease: "back.in(1.7)",
});
retail.to(".line1", { backgroundColor: "white", duration: "0" }, "=-0.5");
retail.to(".one_text_full", { color: "white" }, "<");
retail.to(".one_text_discount", { opacity: 1, duration: 0.25 }, "=-0.25");
retail.to(".one, .one_text_discount", { opacity: 0, duration: 0.25 }, "=+2");

// Two
retail.from(".two", { x: 190, duration: 0.5, ease: "back.out(1.5)" }, "=+0.25");
retail.from(
  ".two_text_full",
  { x: -115, duration: 0.25, ease: "back.out(1.5)" },
  "=-0.25"
);
retail.to(".line2", { opacity: 1, duration: 0.25 }, "=+2");
retail.to(".two_text_full, .line2", {
  y: 110,
  ease: "back.in(1.7)",
});
retail.to(".line2", { backgroundColor: "white", duration: "0.25" }, "=-0.5");
retail.to(".two_text_full", { color: "white" }, "<");
retail.to(".two_text_discount", { opacity: 1, duration: 0.25 }, "=-0.25");
retail.to(".two, .two_text_discount", { opacity: 0, duration: 0.25 }, "=+2");

// Three
retail.from(
  ".three",
  { x: 190, duration: 0.5, ease: "back.out(1.5)" },
  "=+0.25"
);
retail.from(
  ".three_text_full",
  { x: -115, duration: 0.25, ease: "back.out(1.5)" },
  "=-0.25"
);
retail.to(".line3", { opacity: 1, duration: 0.25 }, "=+2");
retail.to(".three_text_full, .line3", {
  y: 110,
  ease: "back.in(1.7)",
});
retail.to(".line3", { backgroundColor: "white", duration: "0.25" }, "=-0.5");
retail.to(".three_text_full", { color: "white" }, "<");
retail.to(".three_text_discount", { opacity: 1, duration: 0.25 }, "=-0.25");
retail.to(
  ".three, .three_text_discount",
  { opacity: 0, duration: 0.25 },
  "=+2"
);

// Four
retail.from(
  ".four",
  { x: 190, duration: 0.5, ease: "back.out(1.5)" },
  "=+0.25"
);
retail.from(
  ".four_text_full",
  { x: -115, duration: 0.25, ease: "back.out(1.5)" },
  "=-0.25"
);
retail.to(".line4", { opacity: 1, duration: 0.25 }, "=+2");
retail.to(".four_text_full, .line4", {
  y: 110,
  ease: "back.in(1.7)",
});
retail.to(".line4", { backgroundColor: "white", duration: "0.25" }, "=-0.5");
retail.to(".four_text_full", { color: "white" }, "<");
retail.to(".four_text_discount", { opacity: 1, duration: 0.25 }, "=-0.25");

retail.to(
  ".four_text_discount, .four, .cta, .introText, .shape1, .shape2",
  {
    opacity: 0,
    duration: 0.1,
  },
  "=+0.5"
);

retail.to(
  ".saleText, .startingShape ",
  {
    opacity: 1,
    duration: 0.25,
  },
  "-=0.25"
);

// Button code

pause.addEventListener("click", () => {
  retail.paused(!retail.paused());
  if (retail.progress() == 1) {
    retail.restart();
  }
  pause.innerHTML = retail.paused() ? "Play" : "Pause";
});
