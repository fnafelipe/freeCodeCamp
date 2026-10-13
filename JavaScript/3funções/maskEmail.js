function maskEmail(email) {
  let posArroba = email.indexOf("@");

  let emailNovo =
    email[0] + "*".repeat(posArroba - 2) + email.slice(posArroba - 1);

  return emailNovo;
}

let email = "apple.pie@example.com";
console.log(email);
console.log(maskEmail(email));
