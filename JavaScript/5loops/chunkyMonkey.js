function chunkArrayInGroups(array, num) {
  const finalArray = [];
  for (let i = 0; i < array.length; i += num) {
    finalArray.push(array.slice(i, i + num));
  }
  return finalArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
