const container = document.getElementById("container");
console.log(container);
const sectionEl = document.querySelectorAll("section");
console.log(sectionEl);
console.log(sectionEl[0]);
const c = document.querySelectorAll(".abc");
console.log(c);

// container.innerHTML = "<ul><li>Cheese</li><li>Tomato</li></ul>";

const img = document.createElement("img");
console.log(img);

console.log(container.innerText);
console.log(container.textContent);
console.log(container.innerHTML);

const parentNode = document.getElementById("desserts");
console.log(parentNode);

const newNode = document.createElement("li");
console.log(newNode);

newNode.textContent = "Cookies";
console.log(newNode.innerHTML);

desserts.appendChild(newNode);
console.log(parentNode);

const nodeToRemove = parentNode;
console.log(nodeToRemove);

console.log(navigator.userAgent);
console.log(navigator.language);
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(window.location);
console.log(document);

console.log(document.children);

const para = document.getElementById("para");
console.log(para);

para.setAttribute("class", "my-class");
console.log(para.outerHTML)
