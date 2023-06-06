let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

// Variables
const education_icons = gsap.utils.toArray(".education_icons");
const logo = select("#logo");
const line = select("#line");
const _1_book = select("#_1_book > g");
const _2_mortar = select("#_2_mortar > g");
const _3_book = select("#_3_book > g");
const _4_calculator = select("#_4_calculator > g");
const _5_satchel = select("#_5_satchel > g");
const _6_paint = select("#_6_paint > g");
const _7_globe = select("#_7_globe > g");
const _8_board = select("#_8_board > g");
const _9_abacus = select("#_9_abacus > g");
const _10_ipad = select("#_10_ipad > g");
const _11_students = select("#_11_students > g");
const _12_envelope = select("#_12_envelope > g");
const _13_apple = select("#_13_apple > g");
const _14_boy2 = select("#_14_boy2 > g");
const _15_pencil = select("#_15_pencil > g");
const _16_easel = select("#_16_easel > g");
const scene_title = gsap.utils.toArray(".scene_title");
const _1_title = select("#_1_title");
const _1_subTitle = select("#_1_subTitle");
const web = select(".web");

// Set the elements
gsap.set(".container", { autoAlpha: 1 });
gsap.set(logo, { scale: 1.2, transformOrigin:"center center" });
gsap.set(line, { scale: 0, transformOrigin:"center center" });
gsap.set(line, { scale: 0, transformOrigin:"center center" });
gsap.set(_1_subTitle, {autoAlpha: 0 });
gsap.set(_2_subTitle, {autoAlpha: 0 });
gsap.set(_3_subTitle, {autoAlpha: 0 });
gsap.set(_4_subTitle, {autoAlpha: 0 });
gsap.set(web, {autoAlpha: 0 });

const master = gsap.timeline({
  onComplete: () => (pause.innerHTML = "Play"),
});
master.pause();

// Element animations

const titleAnim = (item) => {
  let tl = gsap.timeline();
  tl.from(item, {
    y: -70,
    ease: "back.out(1.5)"
  });
  return tl;
};

const deleteTitleAnim = (item) => {
  let tl = gsap.timeline();
  tl.to(item, {
    autoAlpha: 0,
    duration: 0.25
  });
  return tl;
};

const subTitleAnim = (item) => {
  let tl = gsap.timeline();
  tl.to(item, {
    autoAlpha: 1
  });
  return tl;
};

const deleteSubTitleAnim = (item) => {
  let tl = gsap.timeline();
  tl.to(item, {
    autoAlpha: 0,
    duration: 0.25
  });
  return tl;
};

const iconsAnim = (item) => {
  let tl = gsap.timeline();
  tl.to(item, {
    y: -67,
    ease: "expo.out",
    duration: 0.5
  });
  return tl;
};

const deleteIcon = (item) => {
  let tl = gsap.timeline();
  tl.to(item, {
    autoAlpha: 0,
    duration: 0.4
  });
  return tl;
};

// Nested timelines

function intro() {
  const tl = gsap.timeline()
  master.to(logo, {
    scale: 0.9,
    y: -95,
    x: -35,
    ease: "back.out(1.5)"
  })
    master.to(line, {
    scale: 1,
    ease: "back.out(1.7)"
  })
  return tl;
}

function sceneOne() {
  const tl = gsap.timeline()
  .add(titleAnim(_1_title))
  .add(subTitleAnim(_1_subTitle))
  .add(iconsAnim(_2_mortar))
  .add(iconsAnim(_1_book))
  .add(iconsAnim(_4_calculator))
  .add(iconsAnim(_3_book))
  .add(deleteIcon(_2_mortar))
  .add(deleteIcon(_1_book))
  .add(deleteIcon(_4_calculator))
  .add(deleteIcon(_3_book))
  .add(deleteTitleAnim(_1_title))
  .add(deleteSubTitleAnim(_1_subTitle))
  return tl;
}

function sceneTwo() {
  const tl = gsap.timeline()
  .add(titleAnim(_2_title))
  .add(subTitleAnim(_2_subTitle))
  .add(iconsAnim(_8_board))
  .add(iconsAnim(_5_satchel))
  .add(iconsAnim(_7_globe))
  .add(iconsAnim(_6_paint))
  .add(deleteIcon(_8_board))
  .add(deleteIcon(_5_satchel))
  .add(deleteIcon(_7_globe))
  .add(deleteIcon(_6_paint))
  .add(deleteTitleAnim(_2_title))
  .add(deleteSubTitleAnim(_2_subTitle))
  return tl;
}

function sceneThree() {
  const tl = gsap.timeline()
  .add(titleAnim(_3_title))
  .add(subTitleAnim(_3_subTitle))
  .add(iconsAnim(_11_students))
  .add(iconsAnim(_10_ipad))
  .add(iconsAnim(_9_abacus))
  .add(iconsAnim(_12_envelope))
  .add(deleteIcon(_11_students))
  .add(deleteIcon(_10_ipad))
  .add(deleteIcon(_9_abacus))
  .add(deleteIcon(_12_envelope))
  .add(deleteTitleAnim(_3_title))
  .add(deleteSubTitleAnim(_3_subTitle))
  return tl;
}

function sceneFour() {
  const tl = gsap.timeline()
  .add(titleAnim(_4_title))
  .add(subTitleAnim(_4_subTitle))
  .add(iconsAnim(_16_easel))
  .add(iconsAnim(_14_boy2))
  .add(iconsAnim(_13_apple))
  .add(iconsAnim(_15_pencil))
  .add(deleteIcon(_16_easel))
  .add(deleteIcon(_14_boy2))
  .add(deleteIcon(_13_apple))
  .add(deleteIcon(_15_pencil))
  .add(deleteTitleAnim(_4_title))
  .add(deleteSubTitleAnim(_4_subTitle))
  return tl;
}

function endAnim() {
  const tl = gsap.timeline()
  .to(line, {
    autoAlpha: 0
  })
  .to(logo, {
    y: -15,
    x: -17,
    scale: 1.1
  })
  .to(web, {
    autoAlpha: 1,
    y: 0
  })
  return tl;
}

master
.add(intro())
.add(sceneOne())
.add(sceneTwo())
.add(sceneThree())
.add(sceneFour())
.add(endAnim());

// Button code

pause.addEventListener("click", () => {
  master.paused(!master.paused());
  if (master.progress() == 1) {
    master.restart();
  
  }
  pause.innerHTML = master.paused() ? "Play" : "Pause";

});