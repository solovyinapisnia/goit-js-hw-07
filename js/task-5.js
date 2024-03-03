function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnElement = document.querySelector("button.change-color");
const bodyElement = document.querySelector("body")
const spanElement = document.querySelector("span.color")

btnElement.addEventListener("click", (event) => {
  const newColor = getRandomHexColor();

  spanElement.textContent = newColor;

  bodyElement.style.backgroundColor = newColor;
})