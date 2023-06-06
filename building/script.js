let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});

master.pause();

const moveAnimation1 = () => {
  const tl = gsap.timeline();
  master.from(
    ".building_one, .building_six, .building_two, .building_five, .building_three, .building_four",
    {
      ease: "back.out(1.1)",
      y: 200,
      stagger: 0.15,
    }
  );
  return tl;
};

master.to(".start", {
  opacity: 0,
  duration: 0,
});

master.from(".floor", {
  x: -300,
  duration: 0.25,
});

master.add(moveAnimation1());

master.fromTo(
  ".main_heading",
  {
    y: -20,
    opacity: 0,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.25,
  },
  "=-0.5"
);

master.fromTo(
  ".sub_heading",
  {
    y: 5,
    opacity: 0,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.25,
  },
  "=-0.25"
);

master.to(
  ".intro",
  {
    y: -220,
    ease: "back.in(1.1)",
  },
  "=+2"
);

master.from(
  ".buildingOne",
  {
    x: -250,
    ease: "powerOut.4",
    duration: 0.5,
  },
  "=-0.25"
);

master.from(
  ".buildingTwo",
  {
    x: 250,
    ease: "powerOut.4",
    duration: 0.5,
  },
  "<"
);

master.from(
  ".lineTop",
  {
    y: -35,
    ease: "powerOut.4",
    duration: 0.5,
  },
  "<"
);

master.from(
  ".lineBottom",
  {
    y: 35,
    ease: "powerOut.4",
    duration: 0.5,
  },
  "<"
);

master.fromTo(
  ".category_heading",
  {
    y: -20,
    opacity: 0,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.25,
  }
);

master.fromTo(
  ".category_text",
  {
    y: 5,
    opacity: 0,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.25,
  },
  "=-0.25"
);

master.to(
  ".section1, .lineTop",
  {
    y: -220,
    ease: "back.in(1.1)",
  },
  "=+2"
);

master.to(
  ".lineBottom",
  {
    y: -220,
    ease: "back.in(1.1)",
  },
  "<"
);

master.from(
  ".buildingThree",
  {
    x: -250,
    ease: "powerOut.4",
    duration: 0.5,
  },
  "=-0.25"
);

master.from(
  ".lineTop2",
  {
    y: -35,
    ease: "powerOut.4",
    duration: 0.5,
  },
  "<"
);

master.from(
  ".lineBottom2",
  {
    y: 35,
    ease: "powerOut.4",
    duration: 0.5,
  },
  "<"
);

master.from(
  ".buildingFour",
  {
    x: 250,
    ease: "powerOut.4",
    duration: 0.5,
  },
  "<"
);

master.fromTo(
  ".category_heading2",
  {
    y: -20,
    opacity: 0,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.25,
  }
);

master.fromTo(
  ".category_text2",
  {
    y: 5,
    opacity: 0,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.25,
  },
  "=-0.25"
);

master.to(
  ".section2, .lineTop2",
  {
    y: -220,
    ease: "back.in(1.1)",
  },
  "=+2"
);

master.to(
  ".lineBottom2",
  {
    y: -220,
    ease: "back.in(1.1)",
  },
  "<"
);

master.from(
  ".buildingFive",
  {
    x: -250,
    ease: "powerOut.4",
    duration: 0.5,
  },
  "=-0.25"
);

master.from(
  ".lineTop3",
  {
    y: -35,
    ease: "powerOut.4",
    duration: 0.5,
  },
  "<"
);

master.from(
  ".lineBottom3",
  {
    y: 35,
    ease: "powerOut.4",
    duration: 0.5,
  },
  "<"
);

master.from(
  ".buildingSix",
  {
    x: 250,
    ease: "powerOut.4",
    duration: 0.5,
  },
  "<"
);

master.fromTo(
  ".category_heading3",
  {
    y: -20,
    opacity: 0,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.25,
  }
);

master.fromTo(
  ".category_text3",
  {
    y: 5,
    opacity: 0,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.25,
  },
  "=-0.25"
);

master.to(
  ".section3",
  {
    y: -220,
    ease: "back.in(1.1)",
  },
  "=+2"
);

master.to(
  ".lineTop3, .lineBottom2, .lineBottom3, .lineBottom",
  {
    opacity: 0,
    duration: 0,
  },
  "<"
);

master.to(
  ".master_logo",
  {
    opacity: 1,
  },
  "=+0.25"
);

master.fromTo(
  ".invite",
  {
    y: -20,
    opacity: 0,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.25,
  },
  "=-0.5"
);

master.fromTo(
  ".website",
  {
    y: 5,
    opacity: 0,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.25,
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
