let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

// Avoids error message in Chrome
// gsap.config({
//   nullTargetWarn: false,
//   trialWarn: false,
// });

// gsap.set(".null", { opacity: 1 });

// Variables
const title1 = select("#title1");
const job_titles = select(".job_titles");
const one = select("#one");
const two = select("#two");
const three = select("#three");
const four = select("#four");
const five = select("#five");
const six = select("#six");
const seven = select("#seven");
const eight = select("#eight");
const nine = select("#nine");
const ten = select("#ten");
const eleven = select("#eleven");
const twelve = select("#twelve");
const thirteen = select("#thirteen");
const fourteen = select("#fourteen");
const fifteen = select("#fifteen");
const sixteen = select("#sixteen");
const seventeen = select("#seventeen");
const eighteen = select("#eighteen");
const nineteen = select("#nineteen");
const twenty = select("#twenty");
const twentyOne = select("#twentyOne");
const twentyTwo = select("#twentyTwo");
const mySplitText1 = new SplitText(title1, {
  type: "lines",
});
const mySplitText2 = new SplitText(title2, {
  type: "lines",
});
// const className = gsap.utils.toArray(".className");

// Set the elements
gsap.set(".container", { autoAlpha: 1 });
gsap.set(job_titles, { autoAlpha: 1 });
gsap.set(one, { scale: 0, transformOrigin: "top left"});
gsap.set(two, { scale: 0, transformOrigin: "top left"});
gsap.set(three, { scale: 0, transformOrigin: "top left"});
gsap.set(four, { scale: 0, transformOrigin: "top left"});
gsap.set(five, { scale: 0, transformOrigin: "top left"});
gsap.set(six, { scale: 0, transformOrigin: "top left"});
gsap.set(seven, { scale: 0, transformOrigin: "top left"});
gsap.set(eight, { scale: 0, transformOrigin: "top left"});
gsap.set(nine, { scale: 0, transformOrigin: "top left"});
gsap.set(ten, { scale: 0, transformOrigin: "top left"});
gsap.set(eleven, { scale: 0, transformOrigin: "top left"});
gsap.set(twelve, { scale: 0, transformOrigin: "top left"});
gsap.set(thirteen, { scale: 0, transformOrigin: "top left"});
gsap.set(fourteen, { scale: 0, transformOrigin: "top left"});
gsap.set(fifteen, { scale: 0, transformOrigin: "top left"});
gsap.set(sixteen, { scale: 0, transformOrigin: "top left"});
gsap.set(seventeen, { scale: 0, transformOrigin: "top left"});
gsap.set(eighteen, { scale: 0, transformOrigin: "top left"});
gsap.set(nineteen, { scale: 0, transformOrigin: "top left"});
gsap.set(twenty, { scale: 0, transformOrigin: "top left"});
gsap.set(twentyOne, { scale: 0, transformOrigin: "top left"});
gsap.set(twentyTwo, { scale: 0, transformOrigin: "top left"});


const master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});

master.pause();

gsap.registerPlugin(SplitText);

// Element animations

const moveLogo = (item) => {
  let tl = gsap.timeline();
  tl.to(item, {
    scale: 1,
    ease: "circ.out",
    duration: 0.5,

  });
  return tl;
};

function sceneOne() {
  const tl = gsap.timeline()
  .add(moveLogo(one), "-=0.35")
  .add(moveLogo(two), "-=0.35")
  .add(moveLogo(three), "-=0.35")
  .add(moveLogo(four), "-=0.35")
  .add(moveLogo(five), "-=0.35")
  .add(moveLogo(six), "-=0.35")
  .add(moveLogo(seven), "-=0.35")
  .add(moveLogo(eight), "-=0.35")
  .add(moveLogo(nine), "-=0.35")
  .add(moveLogo(ten), "-=0.35")
  .add(moveLogo(eleven), "-=0.35")
  .add(moveLogo(twelve), "-=0.35")
  .add(moveLogo(thirteen), "-=0.35")
  .add(moveLogo(fourteen), "-=0.35")
  .add(moveLogo(fifteen), "-=0.35")
  .add(moveLogo(sixteen), "-=0.35")
  .add(moveLogo(seventeen), "-=0.35")
  .add(moveLogo(eighteen), "-=0.35")
  .add(moveLogo(nineteen), "-=0.35")
  .add(moveLogo(twenty), "-=0.35")
  .add(moveLogo(twentyOne), "-=0.35")
  .add(moveLogo(twentyTwo), "-=0.35")
  return tl;
}

function sceneTwo() {
  const tl = gsap.timeline()
  .from(mySplitText1.lines, {
    x: 200,
    ease: "power4.out",
    stagger: 0.15,
    duration: 1.5
  })
  
  .to(title1,{
    y: 200,
    ease: "back.in(1)",
    duration: 0.75
  }, "+=2.5")
  
  .from(mySplitText2.lines, {
    x: 190,
    ease: "power4.out", 
    stagger: 0.15,
    duration: 1.5
  })
  
  .to("#data", {
    autoAlpha: 0,
    duration: 0.1
  })
  
  .to(".job_titles", {
    duration: 0.5,
    autoAlpha: 1,
    y: "+=-27", 
    repeat: 17,
    repeatDelay: 0.5,
    repeatRefresh: true
  }, ">")
  
  .to("#world", {
  autoAlpha: 0,
  duration: 0.05
  }, ">")
  
  .to(".nations", {
    duration: 0.5,
    y: "+=-27", 
    repeat: 8,
    repeatDelay: 0.5,
    repeatRefresh: true
  }, ">")

  return tl;
}

master
.add(sceneOne())
.add(sceneTwo(), "-=1.5")


// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";
});



