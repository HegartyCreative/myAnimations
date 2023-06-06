let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

gsap.set(".container", { autoAlpha: 1 });

// using .set to set our properties and values on the elements in JS instead of in our CSS. You could also set these in CSS
// we are hiding a lot of the elements before animating them back in.
gsap.set("#mac", {
  transformOrigin: "bottom 0%",
  scale: 0,
});
gsap.set("#ipad", {
  transformOrigin: "bottom 0%",
  autoAlpha: 0,
  scale: 0,
});
gsap.set("#phone", {
  autoAlpha: 0,
  transformOrigin: "bottom 0%",
  scale: 0,
});
gsap.set("#stuff-on-mac", {
  autoAlpha: 0,
  transformOrigin: "bottom 0%",
  scale: 0,
});
gsap.set("#stuff-on-iphone", {
  autoAlpha: 0,
  transformOrigin: "bottom 0%",
  scale: 0,
});
gsap.set("#stuff-on-ipad", {
  autoAlpha: 0,
  transformOrigin: "right 0%",
  scale: 0,
});

// functions allow you to generate animations and glue them all together into a single timeline.
// You must remember to return them.

// this function is reusable because of our item parameter.
// I am using it to make several of the elements in my svg scale and become visible.
const visible = (item) => {
  let tl = gsap.timeline();
  tl.to(item, {
    duration: 0.5,
    scale: 1,
    //autoAlpha is GSAPs special property, that combines opacity and visibility into one property.
    autoAlpha: 1,
    ease: "elastic(1, 0.75)",
  });
  return tl;
};

// this function will animate the various bars on the devices. I pass in item as a parameter so I can select different elements to stagger in our master timeline below
const bars = (item) => {
  let tl = gsap.timeline();
  tl.to(item, 4, {
    scaleY: 0,
    transformOrigin: "bottom 0%",
    yoyo: true,
    repeat: -1,
    ease: "none",
    stagger: {
      amount: 1.5,
    },
  });
  return tl;
};

// this function will animate the various lines on the devices. I pass in item as a parameter so I can select different elements to stagger in our master timeline below
const lines = (item) => {
  let tl = gsap.timeline();
  tl.to(item, {
    duration: 2,
    autoAlpha: 0,
    transformOrigin: "center center",
    yoyo: true,
    repeat: -1,
    ease: "none",
    stagger: {
      amount: 1.5,
    },
  });
  return tl;
};

// this function will animate the various devices after then animate in. I pass in item as a parameter so I can select each individual device and animate their hover.
const device = (item) => {
  let tl = gsap.timeline();
  tl.to(item, {
    duration: 2,
    transformStyle: "preserve-3d",
    force3D: true,
    y: -10,
    z: -10,
    yoyo: true,
    repeat: -1,
    ease: "none",
  });
  return tl;
};

// After returning all of the tl's you can create a master timeline to run all of the animations.
//master timeline

const main = gsap.timeline({ delay: 0.5 });
onComplete: () => (pause.innerHTML = "Play"), main.timeScale(1.5);
main.add("s");
main.pause();
main
  .add(visible("#mac"), "s+=1.1")
  .add(visible("#phone"), "s+1.2")
  .add(visible("#ipad"), "s+1.3")
  .add(visible("#stuff-on-mac"), "s+1.4")
  .add(visible("#stuff-on-iphone"), "s+1.5")
  .add(visible("#stuff-on-ipad"), "s+1.6")
  .add(bars(".bar"), "s+1.6")
  .add(bars(".shade"), "s+1.6")
  .add(lines(".line"), "s+1.6")
  .add(lines(".line2"), "s+1.6")
  .add(device(".device"), "s+1.6")
  .add(device(".device2"), "s+1.6");
// Button code

pause.addEventListener("click", () => {
  main.paused(!main.paused());
  if (main.progress() == 1) {
    main.restart();
  }
  pause.innerHTML = main.paused() ? "Play" : "Pause";
});
