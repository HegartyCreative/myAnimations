let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

gsap.set(".container", { autoAlpha: 1 });

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

master.set("#car_layer", {
  transformOrigin: "center center",
  scale: 0,
});

master.set("#car_text", {
  transformOrigin: "center center",
  scale: 0,
});

master.set("#boat_layer", {
  transformOrigin: "center center",
  scale: 0,
});

master.set("#boat_text", {
  transformOrigin: "center center",
  scale: 0,
});

master.set("#train_layer", {
  transformOrigin: "center center",
  scale: 0,
});

master.set("#train_text", {
  transformOrigin: "center center",
  scale: 0,
});

master.set("#bike_layer", {
  transformOrigin: "center center",
  scale: 0,
});

master.set("#bike_text", {
  transformOrigin: "center center",
  scale: 0,
});

master.set("#bus_layer", {
  transformOrigin: "center center",
  scale: 0,
});

master.set("#bus_text", {
  transformOrigin: "center center",
  scale: 0,
});

master.set("#plane_layer", {
  transformOrigin: "center center",
  scale: 0,
});

master.set("#plane_text", {
  transformOrigin: "center center",
  scale: 0,
});

master.set("#camera", {
  transformOrigin: "center center",
  scale: 0,
});

master.set("#passport", {
  transformOrigin: "bottom center",
  scale: 0,
});

master.set("#tickets", {
  transformOrigin: "center center",
  scale: 0,
});

master.set("#luggage", {
  transformOrigin: "center center",
  scale: 0,
});

master.set("#money", {
  transformOrigin: "center center",
  scale: 0,
});

master.set("#bon_text", {
  opacity: 0,
});

master.set("#voyage_text", {
  opacity: 0,
});

master.set("#and_text", {
  transformOrigin: "center center",
  scale: 0,
});

master.set("#olivia", {
  transformOrigin: "bottom center",
  scale: 0,
});

master.set("#jack", {
  transformOrigin: "bottom center",
  scale: 0,
});

// Intro

master.to("#start", {
  opacity: 0,
});

master.to("#olivia", {
  opacity: 1,
  scale: 1,
  ease: "back.out(1.5)",
});

master.to(
  "#jack",
  {
    opacity: 1,
    scale: 1,
    ease: "back.out(1.5)",
  },
  "-=0.25"
);

master.from("#olivia_text", {
  x: -150,
  ease: "back.out(1)",
});

master.from(
  "#jack_text",
  {
    x: 150,
    ease: "back.out(1)",
  },
  "<"
);

master.to(
  "#and_text",
  {
    opacity: 1,
    scale: 1.2,
    ease: "back.out(2)",
    transformOrigin: "center center",
  },
  ">"
);

master.from(
  "#travelling_text",
  {
    y: 50,
    ease: "back.out(1)",
  },
  "<"
);

master.from(
  "#transport",
  {
    y: 50,
  },
  "+=2"
);

master.to(
  "#travelling_text",
  {
    opacity: 0,
  },
  "<"
),
  "+=2";

master.to(
  "#olivia, #jack, #transport, #olivia_text, #jack_text, #and_text",
  {
    opacity: 0,
  },
  "+=2"
);
// Car

master.to("#car_layer", {
  scale: 0.8,
  opacity: 1,
  transformOrigin: "center center",
});

master.to(
  "#car_text",
  {
    scale: 1,
    opacity: 1,
    transformOrigin: "center center",
  },
  ">"
);

master.to("#car", {
  x: -60,
  duration: 1.5,
  ease: "power1.in",
});

master.to(
  "#car_layer",
  {
    scale: 0.35,
    transformOrigin: "center center",
    x: -95,
    y: -50,
    duration: 0.25,
  },
  "-=2"
);

// Boat

master.to("#boat_layer", {
  scale: 0.8,
  opacity: 1,
  transformOrigin: "center center",
});

