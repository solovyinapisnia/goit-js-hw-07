function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesElement = document.querySelector("div#boxes");
const createButton = document.querySelector("[data-create]")
const destroyButton = document.querySelector("[data-destroy]")
const input = document.querySelector('input[type="number"]')



function createBoxes(amount) {
  const minSize = 30;

  for (let index = 0; index < amount; index++) {
    const boxElement = document.createElement("div");

    boxElement.setAttribute("style", `width: ${minSize + index * 10}px; height: ${minSize + index * 10}px; background-color: ${getRandomHexColor()}`);
    boxesElement.append(boxElement);
  }
}

createButton.addEventListener("click", (event) => {
  const amount = input.value;
  if (amount > 0 && amount <= 100) {
    boxesElement.innerHTML = "";
    input.value = "";
    createBoxes(amount)
  }
})

destroyButton.addEventListener("click", (event) => {
    boxesElement.innerHTML = "";
})