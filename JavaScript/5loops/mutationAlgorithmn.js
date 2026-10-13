function mutation(array) {
  let word1 = array[0].toLowerCase();
  let word2 = array[1].split("");
  let achou = true;
  for (let letter of word2) {
    if (!word1.includes(letter.toLowerCase())) {
      achou = false;
      break;
    }
  }
  return achou;
}

console.log(mutation(["hello", "Hello"]));
console.log(mutation(["hello", "hey"]));
console.log(mutation(["Alien", "line"]));
