function repeatStringNumTimes(string, num) {
  let repeatedString = "";
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      repeatedString += string;
    }
    return repeatedString;
  } else {
    return "";
  }
}

