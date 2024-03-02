'use strict';

const liItemElements = document.querySelectorAll(".item");
console.log(`Number of categories: ${liItemElements.length}`);

liItemElements.forEach(element => {
    const h2 = element.querySelector("h2").textContent;
    const liElements = element.querySelectorAll("ul li");
    console.log(`Category: ${h2}`);
    console.log(`Elements: ${liElements.length}`);
});