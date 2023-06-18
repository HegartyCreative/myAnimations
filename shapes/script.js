

let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

// gsap.registerPlugin(GSDevTools);

// Variables
const one_shapes = gsap.utils.toArray("#one_shapes > rect");
const two = gsap.utils.toArray("#two");
const two_shapes = gsap.utils.toArray("#two_shapes > rect");
const three = gsap.utils.toArray("#three > rect");
const threeWhole = gsap.utils.toArray("#three");
const four = select("#four");
const four_shapes = gsap.utils.toArray("#four_shapes > path");
const five = select("#five");
const five_shapes = gsap.utils.toArray("#five_shapes > polygon");
const six = select("#six");
const six_shapes = gsap.utils.toArray("#six_shapes > circle");
const title = select(".title");
const star = select("#star");

// Set the elements
gsap.set(".container", { autoAlpha: 1 });
gsap.set(one_shapes, {transformOrigin: "center center"});
gsap.set(two, {scale: 0, transformOrigin: "center center" });
gsap.set(two_shapes, { scale: 0, transformOrigin: "center center" });
gsap.set(three, {autoAlpha: 0, transformOrigin: "center center" });
gsap.set(threeWhole, {transformOrigin: "center center" });
gsap.set(four, { scale: 0, transformOrigin: "center center" });
gsap.set(four_shapes, {scale: 0, transformOrigin: "bottom center" });
gsap.set(five, { scale: 0, transformOrigin: "center bottom" });
gsap.set(five_shapes, { scale: 0, transformOrigin: "center bottom" });
gsap.set(six, { scale: 0, transformOrigin: "center center" });
gsap.set(six_shapes, { scale: 0, transformOrigin: "center center" });
gsap.set(title, { autoAlpha: 0 });
gsap.set(star, { autoAlpha: 1 });

const master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();


// Nested timelines

function start() {
  var tl = gsap.timeline({ })
tl
.to(star, {
  autoAlpha: 0,
  duration: 0.25,
})
return tl
}

function shapeOne() {
  var tl = gsap.timeline({ })
tl
.from(one_shapes, {
  x: -100, 
  stagger: 0.15,
  ease: "back.out(1)",
})

.to(one_shapes, {
  rotation: 45,
  scaleX: 100, 
}, "-=0.5")

return tl
}

function shapeTwo() {
  var tl = gsap.timeline({ })
tl
.to(two, {
  scale: 1,
  duration: 0.15,
  ease: "back.out(1.5)"
})

.to(two_shapes, {
  duration: 1,
  scale: 1,
  stagger: {
    each: 0.05,
    from: "end",
    ease: "power4.inOut",
}})
return tl
}

function shapeThree() {
  var tl = gsap.timeline({ })
tl
.to(three, {
  autoAlpha: 1,
  duration: 0.25,
  ease: "back.out(1.5)"
})

.to(threeWhole, {
  rotation: -90,
  ease: "back.inOut(3)"
})

.to(three, {
  transformOrigin: "center left",
  scaleX: 3.5
})

return tl
}

function shapeFour() {
  var tl = gsap.timeline({ })
tl
.to(four, {
  scale: 1,
  ease: "back.out(1.5)"
})
.to(four_shapes, {
  scale: 1,
  stagger: 0.15
}, "-=0.5")

return tl
}

function shapeFive() {
  var tl = gsap.timeline({ })
tl
.to(five, {
  scale: 1,
  ease: "back.out(1.5)"
})

.to(five_shapes, {
  scale: 1,
  ease: "back.out(1.5)",
  stagger: {
    each: 0.05,
    from: "start"}
})

return tl
}

function shapeSix() {
  var tl = gsap.timeline({ })
tl
.to(six, {
  scale: 1,
  ease: "power4.out"
})

.to(six_shapes, {
  scale: 1,
  ease: "back.out(1.5)",
  stagger: {
    each: 0.25,
    from: "start",
  duration: 1}
})

return tl
}

function text() {
  var tl = gsap.timeline({ })
tl
.to(title, {
  autoAlpha: 1,
  ease: "power4.out",
  y: -10,
  duration: 2,
})


return tl
}

master
.add(start())
.add(shapeOne(), "-=0.75")
.add(shapeTwo(), "-=0.25")
.add(shapeThree(), "-=0.45")
.add(shapeFour(), "-=0.15")
.add(shapeFive(), "-=0.15")
.add(shapeSix(), "-=0.15")
.add(text(), "-=0.05")

// GSDevTools.create({animation: master});


// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";

});