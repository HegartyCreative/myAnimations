let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

// Create varialbles
const title = gsap.utils.toArray(".title");
const title1 = select(".title1");
const title2 = select(".title2");
const title3 = select(".title3");
const title4 = select(".title4");
const circle = select("#circle");
const sun_large = select("#sun_large > g");
const circles = gsap.utils.toArray(".circles");
const outer_circle = select("#outer_circle");
const inner_circle = select("#inner_circle");
const logo = select("#logo");
const logo_sun = select("#logo_sun");
const logo_text = select(".logo_text");
const start = gsap.utils.toArray(".start");
const building = select(".building");
const size = select(".size");
const basket = select("#basket > g");
const amenities = gsap.utils.toArray(".amenities");
const amenities1 = select(".amenities1");
const amenities2 = select(".amenities2");
const train_section = gsap.utils.toArray("#train_section > g");
const train = select("#train");
const tracks = select("#tracks");
const trains = gsap.utils.toArray(".trains");
const trains1 = select(".trains1");
const trains2 = select(".trains2");
const vinyl = select("#vinyl > g");
const vinyls = gsap.utils.toArray(".vinyls");
const vinyl1 = select(".vinyl1");
const vinyl2 = select(".vinyl2");
const end = select(".end");
const end1 = select(".end1");


// Set the elements
gsap.set(".container", { autoAlpha: 1 });
gsap.set(title1, { autoAlpha: 1});
gsap.set(title2, { autoAlpha: 1});
gsap.set(title3, { autoAlpha: 1});
gsap.set(title4, { autoAlpha: 1});
gsap.set(sun_large, { x: 120, y: 120, autoAlpha: 0, scale: 1.9, transformOrigin: "center center"});
gsap.set(circle, { autoAlpha: 0, scale: 0, transformOrigin: "center center"});
gsap.set(circles, { autoAlpha: 0 });
gsap.set(outer_circle, {transformOrigin: "center center"});
gsap.set(inner_circle, {transformOrigin: "center center"});
gsap.set(basket, {transformOrigin: "top 50%"});
gsap.set(logo, { autoAlpha: 1});
gsap.set(logo_sun, { autoAlpha: 0, scale: 0, transformOrigin: " 144px 98px"});
gsap.set(building, { autoAlpha: 0});
gsap.set(size, { autoAlpha: 0, scale: 0, transformOrigin: " right bottom"});
gsap.set(train_section, {scale: 1}); 
gsap.set(vinyl, {scale: 1,transformOrigin: "50% 50%"}); 

const master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});

master.pause();

// Intro

function introAnim() {
  const tl = gsap.timeline()

  .from(logo_text, {
    y: 70, 
    ease: "power4.out"
  })

  .to(logo_sun, {
    autoAlpha: 1, 
    scale: 1,
  }, "+=0.5")

  .to(start, {
    x: -250,
    ease: "power4.out",
    duration: 0.75
  }, "+=1");

  return tl;
}

// Address

function addressAnim() {
  const tl = gsap.timeline()
  
  .from(title, {
    x: -270,
    stagger: 0.5,
    ease: "power4.out"
    }, ">")

  .to(sun_large,{ autoAlpha: 1}, "<")

  return tl;
}

// Building

function buildingAnim() {
  const tl = gsap.timeline()
  
  .to(building, {
    autoAlpha: 1,
    }, "+=2")

  .add("stop_sun")

  .to(sun_large, {
    autoAlpha: 0,
    }, ">")

  .to(title, {
    autoAlpha: 0
    }, ">")

  .to(building, {
    x: -30,
    duration: 5,
    ease: "none"
  }, "<")

  .to(size, {
    autoAlpha: 1,
    scale: 1,
    ease: "power4.out",
    transformOrigin: "right bottom",
    duration: 0.5,
  }, "<")

  .to(building, {
    autoAlpha: 0,
   }, "+=1")

   .to(size, {
    autoAlpha: 0,
   }, "<");

  return tl;
}

// Basket

function basketAnim() {
  const tl = gsap.timeline()
  
  .to(circle, {
    autoAlpha: 1,
    scale: 1,
    ease: "power4.out"
   }, "<")

   .to(circles, {
    autoAlpha: 1,
   }, ">")
  
  .from(basket, {
      x: 120,
    }, "<")

    .from(amenities1, {
      y: -30,
      duration: 0.25,
      ease: "power4.out"
    },"<")

    .from(amenities2, {
      y: 30,
      duration: 0.25,
      ease: "back.out(1.7)"
    },">");

  return tl;
};

// Train

function trainAnim() {
  const tl = gsap.timeline()
  

  master.from(train_section, {
    x: -120,
  }, "+=2")

  .to(basket, {
    autoAlpha: 0,
  },"<")

  .to(amenities, {
    autoAlpha: 0,
  },"<")

  .from(trains1, {
    y: -30,
    autoAlpha: 1,
    duration: 0.25,
    ease: "back.out(1.7)"
  },">")

  .from(trains2, {
    y: 30,
    autoAlpha: 1,
    duration: 0.25,
    ease: "back.out(1.7)"
  },">");

  return tl;
};

// Vinyl

function vinylAnim() {
  const tl = gsap.timeline()

.to(train_section, {
    autoAlpha: 0,
  },"+=2")

.to(trains, {
    autoAlpha: 0,
  },"<")

  .from(vinyl, {
    x: 120,
  }, ">")
  
  .from(vinyl1, {
    y: -35,
    duration: 0.25,
    ease: "back.out(1.7)"
  },"<")

  .from(vinyl2, {
    y: 30,
    duration: 0.25,
    ease: "back.out(1.7)"
  },"<");

  return tl;
};

// End

function endAnim() {
  const tl = gsap.timeline()

.to(vinyls, {
    autoAlpha: 0,
  },"+=2")

.to(vinyl, {
    autoAlpha: 0,
  },"<")

.to(circles, {
    autoAlpha: 0,
  },"<")

  .to(circle, {
    autoAlpha: 0,
  },"<")

  .to(logo, {
    x: 0
  })

  .to(end1, {
    y: -60,
    duration: 0.25,
    ease: "power4.out"
  },">");

  return tl;
};



master
.add(introAnim())
.add(addressAnim())
.add(buildingAnim())
.add(basketAnim())
.add(trainAnim())
.add(vinylAnim())
.add(endAnim());


// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";

});

