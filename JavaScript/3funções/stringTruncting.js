function truncateString(untruncatedString, num) {
  if (untruncatedString.length > num) {
    return untruncatedString.slice(0, num) + "...";
  } else {
    return untruncatedString;
  }
}

//console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
