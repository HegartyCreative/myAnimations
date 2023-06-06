let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

const map = select(".map");
const masterImg = select(".masterImg");
const logo = select(".logo");
const intro = select(".intro");
const us = select(".us");
const new_york = select(".new_york");
const arg = select(".arg");
const buenos_aires = select(".buenos_aires");
const uk = select(".uk");
const london = select(".london");
const sp = select(".sp");
const madrid = select(".madrid");
const ger = select(".ger");
const frankfurt = select(".frankfurt");
const it = select(".it");
const rome = select(".rome");
const qa = select(".qa");
const doha = select(".doha");
const ind = select(".ind");
const new_dehli = select(".new_dehli");
const ch = select(".ch");
const beijing = select(".beijing");
const sk = select(".sk");
const seoul = select(".seoul");
const jap = select(".jap");
const tokyo = select(".tokyo");
const office = select(".office");
const melbourne = select(".melbourne");
const final = select(".final");

let pause = select("#pause");

gsap.set(".container", { autoAlpha: 1 });

let master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

// Intro

master

  .to(
    "h1",
    {
      opacity: 1,
      y: 30,
      ease: "power4.out",
      duration: 1,
    },
    ">"
  )

  .to(
    logo,
    {
      y: -45,
      scale: 0.7,
      ease: "power4.out",
      duration: 1,
    },
    "<"
  )

  .to(
    "h1",
    {
      opacity: 0,
    },
    "+=1"
  )

  .to(
    logo,
    {
      opacity: 0,
    },
    "<"
  )

  .to(
    "h2",
    {
      opacity: 1,
      x: 390,
      ease: "back.out(1.7)",
    },
    "-=0.25"
  )

  .from(
    map,
    {
      scale: 22,
      duration: 0.5,
      ease: "power4.out",
    },
    "+=2"
  )

  .to(
    "h2",
    {
      opacity: 0,
    },
    "<"
  )

  .to(
    masterImg,
    {
      opacity: 0,
    },
    "<"
  )

  // New York

  .to(
    map,
    {
      scale: 3,
      x: 170,
      y: 90,
      duration: 0.5,
      ease: "none",
    },
    "+=0.5"
  )

  .fromTo(
    us,
    {
      scale: 0,
    },
    {
      scale: 1,
      ease: "back.out(1.7)",
      duration: 0.5,
    },
    ">"
  )

  .fromTo(
    new_york,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      ease: "back.out(1.7)",
      duration: 0.5,
    },
    "-=0.25"
  )

  // Buenos Aires

  .to(
    us,
    {
      opacity: 0,
      duration: 0.25,
    },
    "+=1"
  )

  .to(
    new_york,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(map, {
    x: 150,
    y: -130,
    ease: "none",
  })

  .fromTo(
    arg,
    {
      scale: 0,
    },
    {
      scale: 1,
      ease: "back.out(1.7)",
      duration: 0.5,
    },
    ">"
  )

  .fromTo(
    buenos_aires,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      ease: "back.out(1.7)",
      duration: 0.5,
    },
    "-=0.25"
  )

  // London

  .to(
    arg,
    {
      opacity: 0,
    },
    "+=1"
  )

  .to(
    buenos_aires,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(map, {
    x: 25,
    y: 150,
    ease: "none",
    scale: 4,
  })

  .fromTo(
    uk,
    {
      scale: 0,
    },
    {
      scale: 1,
      ease: "back.out(1.7)",
      duration: 0.5,
    },
    ">"
  )

  .fromTo(
    london,
    {
      opacity: 0,
      y: -20,
    },
    {
      opacity: 1,
      y: 0,
      ease: "back.out(1.7)",
      duration: 0.5,
    },
    "-=0.25"
  )

  // Spain

  .fromTo(
    sp,
    {
      scale: 0,
    },
    {
      scale: 1,
      ease: "back.out(1.7)",
      duration: 0.5,
    },
    "+=0.5"
  )

  .fromTo(
    madrid,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      ease: "back.out(1.7)",
      duration: 0.5,
    },
    "-=0.25"
  )

  // Germany

  .fromTo(
    ger,
    {
      scale: 0,
    },
    {
      scale: 1,
      ease: "back.out(1.7)",
      duration: 0.5,
    },
    "+=0.5"
  )

  .fromTo(
    frankfurt,
    {
      opacity: 0,
      y: -20,
    },
    {
      opacity: 1,
      y: 0,
      ease: "back.out(1.7)",
      duration: 0.5,
    },
    "-=0.25"
  )

  // Rome

  .fromTo(
    it,
    {
      scale: 0,
    },
    {
      scale: 1,
      ease: "back.out(1.7)",
      duration: 0.5,
    },
    "+=0.5"
  )

  .fromTo(
    rome,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      ease: "back.out(1.7)",
      duration: 0.5,
    },
    "-=0.25"
  )

  // Qatar

  .to(
    uk,
    {
      opacity: 0,
      duration: 0.25,
    },
    "=+2"
  )

  .to(
    london,
    {
      opacity: 0,
      duration: 0.5,
    },
    "<"
  )

  .to(
    sp,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(
    madrid,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(
    ger,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(
    frankfurt,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(
    it,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(
    rome,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(map, {
    x: -130,
    y: 40,
    ease: "none",
    scale: 3,
  })

  .fromTo(
    qa,
    {
      scale: 0,
    },
    {
      scale: 1,
      ease: "back.out(1.7)",
      duration: 0.5,
    },
    ">"
  )

  .fromTo(
    doha,
    {
      opacity: 0,
      y: -20,
    },
    {
      opacity: 1,
      y: 0,
      ease: "back.out(1.7)",
      duration: 0.5,
    },
    "-=0.25"
  )

  // India

  .fromTo(
    ind,
    {
      scale: 0,
    },
    {
      scale: 1,
      ease: "back.out(1.7)",
      duration: 0.5,
    },
    "+=0.5"
  )

  .fromTo(
    new_dehli,
    {
      opacity: 0,
      y: -20,
    },
    {
      opacity: 1,
      y: 0,
      ease: "back.out(1.7)",
      duration: 0.5,
    },
    "-=0.25"
  )

  // China

  .to(
    ind,
    {
      opacity: 0,
      duration: 0.25,
    },
    "=+2"
  )

  .to(
    new_dehli,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(
    qa,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(
    doha,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(map, {
    x: -280,
    y: 80,
    ease: "none",
    scale: 3,
  })

  .fromTo(
    ch,
    {
      scale: 0,
    },
    {
      scale: 1,
      ease: "back.out(1.7)",
      duration: 0.25,
    },
    ">"
  )

  .fromTo(
    beijing,
    {
      opacity: 0,
      y: -20,
    },
    {
      opacity: 1,
      y: 0,
      ease: "back.out(1.7)",
      duration: 0.5,
    },
    "-=0.25"
  )

  // South Korea

  .fromTo(
    sk,
    {
      scale: 0,
    },
    {
      scale: 1,
      ease: "back.out(1.7)",
      duration: 0.5,
    },
    "=+0.5"
  )

  .fromTo(
    seoul,
    {
      opacity: 0,
      y: -20,
    },
    {
      opacity: 1,
      y: 0,
      ease: "back.out(1.7)",
      duration: 0.5,
    },
    "-=0.25"
  )

  // Japan

  .fromTo(
    jap,
    {
      scale: 0,
    },
    {
      scale: 1,
      ease: "back.out(1.7)",
      duration: 0.5,
    },
    "=+0.5"
  )

  .fromTo(
    tokyo,
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      ease: "back.out(1.7)",
      duration: 0.5,
    },
    "-=0.25"
  )

  /* Melbourne */

  .to(
    beijing,
    {
      opacity: 0,
      duration: 0.25,
    },
    "+=1"
  )

  .to(
    ch,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(
    sk,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(
    seoul,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(
    jap,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(
    tokyo,
    {
      opacity: 0,
      duration: 0.25,
    },
    "<"
  )

  .to(
    map,
    {
      x: 0,
      y: 0,
      scale: 1,
      ease: "none",
    },
    ">"
  )

  .to(
    office,
    {
      opacity: 1,
      x: 305,
      ease: "back.out(1.7)",
    },
    ">"
  )

  .to(
    melbourne,
    {
      x: 300,
      ease: "power4.out",
    },
    "+=1.5"
  )

  .to(
    final,
    {
      opacity: 1,
      y: -60,
      ease: "back.out(1.5)",
    },
    ">"
  );

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});
