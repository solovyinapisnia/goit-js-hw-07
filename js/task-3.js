'use strict';

const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

inputElement.addEventListener("input", (event) => {
    const value = event.currentTarget.value;
  outputElement.textContent = value.trim().length ? value : "Anonymous";
});