master.to(
  "#boat_text",
  {
    scale: 1,
    opacity: 1,
    transformOrigin: "center center",
  },
  ">"
);

master.to("#boat", {
  x: -30,
  duration: 1.5,
  ease: "power1.in",
});

master.to(
  "#boat_layer",
  {
    scale: 0.35,
    transformOrigin: "center center",
    x: -1,
    y: -50,
    duration: 0.25,
  },
  "-=2"
);

// Train

master.to("#train_layer", {
  scale: 0.8,
  opacity: 1,
  transformOrigin: "center center",
});

master.to(
  "#train_text",
  {
    scale: 1,
    opacity: 1,
    transformOrigin: "center center",
  },
  ">"
);

master.to("#train", {
  x: -30,
  duration: 1.5,
  ease: "power1.in",
});

master.to(
  "#train_layer",
  {
    scale: 0.35,
    transformOrigin: "center center",
    x: 95,
    y: -50,
    duration: 0.25,
  },
  "-=2"
);

// Bike

master.to("#bike_layer", {
  scale: 0.8,
  opacity: 1,
  transformOrigin: "center center",
});

master.to(
  "#bike_text",
  {
    scale: 1,
    opacity: 1,
    transformOrigin: "center center",
  },
  ">"
);

master.to("#bike", {
  x: 30,
  duration: 1.5,
  ease: "power1.in",
});

master.to(
  "#bike_layer",
  {
    scale: 0.35,
    transformOrigin: "center center",
    x: -95,
    y: 50,
    duration: 0.25,
  },
  "-=2"
);

// Plane

master.to("#plane_layer", {
  scale: 0.8,
  opacity: 1,
  transformOrigin: "center center",
});

master.to(
  "#plane_text",
  {
    scale: 1,
    opacity: 1,
    transformOrigin: "center center",
  },
  ">"
);

master.to("#plane", {
  x: 30,
  y: -15,
  duration: 1.5,
  ease: "power1.in",
});

master.to(
  "#plane_layer",
  {
    scale: 0.35,
    transformOrigin: "center center",
    x: -1,
    y: 50,
    duration: 0.25,
  },
  "-=2"
);

// Bus

master.to("#bus_layer", {
  scale: 0.8,
  opacity: 1,
  transformOrigin: "center center",
});

master.to(
  "#bus_text",
  {
    scale: 1,
    opacity: 1,
    transformOrigin: "center center",
  },
  ">"
);

master.to("#bus", {
  x: -35,
  duration: 1.5,
  ease: "power1.in",
});

master.to(
  "#bus_layer",
  {
    scale: 0.35,
    transformOrigin: "center center",
    x: 95,
    y: 50,
    duration: 0.25,
  },
  "-=2"
);

master.to(
  "#olivia, #jack",
  {
    opacity: 1,
    scale: 0.9,
    y: -15,
  },
  "+=1"
);

master.to(
  "#car_layer, #car_text, #boat_layer, #boat_text, #train_layer, #train_text, #bike_layer, #bike_text, #plane_layer, #plane_text, #bus_layer, #bus_text",
  {
    autoAlpha: 0,
  },
  "<"
);

// end

master.to("#passport", {
  opacity: 1,
  scale: 1.2,
});

master.to(
  "#luggage",
  {
    opacity: 1,
    scale: 1.2,
  },
  "-=0.25"
);

master.to(
  "#tickets",
  {
    opacity: 1,
    scale: 1.2,
  },
  "-=0.25"
);

master.to(
  "#camera",
  {
    opacity: 1,
    scale: 1.2,
  },
  "-=0.25"
);

master.to(
  "#money",
  {
    opacity: 1,
    scale: 1.2,
  },
  "-=0.25"
);

master.to(
  "#bon_text",
  {
    opacity: 1,
    y: -10,
  },
  "-=0.25"
);

master.to("#voyage_text", {
  opacity: 1,
  y: -10,
});
// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
