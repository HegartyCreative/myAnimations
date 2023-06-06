let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

// Variables
const ball1 = select("#ball1");
const ball2 = select("#ball2");
const ball3 = select("#ball3");
const ball4 = select("#ball4");

// Set the elements
gsap.set(".container", { autoAlpha: 1 });


const master = gsap.timeline({ defaults: {duration: 2}
});

function scene1() {
  var tl = gsap.timeline({ })
  .to(ball1, {
    x: 200,
    ease: "power4.out"
  })
return tl
} 

function scene2() {
  var tl = gsap.timeline({ })
  .to(ball2, {
    x: 200,
    ease: "power4.out"
  })
return tl
} 

function scene3() {
  var tl = gsap.timeline({ })
  .to(ball3, {
    x: 200,
    ease: "power4.out"
  })
return tl
} 

function scene4() {
  var tl = gsap.timeline({ })
  .to(ball4, {
    x: 200,
    ease: "power4.out"
  })
return tl
} 

master
.add(scene1())

.add(scene2())
.add(scene3())
.add("test")
.add(scene4())

master.play("test");




