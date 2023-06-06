let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const start = select(".start");
const introText = select(".introText");
const title = select(".title");
const map = select("#map > g");
const intro1 = select(".intro1");
const intro2 = select(".intro2");
const intro3 = select(".intro3");
const intro_section = select(".intro_section");
const customers = select("#customers");
const customers_no = select("#customers_no");
const experts = select("#experts");
const experts_no = select("#experts_no");
const companies = select("#companies");
const companies_no = select("#companies_no");
const countries = select("#countries");
const countries_no = select("#countries_no");
const counting = select("#counting");
const list = select("#list");
const entering = select("#entering");
const divider = select(".divider");
const digital = select("#digital");
const connectedOne = select(".connectedOne");
const firstImage = select("#firstImage");
const imageOne = select("#imageOne");
const mask1 = select("#mask1");
const connectedTwo = select(".connectedTwo");
const imageTwo = select("#imageTwo");
const mask2 = select("#mask2");
const endText = select(".endText");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

gsap.set(".container", { autoAlpha: 1 });
gsap.set(customers, { autoAlpha: 0 });
gsap.set(experts, { autoAlpha: 0 });
gsap.set(companies, { autoAlpha: 0 });
gsap.set(countries, { autoAlpha: 0 });
gsap.set(counting, { autoAlpha: 0 });
gsap.set(entering, { autoAlpha: 0 });
gsap.set(connectedOne, { autoAlpha: 0 });
gsap.set(firstImage, { autoAlpha: 0 });
gsap.set(mask1, { scale: 1, transformOrigin: "left center" });
gsap.set(connectedTwo, { autoAlpha: 0 });
gsap.set(mask2, { scale: 1, transformOrigin: "right center" });
gsap.set(secondImage, { autoAlpha: 0 });
gsap.set(endText, { autoAlpha: 0 });

// Set the elements

master.to(
  introText,
  {
    x: 300,
    ease: "back.in(1)",
    duration: 0.25,
  },
  "+=1"
);

master.to(
  start,
  {
    x: 300,
    duration: 0.5,
  },
  "-=0.15"
);

master.from(intro1, {
  x: -260,
  ease: "back.out(1.2)",
  duration: 0.45,
});

master.from(
  intro2,
  {
    x: 240,
    ease: "back.out(1.2)",
    duration: 0.45,
  },
  "-=0.25"
);

master.from(
  intro3,
  {
    x: -280,
    ease: "back.out(1.2)",
    duration: 0.55,
  },
  "-=0.25"
);

master.to(
  intro_section,
  {
    opacity: 0,
    duration: 0.2,
  },
  "+=2"
);

// Customers

master.to(customers, {
  autoAlpha: 1,
});

master.to(
  customers_no,
  {
    innerText: 2300,
    snap: {
      innerText: 1,
      duration: 2,
    },
  },
  "<"
);

// Experts

master.to(
  experts,
  {
    autoAlpha: 1,
  },
  "=+1"
);

master.to(
  experts_no,
  {
    innerText: 100,
    snap: {
      innerText: 1,
      duration: 2,
    },
  },
  "<"
);

master.to(
  customers,
  {
    autoAlpha: 0.4,
  },
  "-=0.25"
);

// Companies

master.to(
  companies,
  {
    autoAlpha: 1,
  },
  "=+1"
);

master.to(
  companies_no,
  {
    innerText: 12,
    snap: {
      innerText: 1,
      duration: 2,
    },
  },
  "<"
);

master.to(
  experts,
  {
    autoAlpha: 0.4,
  },
  "-=0.25"
);

// Countries

master.to(
  countries,
  {
    autoAlpha: 1,
  },
  "=+1"
);

master.to(
  countries_no,
  {
    innerText: 16,
    snap: {
      innerText: 1,
      duration: 2,
    },
  },
  "<"
);

master.to(
  companies,
  {
    autoAlpha: 0.4,
  },
  "-=0.25"
);

master.to(
  countries,
  {
    autoAlpha: 0.4,
  },
  "+=0.25"
);

// Counting

master.to(
  counting,
  {
    autoAlpha: 1,
  },
  "+=0.25"
);

master.to(customers, {
  x: 250,
  ease: "back.in(1.5)",
});

master.to(
  experts,
  {
    x: -245,
    ease: "back.in(1.5)",
  },
  "-=0.25"
);

master.to(
  companies,
  {
    x: 245,
    ease: "back.in(1.5)",
  },
  "-=0.25"
);

master.to(
  countries,
  {
    x: -245,
    ease: "back.in(1.5)",
  },
  "-=0.25"
);

master.to(
  counting,
  {
    x: 245,
    ease: "back.in(1.5)",
  },
  "-=0.25"
);

// Entering

master.to(
  entering,
  {
    autoAlpha: 1,
  },
  ">"
);

master.to(
  map,
  {
    opacity: 0,
  },
  "+=1"
);

master.to(
  entering,
  {
    x: 250,
    ease: "power4.out",
  },
  "<"
);

master.to(
  divider,
  {
    x: 300,
    ease: "power4.out",
  },
  "-=0.75"
);

master.fromTo(
  digital,
  {
    scale: 90,
    force3D: false,
  },
  {
    scale: 1,
    duration: 1,
    ease: "back.out(0.3)",
    force3D: false,
  },
  ">"
);

master.to(
  firstImage,
  {
    autoAlpha: 1,
  },
  "+=2"
);

master.to(
  digital,
  {
    autoAlpha: 0,
  },
  "<"
);

master.to(
  divider,
  {
    autoAlpha: 0,
  },
  "<"
);

// First image

master.to(
  connectedOne,
  {
    autoAlpha: 1,
  },
  "<"
);

master.to("#target1", {
  scaleY: 1.35,
  scaleX: 2.2,
  y: -10,
  x: 30,
  duration: 4,
  ease: "power4.out",
});

master.to(
  connectedOne,
  {
    y: -170,
    x: -20,
    scale: 1.05,
    duration: 4,
    ease: "power4.out",
  },
  "<"
);

master.to(imageOne, {
  x: -290,
  ease: "back.in(1)",
  duration: 0.5,
});
master.to(
  connectedOne,
  {
    x: 270,
    ease: "back.in(1)",
    duration: 0.5,
  },
  "-=0.25"
);

// Second image

master.to(
  secondImage,
  {
    autoAlpha: 1,
  },
  "+=0.25"
);

master.to(
  connectedTwo,
  {
    autoAlpha: 1,
  },
  ">"
);

master.to(
  "#target2",
  {
    scaleY: 1.5,
    scaleX: 2.8,
    y: -25,
    x: -170,
    duration: 4,
    ease: "power4.out",
  },
  ">"
);

master.to(
  connectedTwo,
  {
    y: 160,
    x: -30,
    scale: 1.05,
    duration: 4,
    ease: "power4.out",
  },
  "<"
);

master.to(imageTwo, {
  x: 290,
  ease: "back.in(1)",
  duration: 0.5,
});
master.to(
  connectedTwo,
  {
    x: -290,
    ease: "back.in(1)",
    duration: 0.5,
  },
  "-=0.25"
);

// End

master.to(
  endText,
  {
    y: 20,
    autoAlpha: 1,
  },
  "+=0.25"
);

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
