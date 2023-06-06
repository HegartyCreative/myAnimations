let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

gsap.set(".container", { autoAlpha: 1 });

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

// Intro

master.set("#background", {
  transformOrigin: "bottom center",
  autoAlpha: 0,
  scale: 0,
});

master.set("#man", {
  transformOrigin: "bottom center",
  autoAlpha: 0,
  scale: 0,
});

master.set("#right_door", {
  transformOrigin: "right center",
});

master.set("#travel_background, #foreground, #sky", {
  autoAlpha: 0,
});

master.set(
  "#paris, #windmill, #china2, #china1, #ben, #pisa, #budda, #liberty, #long, #church",
  {
    transformOrigin: "bottom center",
    autoAlpha: 0,
    scale: 0,
  }
);

master.set("#white", {
  autoAlpha: 0,
});

// start of animation

const invisible = (item) => {
  let tl = gsap.timeline();
  tl.to(item, {
    autoAlpha: 0,
    ease: "power4.out",
    delay: 3,
  });
  return tl;
};

const visible = (item) => {
  let tl = gsap.timeline();
  tl.to(item, {
    duration: 1,
    scale: 1,
    autoAlpha: 1,
    ease: "power4.out",
  });
  return tl;
};

const sights = (item) => {
  let tl = gsap.timeline();
  tl.to(item, {
    scale: 1,
    duration: 0.25,
    autoAlpha: 1,
    ease: "back.out(1.7)",
  });
  return tl;
};

// master.pause();
master.to("h1.one", {
  opacity: 1,
  delay: 2,
  duration: 0.2,
});
master.to("h1.two", {
  opacity: 1,
  delay: 2,
  duration: 0.2,
});

master.to(
  "h1.one",
  {
    opacity: 0,
    duration: 0.2,
  },
  "<"
);

master.to("h1.three", {
  opacity: 1,
  delay: 2,
  duration: 0.2,
});

master.to(
  "h1.two",
  {
    opacity: 0,
    duration: 0.2,
  },
  "<"
);
master.add(invisible("#office, h1.three"));
master.add(visible("#background"), "-=1");
master.add(
  visible("#man", {
    duration: 0.25,
  }),
  "-=1"
);
master.to("#left_door", {
  scaleX: 0,
});

master.to(
  "#right_door",
  {
    scaleX: 0,
  },
  "<"
);

master.to(
  "#background",
  {
    scale: 2,
    duration: 1,
  },
  "-=0.25"
);

master.to(
  "#man",
  {
    scale: 1,
    y: -33,
  },
  "<"
);

master.to(
  "#travel_background, #foreground, #sky",
  {
    autoAlpha: 1,
  },
  "-=0.5"
);

master.add(sights("#pisa"));
master.add(sights("#china1"));
master.add(sights("#budda"));
master.add(sights("#windmill"));
master.add(sights("#long"));
master.add(sights("#church"));
master.add(sights("#paris"));
master.add(sights("#liberty"));
master.add(sights("#china2"));
master.add(sights("#ben"));
master.to(
  "h1.four",
  {
    opacity: 1,
    delay: 2,
  },
  "-=1.5"
);

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
