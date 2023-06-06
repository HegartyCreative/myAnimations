let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

// Create varialbles
const circle = select("#circle");
const square = select("#square");
const polygon = select("#polygon");
const cat = gsap.utils.toArray("#cat > path");

gsap.registerPlugin(DrawSVGPlugin);

// Set the elements
gsap.set(".container", { autoAlpha: 1 });


// Start animation

let master = gsap.timeline({});

master
.to(circle, {
  drawSVG: 0,
  duration: 2
})
.to(square, {
  drawSVG: 0,
  duration: 2
})
.to(polygon, {
  drawSVG: 0,
  duration: 2
})

.to(cat, {
  drawSVG: 0,
  duration: 2
});

GSDevTools.create();