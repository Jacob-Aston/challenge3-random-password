// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Generates a password based on chosen criteria.
function generatePassword() {

  const lowerCase = { charSet: "abcdefghijklmnopqrstuvwxyz", isUsed: false };
  const upperCase = { charSet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", isUsed: false };
  const symbols = { charSet: "!@#$%^&*", isUsed: false };
  const numbers = { charSet: "1234567890", isUsed: false };

  // Prompts user to type password length
  let charCount = Number(prompt("Type your password length below?", "(8-120) characters"));

  // If password length is invalid it sents new prompt with more information
  while (charCount < 8 || charCount > 120) {
    charCount = Number(prompt("That password length is invalid... Enter a password length between 8 and 120 characters.", "(8-120) characters"));
  }

  // Prompts to pick password criteria
  if (confirm("Can your password contain lower case?")) {
    lowerCase.isUsed = true;
  }
  if (confirm("Can your password contain upper case?")) {
    upperCase.isUsed = true;
  }
  if (confirm("Can your password contain symbols?")) {
    symbols.isUsed = true
  }
  if (confirm("Can your password contain numbers?")) {
    numbers.isUsed = true
  }

  // If no criteria selected issue new prompts
  while (!(lowerCase.isUsed || upperCase.isUsed || symbols.isUsed || numbers.isUsed)) {
    if (confirm("(you must select at least one character type: lower case, upper case, symbols, or numbers.)   Can your password contain lower case?")) {
      lowerCase.isUsed = true;
    }
    if (confirm("(you must select at least one character type: lower case, upper case, symbols, or numbers.)   Can your password contain upper case?")) {
      upperCase.isUsed = true;
    }
    if (confirm("(you must select at least one character type: lower case, upper case, symbols, or numbers.)   Can your password contain symbols?")) {
      symbols.isUsed = true;
    }
    if (confirm("(you must select at least one character type: lower case, upper case, symbols, or numbers.)   Can your password contain numbers?")) {
      numbers.isUsed = true;
    }
  }

  // Declares array to build password in
  let password = [];

  // Random number generator (source unknown)
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  // Assigns characters to password array one character type at a time
  while (password.length < charCount) {
    if (lowerCase.isUsed === true) {
      const index = getRandomInt(lowerCase.charSet.length);
      const value = lowerCase.charSet.at(index);
      password.push(value);
      if (password.length === charCount) break;
    };
    if (upperCase.isUsed === true) {
      const index = getRandomInt(upperCase.charSet.length);
      const value = upperCase.charSet.at(index);
      password.push(value);
      if (password.length === charCount) break;
    };
    if (symbols.isUsed === true) {
      const index = getRandomInt(symbols.charSet.length);
      const value = symbols.charSet.at(index);
      password.push(value);
      if (password.length === charCount) break;
    };
    if (numbers.isUsed === true) {
      const index = getRandomInt(numbers.charSet.length);
      const value = numbers.charSet.at(index);
      password.push(value);
    };
  }

  // Array shuffling algorithm to scramble mix up the password (source: https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  // Returns the password array as a string to be displayed
  return password.join("");
}