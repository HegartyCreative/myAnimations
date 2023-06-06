let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

// Variables
// const education_icons = gsap.utils.toArray(".education_icons");
// const logo = select("#logo");


// Set the elements
gsap.set(".container", { autoAlpha: 1 });


const master = gsap.timeline({ repeat: -1 ,
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();


master.from("#line", { scaleX: 0, transformOrigin: "right center" })
.from("#upper", { duration: 0.75, y: 30 }, "text")
.from("#lower", { duration: 0.75, y: -30 }, "text")
.to("#line, #upper, #lower", { duration: 1, opacity: 0, ease:"none" }, "+=2");


// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";

});