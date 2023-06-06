let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

// Variables
const start = select("#start");
const title = select(".title");
const subTitle = select(".subTitle");
const web = select(".web");
const ball1 = select(".ball1");
const ball2 = select(".ball2");
const fill = select("#fill");
const outline = select("#outline");
const machine = select("#machine");
const cotton = select("#cotton");
const scissors = select("#scissors");
const safety_pin = select("#safety_pin");
const shirt = select("#shirt");
const hanger = select("#hanger");
const pins = select("#pins");
const buttons = select("#buttons");
const iron = select("#iron");
const wool = select("#wool");
const dress = select("#dress");
const tape = select("#tape");
const icons = gsap.utils.toArray(".icons");
const title_button1 = select("#title_button1");
const title_button2 = select("#title_button2");
const title_needle = select("#title_needle");
const title_thread1 = select("#title_thread1");
const title_thread2 = select("#title_thread2");


// Set the elements
gsap.set(".container", { autoAlpha: 1 });
gsap.set(start, { autoAlpha: 1, transformOrigin: "center center" });
gsap.set(icons, {scale: 0, autoAlpha: 0, transformOrigin: "center center" });
gsap.set(ball1, { scale: 0, autoAlpha: 0, transformOrigin: "center center" });
gsap.set(ball2, { scale: 0, autoAlpha: 0, transformOrigin: "center center" });
gsap.set(title_button1, { scale: 0, transformOrigin: "center center" });
gsap.set(title_button2, { autoAlpha: 0 });
gsap.set(title_needle, { scale: 0, transformOrigin: "center bottom" });
gsap.set(title_thread1, { scale: 0, transformOrigin: "center left" });
gsap.set(title_thread2, { scale: 0, transformOrigin: "center left" });
gsap.set(web, { scale: 0, transformOrigin: "center center" });

const master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

gsap.registerPlugin(SplitText);

// Nested timelines

function introText() {

  var mySplitText = new SplitText(title, {
    type: "words, chars",
  });

  var tl = gsap.timeline({ })

  tl.to(start, {
    autoAlpha: 0,
    duration: 0.25
  }, "+=0.5");

tl.to(ball1, {
  autoAlpha: 1, 
  scale: 1,
ease: "back.out(1.5)"
}, ">");

tl.from(mySplitText.words, {
    opacity: 0,
    rotation: -10,
    y: 15,
    ease: "back.out(1.5)",
    stagger: 0.25,
    rotationX: 90,
    transformOrigin: "0% 50%"
  })

.from(subTitle, {
  opacity: 0,
  y: 20,
  ease: "back.out(1.5)" 
})

.to(title_button1, {
  ease: "back.out(1.5)",
  scale: 1
})

.to(title_button2, {
  autoAlpha: 1
})

.to(title_needle, {
  scale: 1,
  ease: "back.out(1.5)"
}, "-=0.25")

.to(title_thread1, {
  scale: 1,
  ease: "back.out(1.5)"
}, "-=0.25")

.to(title_thread2, {
  scale: 1,
  ease: "back.out(1.5)"
}, "-=0.15")

.to(mySplitText.words, {
  autoAlpha: 0
}, "+=1")

.to(subTitle, {
  autoAlpha: 0
}, "<")

.to(title_button1, {
  autoAlpha: 0
}, "<")

.to(title_button2, {
  autoAlpha: 0
}, "<")

.to(title_button1, {
  autoAlpha: 0
}, "<")

.to(title_needle, {
  autoAlpha: 0
}, "<")

.to(title_thread1, {
  autoAlpha: 0
}, "<")

.to(title_thread2, {
  autoAlpha: 0
}, "<")

.to(ball1, {
  autoAlpha: 0,
  duration: 0.5
})

.to(ball2, {
  autoAlpha: 1,
  scale: 0.5,
  ease: "back.in(0.5)"
}, "-=0.5")

return tl
}

function animateIcons() {

  var tl = gsap.timeline({ })
  
  .fromTo(icons, {
    autoAlpha: 0,
    scale: 0
  }, {
    autoAlpha: 1,
    scale: 1,
    duration: 0.25
  })

  .from(machine, {
    y: 95,
    ease: "power2.out"
  }, "<")
  
  .from(scissors, {
    y: 80,
    x: -55,
    ease: "power2.out"
  }, "-=0.35")
  
  .from(hanger, {
    y: 40,
    x: -90,
    ease: "power2.out"
  }, "-=0.35")
  
  .from(iron, {
    y: 0,
    x: -100,
    ease: "power2.out"
  }, "-=0.35")
  
  .from(buttons, {
    y: -45,
    x: -90,
    ease: "power2.out"
  }, "-=0.35")
  
  .from(dress, {
    y: -80,
    x: -55,
    ease: "power2.out"
  }, "-=0.35")
  
  .from(cotton, {
    y: -100,
    x: -0,
    ease: "power2.out"
  }, "-=0.35")
  
  .from(tape, {
    y: -80,
    x: 55,
    ease: "power2.out"
  }, "-=0.35")
  
  .from(wool, {
    y: -50,
    x: 87,
    ease: "power2.out"
  }, "-=0.35")
  
  .from(pins, {
    y: 0,
    x: 98,
    ease: "power2.out"
  }, "-=0.35")
  
  .from(safety_pin, {
    y: 43,
    x: 92,
    ease: "power2.out"
  }, "-=0.35")
  
  .from(shirt, {
    y: 78,
    x: 55,
    ease: "power2.out"
  }, "-=0.35")

  .to(web, {
    scale: 1,
    ease: "back.out(1.5)"
  }, "<")

return tl
} 



master
.add(introText())
.add(animateIcons())


// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";

});