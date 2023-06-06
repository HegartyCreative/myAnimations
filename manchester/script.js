let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const city_dark_large_blue = select("#city_dark_large_blue");
const city_light_large_blue = select("#city_light_large_blue");
const city_dark_small_blue = select("#city_dark_small_blue");
const city_light_small_blue = select("#city_light_small_blue");
const city_stripes = select("#city_stripes");
const white = select("#white");
const city_gold_shield_left = select("#city_gold_shield_left");
const city_gold_shield_right = select("#city_gold_shield_right");
const city_ship = select("#city_ship > g");
const city_red = select("#city_red");
const city_white = select("#city_white");
const city_m = select("#city_m");
const city_A = select("#city_A");
const city_N = select("#city_N");
const city_C = select("#city_C");
const city_H = select("#city_H");
const city_E = select("#city_E");
const city_S = select("#city_S");
const city_T = select("#city_T");
const city_E2 = select("#city_E2");
const city_R = select("#city_R");
const city_C2 = select("#city_C2");
const city_I = select("#city_I");
const city_T2 = select("#city_T2");
const city_Y = select("#city_Y");
const city_1 = select("#city_1");
const city_9 = select("#city_9");
const city_8 = select("#city_8");
const city_4 = select("#city_4");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

master.set(city_dark_large_blue, {
  transformOrigin: "center center",
  autoAlpha: 0,
  scale: 0,
});

master.set(city_dark_small_blue, {
  transformOrigin: "center center",
  autoAlpha: 0,
  scale: 0,
});

master.set(city_light_small_blue, {
  transformOrigin: "center center",
  autoAlpha: 0,
  scale: 0,
});

master.set(white, {
  transformOrigin: "center center",
  autoAlpha: 0,
  scale: 0,
});

master.set(city_gold_shield_left, {
  autoAlpha: 0,
});

master.set(city_gold_shield_right, {
  autoAlpha: 0,
});

master.set(city_stripes, {
  transformOrigin: "center center",
  autoAlpha: 0,
});

master.set(city_red, {
  transformOrigin: "center center",
  autoAlpha: 0,
  scale: 0,
});

master.set(city_white, {
  autoAlpha: 0,
});

master.set(city_m, {
  transformOrigin: "center center",
  autoAlpha: 0,
  scale: 0,
});

master.set(city_A, {
  transformOrigin: "center center",
  autoAlpha: 0,
  scale: 0,
});

master.set(city_N, {
  transformOrigin: "center center",
  autoAlpha: 0,
  scale: 0,
});

master.set(city_C, {
  transformOrigin: "center center",
  autoAlpha: 0,
  scale: 0,
});

master.set(city_H, {
  transformOrigin: "center center",
  autoAlpha: 0,
  scale: 0,
});

master.set(city_E, {
  transformOrigin: "center center",
  autoAlpha: 0,
  scale: 0,
});

master.set(city_S, {
  transformOrigin: "center center",
  autoAlpha: 0,
  scale: 0,
});

master.set(city_T, {
  transformOrigin: "center center",
  autoAlpha: 0,
  scale: 0,
});

master.set(city_Y, {
  transformOrigin: "center center",
  autoAlpha: 0,
  scale: 0,
});

master.set(city_C2, {
  transformOrigin: "center center",
  autoAlpha: 0,
  scale: 0,
});

master.set(city_I, {
  transformOrigin: "center center",
  autoAlpha: 0,
  scale: 0,
});

master.set(city_T2, {
  transformOrigin: "center center",
  autoAlpha: 0,
  scale: 0,
});

master.set(city_Y, {
  transformOrigin: "center center",
  autoAlpha: 0,
  scale: 0,
});

master.set(city_1, {
  autoAlpha: 0,
});

let pause = select("#pause");

gsap.set(".container", { autoAlpha: 1 });

////////////////////// Start of the animation /////////////////////////////////

master.to(city_dark_large_blue, {
  scale: 1,
  autoAlpha: 1,
  ease: "back.out(2)",
});

master.to(
  white,
  {
    scale: 1,
    autoAlpha: 1,
    ease: "back.out(2)",
  },
  "-=0.5"
);

master.to(
  city_light_large_blue,
  {
    strokeDashoffset: 0,
    autoAlpha: 1,
    duration: 1.5,
  },
  "-=0.25"
);

