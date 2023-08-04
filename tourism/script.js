let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectoAll(e);

gsap.set(".container", { autoAlpha: 1 });

// const master = gsap.timeline({
//   onComplete: () => (pause.innerHTML = "Play"),
// });

// master.pause();

document.querySelectorAll(".carousel").forEach((carousel) => {
  const items = carousel.querySelectorAll(".carousel_item");
  const buttonsHtml = Array.from(items, () => {
    return `<span class="carousel_btn"></span>`;
  });
  carousel.insertAdjacentHTML(
    "beforeend",
    `<div class="carousel_nav">
  ${buttonsHtml.join("")}
  </div>
  `
  );

  const buttons = carousel.querySelectorAll(".carousel_btn");

  buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      items.forEach((item) => item.classList.remove("carousel_item--selected"));
      buttons.forEach((button) =>
        button.classList.remove("carousel_button--selected")
      );
      items[i].classList.add("carousel_item--selected");
      button.classList.add("carousel_button--selected");
    });
  });
  items[0].classList.add("carousel_item--selected");
  buttons[0].classList.add("carousel_button--selected");
});
