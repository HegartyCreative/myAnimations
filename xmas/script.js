let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const father_xmas_big = select("#father_xmas_big");
const five = select("#five");
const myStore = select("#myStore");
const address = select("#address");
const six = select("#six");
const seven = select("#seven");
const sale = select("#sale");
const sale_assets = select("#sale_assets");
const nine = select("#nine");
const ten = select("#ten");
const eleven = select("#eleven");
const thirteen = select("#thirteen");
const fourteen = select("#fourteen");
const fifteen = select("#fifteen");
const title = select("#title");
const date_days = select("#date_days");
const date_month = select("#date_month");
const label = select("#label");
const label_50 = select("#label_50 > g");
const label_percentage = select("#label_percentage > g");
const label_off = select("#label_off > g");
const label_line = select("#label_line");
const label_selected = select("#label_selected");
const snowballs = gsap.utils.toArray("#snowballs > *");

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

gsap.set(".container", { autoAlpha: 1 });
gsap.set(label_line, { autoAlpha: 0 });
gsap.set(label_selected, { autoAlpha: 0 });
gsap.set(label, { autoAlpha: 1 });
gsap.set(five, { autoAlpha: 0, scale: 0, transformOrigin: "bottom right" });
gsap.set(myStore, { autoAlpha: 0 });
gsap.set(address, { autoAlpha: 0 });
gsap.set(six, { autoAlpha: 0, scale: 0, transformOrigin: "bottom left" });
gsap.set(seven, { autoAlpha: 0, scale: 0, transformOrigin: "bottom right" });
gsap.set(sale, { autoAlpha: 0 });
gsap.set(sale_assets, { autoAlpha: 0 });
gsap.set(nine, { autoAlpha: 0, scale: 0, transformOrigin: "bottom left" });
gsap.set(ten, { autoAlpha: 0, scale: 0, transformOrigin: "bottom right" });
gsap.set(eleven, { autoAlpha: 0, scale: 0, transformOrigin: "bottom left" });
gsap.set(thirteen, { autoAlpha: 0, scale: 0, transformOrigin: "bottom right" });
gsap.set(fourteen, { autoAlpha: 0, scale: 0, transformOrigin: "bottom left" });
gsap.set(fifteen, { autoAlpha: 0, scale: 0, transformOrigin: "bottom right" });
gsap.set(date_days, { autoAlpha: 0 });
gsap.set(date_month, { autoAlpha: 0 });
gsap.set(snowballs, { autoAlpha: 0 });
gsap.set(father_xmas_small, { autoAlpha: 0 });
gsap.set(father_xmas_small, {
  autoAlpha: 0,
  scale: 0,
  transformOrigin: "bottom center",
});

// Set the elements

master.to(father_xmas_big, {
  autoAlpha: 0,
  duration: 0.15,
});

master.to(five, {
  scale: 1,
  autoAlpha: 1,
});

master.to(
  myStore,
  {
    autoAlpha: 1,
  },
  "-=0.05"
);

master.to(
  address,
  {
    autoAlpha: 1,
  },
  "-=0.05"
);

master.to(
  six,
  {
    scale: 1,
    autoAlpha: 1,
  },
  "-=0.45"
);

master.to(seven, {
  scale: 1,
  autoAlpha: 1,
});

master.to(
  sale,
  {
    autoAlpha: 1,
  },
  "-=0.05"
);

master.to(
  sale_assets,
  {
    autoAlpha: 1,
  },
  "-=0.05"
);

master.to(
  nine,
  {
    scale: 1,
    autoAlpha: 1,
  },
  "-=0.45"
);

master.to(ten, {
  scale: 1,
  autoAlpha: 1,
});

master.to(eleven, {
  scale: 1,
  autoAlpha: 1,
});

master.to(thirteen, {
  scale: 1,
  autoAlpha: 1,
});

master.to(fourteen, {
  scale: 1,
  autoAlpha: 1,
});

master.to(fifteen, {
  scale: 1,
  autoAlpha: 1,
});

master.from(title, {
  x: 260,
  ease: "back.out(1.7)",
});

master.fromTo(
  date_days,
  {
    autoAlpha: 0,
    x: -10,
  },
  {
    autoAlpha: 1,
    x: 0,
  }
);

master.fromTo(
  date_month,
  {
    autoAlpha: 0,
    x: 10,
  },
  {
    autoAlpha: 1,
    x: 0,
  },
  "<"
);

master.from(label, {
  y: -90,
  ease: "back.out(1.7)",
});

master.fromTo(
  label_50,
  {
    x: -50,
  },
  {
    x: 0,
    duration: 0.25,
    ease: "back.out(1)",
  }
);

master.fromTo(
  label_percentage,
  {
    x: 20,
  },
  {
    x: 0,
    duration: 0.25,
    ease: "back.out(1)",
  }
);

master.fromTo(
  label_off,
  {
    x: 25,
  },
  {
    x: 0,
    duration: 0.25,
    ease: "back.out(1)",
  }
);

master.to(
  label_line,
  {
    autoAlpha: 1,
  },
  "-=0.25"
);

master.to(
  label_selected,
  {
    autoAlpha: 1,
  },
  "-=0.25"
);

master.to(
  snowballs,
  {
    autoAlpha: 1,
    duration: 4,
    stagger: 0.3,
  },
  "-=7"
);

master.to(father_xmas_small, {
  scale: 1,
  autoAlpha: 1,
  ease: "back.out(1.7)",
});

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
