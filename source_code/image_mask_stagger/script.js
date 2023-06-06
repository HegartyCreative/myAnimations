let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

let pause = select("#pause");

gsap.set(".container", { autoAlpha: 1 });

let master = gsap.timeline({});

master.from(".sean", {
  yPercent: 100,
  stagger: {
    amount: 1,
    from: "random",
  },
  duration: 2,
  ease: "back.out(2)",
});
