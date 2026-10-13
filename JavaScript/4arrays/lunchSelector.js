function addLunchToEnd(lunches, lunch) {
  lunches.push(lunch);
  console.log(`${lunch} added to the end of the lunch menu.`);
  return lunches;
}

function addLunchToStart(lunches, lunch) {
  lunches.unshift(lunch);
  console.log(`${lunch} added to the start of the lunch menu.`);
  return lunches;
}

function removeLastLunch(lunches) {
  if (lunches.length > 0) {
    let removedLunch = lunches.pop();
    console.log(`${removedLunch} removed from the end of the lunch menu.`);
    return lunches;
  } else {
    console.log("No lunches to remove.");
    return lunches;
  }
}

function removeFirstLunch(lunches) {
  if (lunches.length > 0) {
    let removedLunch = lunches.shift();
    console.log(`${removedLunch} removed from the start of the lunch menu.`);
    return lunches;
  } else {
    console.log("No lunches to remove.");
    return lunches;
  }
}

function getRandomLunch(lunches) {
  if (lunches.length > 0) {
    let randomNumber = Math.floor(Math.random() * lunches.length);
    let randomLunch = lunches[randomNumber];
    console.log(`Randomly selected lunch: ${randomLunch}`);
    return lunches;
  } else {
    console.log("No lunches available.");
    return lunches;
  }
}

function showLunchMenu(lunches) {
  if (lunches.length > 0) {
    let lunchMenu = "Menu items:";
    for (let lunch of lunches) {
      lunchMenu += ` ${lunch},`;
    }
    lunchMenu = lunchMenu.split("");
    lunchMenu.splice(lunchMenu.length - 1, 1);
    lunchMenu = lunchMenu.join("");
    console.log(lunchMenu);
  } else {
    console.log("The menu is empty.");
  }
}

let lunches = ["arroz", "feijao", "carne"];

showLunchMenu(["Greens", "Corns", "Beans"]);
