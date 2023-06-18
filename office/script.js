

let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

// gsap.registerPlugin(GSDevTools);
gsap.registerPlugin(DrawSVGPlugin);

// Variables

gsap.set(".container", { autoAlpha: 1 });
const title1 = select(".title1");
const title2 = select(".title2");
const outline = select("#outline > polyline");
const building1 = select("#building1");
const building2 = select("#building2");
const building3 = select("#building3");
const building1_furniture = gsap.utils.toArray("#building1_furniture > rect");
const building2_furniture = gsap.utils.toArray("#building2_furniture > *");
const building3_furniture = gsap.utils.toArray("#building3_furniture > *");

// const outline = gsap.utils.toArray("#two");

// Set the elements
gsap.set(".container", { autoAlpha: 1 });
gsap.set(outline, { autoAlpha: 1 });
gsap.set(building1, { scaleY: 0, transformOrigin: "bottom center" });
gsap.set(building2, { scaleY: 0, transformOrigin: "bottom center" });
gsap.set(building3, { scaleY: 0, transformOrigin: "bottom center" });
gsap.set(building1_furniture, { autoAlpha: 1 });
gsap.set(building2_furniture, { autoAlpha: 1 });
gsap.set(building3_furniture, { autoAlpha: 1 });

const master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
  
});
master.pause();
var currentTimeScale = master.timeScale(); 
// Nested timelines

function titleText() {
  var tl = gsap.timeline({ })
  tl.from(title1, {
    x: -300, 
    ease: "power4.out",
    duration: 1
  })

  tl.to(".start", {
 opacity: 0,
 duration: 0.25
  }, "<")

  tl.from(title2, {
    x: -300, 
    ease: "power4.out",
    duration: 1
  }, "-=0.25")
return tl
}

function outlineAnim() {
  var tl = gsap.timeline({ })
  tl.from(outline, {drawSVG: 0, duration: 6, ease: "none"})
return tl
}

function buildingOne() {
  var tl = gsap.timeline({ })
  tl
  .to(building1, {
    scaleY: 1
  })
return tl
}

function buildingOneFurniture() {
  var tl = gsap.timeline({ })
tl
.from(building1_furniture, {
  drawSVG: 0,
  ease: "none", stagger: {
    from: "random",
    amount: 1
  }
})
return tl
}

function buildingTwo() {
  var tl = gsap.timeline({ })
  tl
  .to(building2, {
    scaleY: 1
  })
return tl
}

function buildingTwoFurniture() {
  var tl = gsap.timeline({ })
tl
.from(building2_furniture, {
  drawSVG: 0,
  ease: "none", stagger: {
    from: "random",
    amount: 1
  }
})
return tl
}

function buildingThree() {
  var tl = gsap.timeline({ })
  tl
  .to(building3, {
    scaleY: 1,
  })
return tl
}

function buildingThreeFurniture() {
  var tl = gsap.timeline({ })
tl
.from(building3_furniture, {
  drawSVG: 0,
  ease: "none", stagger: {
    from: "random",
    amount: 1
  }
})
return tl
}


master
.add(titleText())
.add(outlineAnim(), "<")
.add(buildingOne(), 0.4)
.add(buildingOneFurniture(), 0.9)
.add(buildingTwo(), 2.2)
.add(buildingTwoFurniture(), 3.2)
.add(buildingThree(), 3.9)
.add(buildingThreeFurniture(), 4.5)

master.timeScale(0.75); 

// GSDevTools.create({animation: master});

// console.log(outline.getTotalLength())
// console.log(DrawSVGPlugin.getLength(outline))

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";

});