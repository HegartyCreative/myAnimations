let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let study = select("#study > g");
let worlds = select("#worlds > g");
let financial = select("#financial > g");
let globe = select("#globe");
let map = select("#map");
let line = select("#line");
let intro = select(".intro");
let join = select(".join");
let professionals = select(".professionals");
let based = select(".based");
let london = select(".london");
let figure1 = select("#figure1");
let network = select(".network");
let worldwide_section = select(".worldwide_section");
let and_title = select(".and_title");
let figure2 = select("#figure2");
let worldwide = select(".worldwide");
let students_img = gsap.utils.toArray("#students_img > *");
let fifty = select(".fifty");
let students = select(".students");
let average = select(".average");
let seven = select(".seven");
let years = select(".years");
let experience_img = select(".experience_img");
let choose = select(".choose");
let fifty2 = select(".fifty2");
let electives = select(".electives");
let electives_section = select(".electives_section");
let electives_outline = select("#outline");
let electives_img = select("#motar");
let end_section = select(".end_section");
let logo_line = select("#logo_line");
let heading_line = select("#heading_line");
let logo = select("#logo");
let heading = select("#heading");
let web = select("#web");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

// Set the elements

gsap.set(".container", { autoAlpha: 1 });
gsap.set(globe, { autoAlpha: 0, scale: 0, transformOrigin: "center center" });
gsap.set(line, { autoAlpha: 0 });
gsap.set(study, { autoAlpha: 0 });
gsap.set(worlds, { autoAlpha: 0 });
gsap.set(financial, { autoAlpha: 0 });
gsap.set(join, { autoAlpha: 0 });
gsap.set(figure1, { autoAlpha: 0 });
gsap.set(professionals, { autoAlpha: 0 });
gsap.set(based, { autoAlpha: 0 });
gsap.set(london, { autoAlpha: 0 });
gsap.set(and_title, { autoAlpha: 0 });
gsap.set(figure2, { autoAlpha: 0 });
gsap.set(worldwide, { autoAlpha: 0 });
gsap.set(map, { autoAlpha: 1 });
gsap.set(students_img, { autoAlpha: 0 });
gsap.set(average, { autoAlpha: 0 });
gsap.set(seven, { autoAlpha: 0, scale: 0, transformOrigin: "center center" });
gsap.set(years, { autoAlpha: 0 });
gsap.set(experience_img, {
  autoAlpha: 0,
  scale: 0,
  transformOrigin: "center center",
});
gsap.set(choose, { autoAlpha: 0 });
gsap.set(fifty2, { autoAlpha: 0 });
gsap.set(electives, { autoAlpha: 0 });
gsap.set(electives_outline, { autoAlpha: 0 });
gsap.set(electives_img, { autoAlpha: 0 });
gsap.set(heading, { autoAlpha: 0 });
gsap.set(web, { autoAlpha: 0 });

// Intro

master.fromTo(
  line,
  {
    y: -160,
    autoAlpha: 0,
  },
  {
    y: 0,
    ease: "back.out(1.5)",
    autoAlpha: 1,
  }
);

master.to(
  "#begin",
  {
    opacity: 0,
    duration: 0.2,
  },
  "<"
);

master.fromTo(
  study,
  {
    x: 0,
    autoAlpha: 0,
  },
  {
    x: 170,
    ease: "back.out(1.5)",
    autoAlpha: 1,
  },
  "-=0.15"
);

master.fromTo(
  worlds,
  {
    x: 0,
    autoAlpha: 0,
  },
  {
    x: 170,
    ease: "back.out(1.5)",
    autoAlpha: 1,
  },
  "-=0.25"
);

master.fromTo(
  financial,
  {
    x: 0,
    autoAlpha: 0,
  },
  {
    x: 170,
    ease: "back.out(1.5)",
    autoAlpha: 1,
  },
  "-=0.25"
);

master.to(
  globe,
  {
    opacity: 0,
  },
  "+=1"
);

master.to(
  ".intro",
  {
    x: 210,
    stagger: 0.25,
    ease: "back.in(0.5)",
  },
  "-=0.25"
);

master.to(
  map,
  {
    autoAlpha: 0,
  },
  "-=0.25"
);

