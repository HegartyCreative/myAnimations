let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

// Variables
const logo = select("#logo");
const text = select(".text");
const believe = select("#believe");
const starts = select("#starts");
const innovation = select("#innovation");
const working = select("#working");
const decades = select("#decades");
const disease = select("#disease");
const science = select("#science");
const technology = select("#technology");
const talents = select("#talents");
const disease_text = gsap.utils.toArray(".disease_text");
const think = select("#think");
const every = select("#every");
const reduce = select("#reduce");
const people = select("#people");

// Set the elements
gsap.set(".container", { autoAlpha: 1 });
gsap.set(starts, { autoAlpha: 0 });
gsap.set(working, { autoAlpha: 0 });
gsap.set(decades, { autoAlpha: 0 });
gsap.set(disease, { autoAlpha: 0 });
gsap.set(think, { autoAlpha: 0 });
gsap.set(every, { autoAlpha: 0 });
gsap.set(people, { autoAlpha: 0 });


const master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

// gsap.registerPlugin(SplitText);

// Nested timelines

function intro_section() {

  var master = gsap.timeline({ })
  
  master.to(logo, {
    opacity: 0,
  });
  
  master.from(believe, {
    y: -70,
    duration: 0.15,
  });

  master.from(innovation, {
    opacity: 0,
    scale: 6,
    duration: 0.25,
    ease: "back.out(1.7)",
  });

  master.to(
    starts,
    {
      autoAlpha: 1,
      duration: 0.25
    },
    "+=1"
  );

  master.to(
    believe,
    {
      opacity: 0,
      duration: 0,
    },
    "<"
  );

  master.to(
    innovation,
    {
      opacity: 0,
      duration: 0,
    },
    "<"
  );
  

return master
};

function working_section() {

  var master = gsap.timeline({ })
  
  master.to(working, {
    autoAlpha: 1,
    duration: 0.25
  }, "+=0.5");

  master.to(starts,{
    autoAlpha: 0
  }, "<")
  
  
return master
};

function image_section() {

  var master = gsap.timeline({ })

master.to(
  ".community_image",
  {
    opacity: 1,
    duration: 0,
  },
  "=+0.5"
);

master.to(working,{
  autoAlpha: 0
}, "<")

master.fromTo(
  ".community_image",
  {
    scale: 1.15,
  },
  {
    scale: 1,
    duration: 2,
  },
  "=-0.5"
);


master.to(
  ".community_image",
  {
    opacity: 0,
    duration: 0.75,
  },
  "-=0.25"
);

master.to(
  decades,
  {
    autoAlpha: 1,
    duration: 0.25,
  },
  "=-0.5"
);

master.to(
  disease,
  {
    autoAlpha: 1,
  },
  "=+0.5"
);

master.to(
  decades,
  {
    opacity: 0,
    duration: 0.15,
  },
  "<"
);

master.fromTo(
  disease,
  {
    scale: 1,
  },
  {
    scale: 1.2,
    duration: 3.5,
  },
  "-=1"
);

master.from(
 science,
  {
    y: -100,
    ease: "back.out(2)",
  },
  "-=3"
);

master.from(
  technology,
  {
    y: 100,
    ease: "back.out(2)",
  },
  "-=2.5"
);

master.from(
  talents,
  {
    y: -100,
    ease: "back.out(2)",
  },
  "-=2"
);

return master
};



function think_section() {

  var master = gsap.timeline({ })

  master.to(
    think,
    {
      autoAlpha: 1,
      duration: 0.25,
    },
    "=+0.75"
  );
  
  master.to(
    disease_text,
    {
      autoAlpha: 0,
    },
    "<"
  );
  
  master.to(
    disease,
    {
      autoAlpha: 0,
    },
    "<"
  );

  master.to(
    every,
    {
      autoAlpha: 1,
    }, "+=2"
  );

    master.to(
    think,
    {
      autoAlpha: 0
    },
    "<"
  );

  master.to(
  every,
  {
    autoAlpha: 0,
  },
  "+=1"
);

  master.to(
  people,
  {
    autoAlpha: 1,
    y: -20,
  },
  "=-0.25"
);

master.to(
  people,
  {
    opacity: 0,
  },
  "<"
);

master.to(
  logo,
  {
    opacity: 1,
  },
  "=-0.5"
);

  return master
};

master
.add(intro_section())
.add(working_section())
.add(image_section())
.add(think_section())

// GSDevTools.create({animation: master});
// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";

});