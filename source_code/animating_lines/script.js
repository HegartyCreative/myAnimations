const curve = document.querySelector("#curve");
let length = curve.getTotalLength();
console.log(length);

const master = gsap.timeline({ defaults: { duration: 1.3 } });

master.to(".ants", {
  strokeDashoffset: "40",
  repeat: -1,
  ease: "none",
});

master.to(
  ".myLine2",
  {
    strokeDashoffset: "-300",
    ease: "none",
  },
  "<"
);

master.to(
  ".myRect",
  {
    strokeDashoffset: "0",
    ease: "none",
  },
  "<"
);

gsap.set(curve, {
  strokeDasharray: length,
  strokeDashoffset: length,
});

master.to(curve, {
  strokeDashoffset: 0,
  duration: 2,
});

master.to(
  curve,
  {
    strokeDashoffset: -length,
    duration: 2,
  },
  "+=2"
);

const weird = document.querySelector("#weird");
let length2 = weird.getTotalLength();
console.log(length2);

gsap.set(weird, {
  strokeDasharray: length2,
  strokeDashoffset: length2,
});

master.to(weird, {
  strokeDashoffset: 0,
  duration: 2,
});

master.to(
  weird,
  {
    strokeDashoffset: -length2,
    duration: 2,
  },
  "+=2"
);
