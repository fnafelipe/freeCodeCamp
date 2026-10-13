const btn = document.getElementById("btn");

btn.addEventListener("click", showMessage);

const input = document.getElementById("input");

input.addEventListener("input", showInput);

function showMessage() {
  alert("You clicked the button!");
}

function showInput() {
  alert(`You inputed: ${input.value}`);
}

input.removeEventListener("input", showInput);

const paraEl = document.getElementById("para");

paraEl.style.color = "red";

paraEl.classList.add("classe");
paraEl.classList.toggle("classe");
paraEl.classList.remove("classe");

function changeImg() {
  const img = document.getElementById("example-img");
  img.src =
    "https://cdn.freecodecamp.org/curriculum/responsive-web-design-principles/FCCStickers-CamperBot200x200.jpg";
  img.alt = "CamperBot sticker";
  console.log("image was just changed");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", changeImg);
} else {
  console.log("DOMContentLoaded has already fired");
  changeImg();
}

setTimeout(function () {
  console.log("This runs after 3 seconds");
}, 3000);

setInterval(() => {
  console.log("This runs every 2 seconds");
}, 2000);

const intervalID = setInterval(() => {
  console.log("This will stop after 5 seconds");
}, 1000);

setTimeout(() => {
  clearInterval(intervalID);
}, 5000);

function animate() {
  // Update the animation...
  // for example, move an element, change a style, and more.
  update();
  // Request the next frame
  requestAnimationFrame(animate);
}

const selectMenu = document.getElementById("select-menu");
selectMenu.addEventListener("change", (event) => {
  console.log(`You selected: ${event.target.value}`);
});
