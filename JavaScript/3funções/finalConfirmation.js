// receber string e substring
// se a substring esta na string
//  se nao tem mais nada depois da string
//    retorna true
//  se tem algo depois entao string nao esta no final
//    retorna false
// se nao esta na string
//  retorna false

function confirmEnding(mainString, subString) {
  return mainString.slice(-subString.length) === subString;
}

console.log(confirmEnding("Javascript é bom", "bom"));
console.log(confirmEnding("Javascript é bom", "ruim"));
