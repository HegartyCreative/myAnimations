let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});

master.pause();

master.to(
  ".main_logo",
  {
    opacity: 0,
  },
  "=+1"
);

master.to(".start", {
  x: 300,
});

master.from(".supporting", {
  x: -255,
  ease: "back.out(1)",
});

master.from(".healthy", {
  x: 280,
  ease: "back.out(1)",
});

master.from(".diets", {
  x: -270,
  ease: "back.out(1)",
});

master.from(
  ".grapes",
  {
    y: 80,
    ease: "back.out(3)",
  },
  "=-0.4"
);

master.from(
  ".cherry",
  {
    y: 50,
    ease: "back.out(3)",
  },
  "=-0.3"
);

master.from(
  ".pear",
  {
    y: 50,
    ease: "back.out(3)",
  },
  "=-0.2"
);

master.to(
  ".supporting, .healthy, .diets, .grapes, .cherry, .pear",
  {
    opacity: 0,
  },
  "=+1"
);

master.to(".logo", {
  opacity: 1,
});

///////////////////////////////////////////////////////////////// ONE

// ONE ENTER

master.fromTo(
  ".left1",
  {
    y: -250,
    x: 0,
  },
  {
    y: 0,
    duration: 0.4,
    ease: "power1.out",
  },
  "<"
);

master.fromTo(
  ".right1",
  {
    y: 250,
    x: 0,
  },
  {
    y: 0,
    duration: 0.4,
    ease: "power1.out",
  },
  "<"
);

master.to(".intro", {
  opacity: 1,
});

master.fromTo(
  ".apple_left",
  {
    y: -250,
    x: 0,
  },
  {
    y: 0,
    duration: 0.5,
    ease: "back.out(1.7)",
  }
);

master.fromTo(
  ".pineapple_right",
  {
    y: 250,
    x: 0,
  },
  {
    y: 0,
    duration: 0.5,
    ease: "back.out(1)",
  },
  "<"
);

// ONE LEAVES

master.to(
  ".apple_left",
  {
    y: 250,
    ease: "back.in(1)",
  },
  "=+2"
);

master.to(
  ".left1",
  {
    y: 250,
    ease: "back.in(1)",
  },
  "<"
);

master.to(
  ".pineapple_right",
  {
    y: -250,
    ease: "back.in(1)",
  },
  "<"
);

master.to(
  ".right1",
  {
    y: -250,
    ease: "back.in(1)",
  },
  "<"
);

/////////////////////////////////////////////////////////////////// TWO

// TWO ENTER

master.fromTo(
  ".left2",
  {
    y: -250,
    x: 0,
  },
  {
    y: 0,
    duration: 0.4,
    ease: "power1.out",
  },
  "=+0.25"
);

master.fromTo(
  ".right2",
  {
    y: 250,
    x: 0,
  },
  {
    y: 0,
    duration: 0.4,
    ease: "power1.out",
  },
  "<"
);

master.fromTo(
  ".pomegranate_left",
  {
    y: -250,
    x: 0,
  },
  {
    y: 0,
    duration: 0.5,
    ease: "back.out(1.7)",
  }
);

master.fromTo(
  ".lime_right",
  {
    y: 250,
    x: 0,
  },
  {
    y: 0,
    duration: 0.5,
    ease: "back.out(1)",
  },
  "<"
);

// ONE LEAVES

master.to(
  ".pomegranate_left",
  {
    y: 250,
    ease: "back.in(1)",
  },
  "=+2"
);

master.to(
  ".left2",
  {
    y: 250,
    ease: "back.in(1)",
  },
  "<"
);

master.to(
  ".lime_right",
  {
    y: -250,
    ease: "back.in(1)",
  },
  "<"
);

master.to(
  ".right2",
  {
    y: -250,
    ease: "back.in(1)",
  },
  "<"
);

/////////////////////////////////////////////////////////////////// THREE

// THREE ENTER

master.fromTo(
  ".left3",
  {
    y: -250,
    x: 0,
  },
  {
    y: 0,
    duration: 0.4,
    ease: "power1.out",
  },
  "=+0.25"
);

master.fromTo(
  ".right3",
  {
    y: 250,
    x: 0,
  },
  {
    y: 0,
    duration: 0.4,
    ease: "power1.out",
  },
  "<"
);

master.fromTo(
  ".passionFruit_left",
  {
    y: -250,
    x: 0,
  },
  {
    y: 0,
    duration: 0.5,
    ease: "back.out(1.7)",
  }
);

master.fromTo(
  ".orange_right",
  {
    y: 250,
    x: 0,
  },
  {
    y: 0,
    duration: 0.5,
    ease: "back.out(1)",
  },
  "<"
);

// ONE LEAVES

master.to(
  ".passionFruit_left",
  {
    y: 250,
    ease: "back.in(1)",
  },
  "=+2"
);

master.to(
  ".left3",
  {
    y: 250,
    ease: "back.in(1)",
  },
  "<"
);

master.to(
  ".orange_right",
  {
    y: -250,
    ease: "back.in(1)",
  },
  "<"
);

master.to(
  ".right3",
  {
    y: -250,
    ease: "back.in(1)",
  },
  "<"
);

master.to(".intro", {
  opacity: 1,
});

// End code

master.from(
  ".endText1",
  {
    x: 289,
    ease: "back.out(1.7)",
  },
  "=-0.5"
);

master.from(
  ".endText2",
  {
    x: -280,
    ease: "back.out(1.7)",
  },
  "=-0.25"
);

master.from(
  ".banana",
  {
    y: 60,
    ease: "back.out(2)",
  },
  "=-0.25"
);

master.from(
  ".strawberry",
  {
    y: 65,
    ease: "back.out(2)",
  },
  "=-0.25"
);

master.from(
  ".peach",
  {
    y: 100,
    ease: "back.out(2)",
  },
  "=-0.25"
);

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
