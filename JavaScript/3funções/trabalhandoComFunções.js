function greet() {
  console.log("Hello, Jessica!");
}

function greetName(name) {
  console.log("Hello, " + name + "!");
}

function doSomething() {
  console.log("Doing something...");
}

function calculateSum(num1, num2) {
  return num1 + num2;
}

const sum = function (num1, num2) {
  return num1 + num2;
};

function greetings(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greet();

greetName("Felipe");
greetName("Carlos");

let result = doSomething();
console.log(result);

console.log(calculateSum(3, 4));

console.log(sum(3, 4));

greetings();
greetings("Anna");
