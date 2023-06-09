let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

// Variables
const logo = select("#logo");
const text = select(".text");
const believe = select("#believe");
const starts = select("#starts");
const innovation = select("#innovation");
const when = select("#when");
const listen = select("#listen");
const working = select("#working");
const withThe = select("#withThe");
const hiv = select("#hiv");
const decades = select("#decades");
const used = select("#used");
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
gsap.set(when, { autoAlpha: 0 });
gsap.set(listen, { autoAlpha: 0 });
gsap.set(working, { autoAlpha: 0 });
gsap.set(withThe, { autoAlpha: 0 });
gsap.set(hiv, { autoAlpha: 0 });
gsap.set(decades, { autoAlpha: 0 });
gsap.set(used, { autoAlpha: 0 });
gsap.set(disease, { autoAlpha: 0 });
gsap.set(think, { autoAlpha: 0 });
gsap.set(every, { autoAlpha: 0 });
gsap.set(reduce, { autoAlpha: 0 });
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
    x: -260,
    duration: 0.15,
  });

  master.to(
    believe,
    {
      opacity: 0,
      duration: 0.15,
    },
    "=+0.25"
  );

  master.from(innovation, {
    opacity: 0,
    scale: 6,
    duration: 0.5,
    ease: "back.out(1.7)",
  });

  master.to(
    starts,
    {
      autoAlpha: 1,
    },
    "=+0.25"
  );
  
  master.to(
    innovation,
    {
      opacity: 0,
      duration: 0,
    },
    "<"
  );

  master.to(
    when,
    {
      autoAlpha: 1,
    },
    "=+0.25"
  );

  master.to(
    starts,
    {
      opacity: 0,
      duration: 0,
    },
    "<"
  );

  master.to(
    listen,
    {
      autoAlpha: 1,
    },
    "=+0.25"
  );
  
  master.to(
    when,
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
  }, "+=0.5");

  master.to(
    listen,
    {
      autoAlpha: 0,
      duration: 0.15,
    }, "<"
  );

  master.to(working, {
    x: -68,
    ease: "power4.out",
    duration: 0.15,
  }, "+=0.25");
  
  master.to(
    withThe,
    {
      autoAlpha: 1,
      duration: 0,

    },
    "+=0.15"
  );

  master.to(
    hiv,
    {
      autoAlpha: 1,
      duration: 0.25,
    },
    "+=0.5"
  );
  
  master.to(
    working,
    {
      opacity: 0,
      duration: 0.1,
    },
    "<"
  );

  master.to(
    withThe,
    {
      opacity: 0,
      duration: 0.1,
    },
    "<"
  );
  
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

master.fromTo(
  ".community_image",
  {
    scale: 1.2,
  },
  {
    scale: 1,
    duration: 3,
  },
  "=-0.5"
);

master.to(
  listen,
  {
    autoAlpha: 0,
  },
  "=-0.5"
);

master.to(
  hiv,
  {
    autoAlpha: 0,
  },
  "<"
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
  used,
  {
    autoAlpha: 1,
    duration: 0.25,
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

master.to(
  disease,
  {
    autoAlpha: 1,
  },
  "=+0.5"
);

  master.to(
    used,
    {
      autoAlpha: 0,
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
    x: -240,
    ease: "back.out(2)",
  },
  "-=3"
);

master.from(
  technology,
  {
    x: 270,
    ease: "back.out(2)",
  },
  "-=2.5"
);

master.from(
  talents,
  {
    x: -265,
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
    }, "+=1"
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
  reduce,
  {
    autoAlpha: 1,
    y: -20,
  },
  "=-0.5"
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
  reduce,
  {
    opacity: 0,
  },
  "=+3"
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