master.to(
  city_dark_small_blue,
  {
    scale: 1,
    autoAlpha: 1,
    ease: "back.out(2)",
  },
  "-=0.5"
);

master.to(
  city_light_small_blue,
  {
    autoAlpha: 1,
    scale: 1,
  },
  "-=0.25"
);

master.to(city_gold_shield_left, {
  autoAlpha: 1,
});

master.to(
  city_gold_shield_right,
  {
    autoAlpha: 1,
  },
  "-=0.25"
);

master.to(city_stripes, {
  autoAlpha: 1,
});

master.to(city_white, {
  autoAlpha: 1,
});

master.fromTo(
  city_ship,
  {
    x: 90,
  },
  {
    x: 0,
  }
);

master.to(city_red, {
  scale: 1,
  autoAlpha: 1,
  ease: "back.out(2)",
});

master.to(city_m, {
  autoAlpha: 1,
  scale: 1,
  ease: "back.out(2)",
  duration: 0.4,
});

master.to(
  city_A,
  {
    autoAlpha: 1,
    scale: 1,
    ease: "back.out(2)",
    duration: 0.4,
  },
  "-=0.25"
);

master.to(
  city_N,
  {
    autoAlpha: 1,
    scale: 1,
    ease: "back.out(2)",
    duration: 0.4,
  },
  "-=0.25"
);

master.to(
  city_C,
  {
    autoAlpha: 1,
    scale: 1,
    ease: "back.out(2)",
    duration: 0.4,
  },
  "-=0.25"
);

master.to(
  city_H,
  {
    autoAlpha: 1,
    scale: 1,
    ease: "back.out(2)",
    duration: 0.4,
  },
  "-=0.25"
);

master.to(
  city_E,
  {
    autoAlpha: 1,
    scale: 1,
    ease: "back.out(2)",
    duration: 0.4,
  },
  "-=0.25"
);

master.to(
  city_S,
  {
    autoAlpha: 1,
    scale: 1,
    ease: "back.out(2)",
    duration: 0.4,
  },
  "-=0.25"
);

master.to(
  city_T,
  {
    autoAlpha: 1,
    scale: 1,
    ease: "back.out(2)",
    duration: 0.4,
  },
  "-=0.25"
);

master.to(
  city_E2,
  {
    autoAlpha: 1,
    scale: 1,
    ease: "back.out(2)",
    duration: 0.4,
  },
  "-=0.25"
);

master.to(
  city_R,
  {
    autoAlpha: 1,
    scale: 1,
    ease: "back.out(2)",
    duration: 0.4,
  },
  "-=0.25"
);

master.to(
  city_C2,
  {
    autoAlpha: 1,
    scale: 1,
    ease: "back.out(2)",
    duration: 0.4,
  },
  "-=0.25"
);

master.to(
  city_I,
  {
    autoAlpha: 1,
    scale: 1,
    ease: "back.out(2)",
    duration: 0.4,
  },
  "-=0.25"
);

master.to(
  city_T2,
  {
    autoAlpha: 1,
    scale: 1,
    ease: "back.out(2)",
    duration: 0.4,
  },
  "-=0.25"
);

master.to(
  city_Y,
  {
    autoAlpha: 1,
    scale: 1,
    ease: "back.out(2)",
    duration: 0.4,
  },
  "-=0.25"
);

master.fromTo(
  city_1,
  {
    autoAlpha: 0,
    y: 15,
  },
  {
    autoAlpha: 1,
    y: 0,
    ease: "back.out(2)",
  }
);

master.fromTo(
  city_8,
  {
    autoAlpha: 0,
    y: 15,
  },
  {
    autoAlpha: 1,
    y: 0,
    ease: "back.out(2)",
  },
  "-=0.25"
);

master.fromTo(
  city_9,
  {
    autoAlpha: 0,
    y: 15,
  },
  {
    autoAlpha: 1,
    y: 0,
    ease: "back.out(2)",
  },
  "-=0.25"
);

master.fromTo(
  city_4,
  {
    autoAlpha: 0,
    y: 15,
  },
  {
    autoAlpha: 1,
    y: 0,
    ease: "back.out(2)",
  },
  "-=0.25"
);
// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
