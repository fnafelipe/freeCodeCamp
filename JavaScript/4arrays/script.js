let frutas = ["maçã", "banana", "limão"];
console.log(frutas);
console.log(frutas.length);

frutas[2] = "laranja";
console.log(frutas);

let pushFrutas = frutas.push("tangerina", "pêra");
console.log(frutas);
console.log(pushFrutas);

const popFrutas = frutas.pop();
console.log(frutas);
console.log(popFrutas);

const unshiftFrutas = frutas.unshift("uva", "morango");
console.log(frutas);
console.log(unshiftFrutas);

const shiftFrutas = frutas.shift();
console.log(frutas);
console.log(shiftFrutas);

const matrizFrutas = [
  ["manga", "abacaxi", "goiaba"],
  ["kiwi", "melão", "abacate"],
];
console.log(matrizFrutas[0]);
console.log(matrizFrutas[0][2]);
console.log(matrizFrutas[1]);
console.log(matrizFrutas[1][1]);

let [first, second, third] = frutas;
console.log(first, second, third);

[first, , third, fourth] = frutas;
console.log(first, third, fourth);

[first, second, third, , , sixth = "acerola"] = frutas;
console.log(first, second, third, sixth);

let [newFirst, mewSecond, ...rest] = frutas;
console.log(newFirst, newFirst, rest);

let str = "fruta";
console.log(str.split(""));
console.log(str);

str = "fruta é bom pra saúde";
console.log(str.split(" "));
str = str.split("");
console.log(str);
str.reverse();
console.log(str);
str = str.join("");
console.log(str);

let pets = ["cachorro", "gato", "peixe"];
console.log(pets.includes("cachorro"));
console.log(pets.indexOf("gato"));

let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let removed = fruits.splice(2, 2);

console.log(fruits); // ["apple", "banana", "kiwi"]
console.log(removed); // ["orange", "mango"]

let cores = ["vermelha", "amarela", "verde"];
console.log(cores);
cores.splice(1, 0, "azul", "roxo", "branco");
console.log(cores);

let copia = [...cores];
console.log(copia);
copia.splice(0);
console.log(copia);

let frutas1 = ["banana", "laranja", "abacaxi"];
let frutas2 = ["melão", "abacate"];
let frutas3 = frutas1.concat(frutas2);
console.log(frutas1);
console.log(frutas2);
console.log(frutas3);
