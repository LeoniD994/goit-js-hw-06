function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const body = document.querySelector("body");
const colorBtn = document.querySelector("button.change-color");
const colorSpan = document.querySelector("span.color");

colorBtn.addEventListener("click", (element) => {
  let bodyColor = getRandomHexColor();

  body.style.backgroundColor = bodyColor;

  colorSpan.textContent = bodyColor;

});