master.to(
  line,
  {
    y: 180,
    ease: "back.in(1.5)",
  },
  "<"
);

// Professionals

master.to(join, {
  autoAlpha: 1,
});

master.to("#figure1", {
  autoAlpha: 1,
  innerText: 12000,
  snap: {
    innerText: 1,
    duration: 4,
  },
});

master.to(
  professionals,
  {
    autoAlpha: 1,
  },
  "-=0.5"
);

master.to(based, {
  autoAlpha: 1,
});

master.to(
  london,
  {
    autoAlpha: 1,
  },
  "<"
);

// 50000

master.from(
  worldwide_section,
  {
    left: -300,
  },
  "+=1.5"
);

master.to(
  globe,
  {
    autoAlpha: 1,
    scale: 1,
  },
  "-=0.25"
);

master.to(and_title, {
  autoAlpha: 1,
});

master.to("#figure2", {
  autoAlpha: 1,
  innerText: 50000,
  snap: {
    innerText: 1,
    duration: 4,
  },
});

master.to(worldwide, {
  autoAlpha: 1,
});

// Students

master.to(
  and_title,
  {
    x: 180,
    ease: "back.in(1.5)",
  },
  "+=1"
);

master.to(
  globe,
  {
    opacity: 0,
  },
  "<"
);

master.to(
  ".figure2",
  {
    x: -235,
    ease: "back.in(1.5)",
  },
  "-=0.25"
);

master.to(
  worldwide,
  {
    x: 225,
    ease: "back.in(1.5)",
  },
  "-=0.25"
);

// students

master.to(
  students_img,
  {
    autoAlpha: 1,
    duration: 0.75,
    stagger: 0.25,
  },
  "-=0.25"
);

master.fromTo(
  fifty,
  {
    autoAlpha: 0,
    y: -20,
  },
  {
    autoAlpha: 1,
    y: 0,
  },
  "-=0.25"
);

master.fromTo(
  students,
  {
    autoAlpha: 0,
    y: 20,
  },
  {
    autoAlpha: 1,
    y: 0,
  },
  "-=0.25"
);

// Average

master.to(
  fifty,
  {
    x: 180,
  },
  "+=0.5"
);

master.to(
  students,
  {
    x: -210,
  },
  "<"
);

master.to(
  students_img,
  {
    autoAlpha: 0,
  },
  "-=0.25"
);

master.to(
  average,
  {
    autoAlpha: 1,
  },
  ">"
);

master.fromTo(
  experience_img,
  {
    scale: 0,
    autoAlpha: 1,
  },
  {
    scale: 1,
    autoAlpha: 1,
    ease: "back.out(3)",
  },
  ">"
);

master.fromTo(
  seven,
  {
    scale: 0,
    autoAlpha: 1,
  },
  {
    scale: 1,
    autoAlpha: 1,
    ease: "back.out(3)",
  },
  "-=0.25"
);

master.to(
  years,
  {
    autoAlpha: 1,
  },
  "-=0.25"
);

// electives

master.from(
  electives_section,
  {
    left: 300,
  },
  "+=0.5"
);

master.to(
  electives_outline,
  {
    strokeDashoffset: 0,
    autoAlpha: 1,
    duration: 1,
    ease: "power4.out",
  },
  "-=0.25"
);

master.to(
  choose,
  {
    autoAlpha: 1,
  },
  "-=0.25"
);

master.to(
  fifty2,
  {
    autoAlpha: 1,
  },
  "-=0.25"
);

master.to(
  electives,
  {
    autoAlpha: 1,
  },
  "-=0.25"
);

master.to(
  electives_img,
  {
    autoAlpha: 1,
  },
  "-=0.25"
);

// End

master.from(
  end_section,
  {
    left: -300,
  },
  "+=1"
);

master.from(
  logo,
  {
    x: 80,
    ease: "power4.out",
  },
  ">"
);

master.from(
  logo_line,
  {
    x: 80,
    ease: "power4.out",
  },
  "-=0.25"
);

master.from(
  heading_line,
  {
    y: -240,
    ease: "back.out(1.7)",
  },
  "-=0.25"
);

master.to(
  heading,
  {
    autoAlpha: 1,
  },
  "-=0.25"
);

master.to(
  web,
  {
    autoAlpha: 1,
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
