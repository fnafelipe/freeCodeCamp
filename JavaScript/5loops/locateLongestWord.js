function findLongestWordLength(string) {
  let arrayOfWords = string.split(" ");
  let longestWord = "";
  for (let word of arrayOfWords) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord.length;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog"),
);
