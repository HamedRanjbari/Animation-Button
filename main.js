let $ = document;
let button = $.querySelector(".btn");
let animationCircle = $.querySelector(".animation-circle");

button.addEventListener("click", (e) => {
  let offX = e.offsetX;
  let offY = e.offsetY;
  animationCircle.classList.add("shadow");
  animationCircle.style.left = offX + "px";
  animationCircle.style.top = offY + "px";
  setTimeout(() => {
    animationCircle.classList.remove("shadow");
  }, 500);
});
