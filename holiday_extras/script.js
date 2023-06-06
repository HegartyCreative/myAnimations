let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const wallet_front = select(".wallet_front");
const wallet_back = select(".wallet_back");
const passport = select(".passport");
const ticket = select(".ticket");
const photo = select(".photo");
const suitcase = select(".suitcase");
const redeemer = select(".redeemer");
const paris = select(".paris");
const camera = select(".camera");
const liberty = select(".liberty");
const plane = select(".plane");
const taj = select(".taj");
const ben = select(".ben");
const start_logo = select(".start_logo");
const introduction = select(".introduction");
const depart = select(".depart");

gsap.set(".container", { autoAlpha: 1 });

let pause = select("#pause");

const master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

gsap.defaults({
  ease: "power2.in",
  duration: 0.35,
});

master
  .to(start_logo, {
    opacity: 0,
  })
  .from(wallet_front, {
    y: -100,
    x: 280,
    duration: 0.4,
    ease: "back.out(1.7)",
    rotation: 45,
    transformOrigin: "left 50%",
  })

  .from(
    wallet_back,
    {
      y: -100,
      x: 280,
      duration: 0.4,
      ease: "back.out(1.7)",
      rotation: 45,
      transformOrigin: "left 50%",
    },
    "<"
  )

  .to(
    passport,
    {
      opacity: 1,
    },
    "=-0.25"
  )

  .to(
    photo,
    {
      opacity: 1,
    },
    "<"
  )

  .to(
    suitcase,
    {
      opacity: 1,
    },
    "<"
  )

  .to(
    redeemer,
    {
      opacity: 1,
    },
    "<"
  )

  .to(
    ticket,
    {
      opacity: 1,
    },
    "<"
  )

  .to(
    paris,
    {
      opacity: 1,
    },
    "<"
  )

  .to(
    camera,
    {
      opacity: 1,
    },
    "<"
  )

  .to(
    taj,
    {
      opacity: 1,
    },
    "<"
  )

  .to(
    liberty,
    {
      opacity: 1,
    },
    "<"
  )

  .to(
    ben,
    {
      opacity: 1,
    },
    "<"
  )

  .from(
    passport,
    {
      y: 40,
      x: 30,
      duration: 0.5,
      ease: "back.out(1.7)",
    },
    "=+0.5"
  )
  .from(
    photo,
    {
      y: 40,
      duration: 0.5,
      ease: "back.out(1.7)",
    },
    "=-0.25"
  )

  .from(
    redeemer,
    {
      y: 110,
      x: 40,
      duration: 0.5,
      ease: "back.out(1.7)",
    },
    "=-0.25"
  )

  .from(
    suitcase,
    {
      y: 60,
      duration: 0.5,
      ease: "back.out(1.7)",
    },
    "=-0.25"
  )

  .from(
    ticket,
    {
      y: 60,
      x: 50,
      duration: 0.5,
      ease: "back.out(1.7)",
    },
    "=-0.15"
  )

  .from(
    paris,
    {
      y: 120,
      duration: 0.5,
      ease: "back.out(1.7)",
    },
    "=-0.25"
  )

  .from(
    camera,
    {
      y: 50,
      duration: 0.5,
      ease: "back.out(1.7)",
    },
    "=-0.25"
  )

  .from(
    taj,
    {
      y: 80,
      duration: 0.5,
      ease: "back.out(1.7)",
    },
    "=-0.25"
  )

  .from(
    liberty,
    {
      y: 120,
      duration: 0.5,
      ease: "back.out(1.7)",
    },
    "=-0.25"
  )

  .from(
    ben,
    {
      y: 110,
      x: -30,
      duration: 0.5,
      ease: "back.out(1.7)",
    },
    "=-0.25"
  )

  .to(
    introduction,
    {
      opacity: 0,
      duration: 0.25,
    },
    "=+1"
  )

  .to(
    wallet_back,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(
    paris,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(
    redeemer,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(
    passport,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(
    ticket,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(
    ben,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(
    liberty,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(
    camera,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(
    taj,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(
    photo,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(
    suitcase,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  );

master.to(
  start_logo,
  {
    opacity: 1,
  },
  "-=0.25"
);

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
