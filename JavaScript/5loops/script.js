for (let i = 0; i < 4; i++) {
  console.log(i);
}

let nums = [2, 5, 3, 4, 5];

for (const num of nums) {
  console.log(num);
}

for (const num in nums) {
  console.log(num);
}

let num = 1;

while (num !== 10) {
  console.log(num);
  num++;
}

do {
  console.log(num);
  num++;
} while (num < 20);

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  } else {
    console.log(i);
    continue;
  }
}
