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

function generatePassword() {

  const lowerCase = {charSet: "abcdefghijklmnopqrstuvwxyz", isUsed: false};
  const upperCase = {charSet: "ABCDEFG", isUsed: false};
  const symbols ={charSet: "!@#$%^&*", isUsed: false};
  const numbers = {charSet: "1234567890", isUsed: false};

  let charCount = Number(prompt("How long is your password?", "8-120"));
  
  while (charCount < 8 || charCount > 120) {
    charCount = Number(prompt("Incorrect length... How long is your password?", "8-120"));
  }
  
  if (confirm("Can contain lower case")) {
    lowerCase.isUsed = true;
  }
  if (confirm("Can contain upper case")) {
    upperCase.isUsed = true;
  }
  if (confirm("Can contain symbols")) {
    symbols.isUsed = true
  }
  if (confirm("Can contain numbers")) {
    numbers.isUsed = true
  }

  while (!(lowerCase.isUsed || upperCase.isUsed || symbols.isUsed || numbers.isUsed)) {
    if (confirm("(you must select at least one character type) Can contain lower case")) {
      lowerCase.isUsed = true;
    }
    if (confirm("(you must select at least one character type) Can contain upper case")) {
      upperCase.isUsed = true;
    }
    if (confirm("(you must select at least one character type) Can contain symbols")) {
      symbols.isUsed = true
    }
    if (confirm("(you must select at least one character type) Can contain numbers")) {
      numbers.isUsed = true
    }
  }

  let password = [];
  
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  for (let i = 0; i < charCount;) {
    if (lowerCase.isUsed === true) {
      const index = getRandomInt(lowerCase.charSet.length);
      const value = lowerCase.charSet.at(index);
      password.push(value);
      i++;
      if (i < charCount) break;
    };
    if (upperCase.isUsed === true) {
      const index = getRandomInt(upperCase.charSet.length);
      const value = upperCase.charSet.at(index);
      password.push(value);
    };
    if (symbols.isUsed === true) {
      const index = getRandomInt(symbols.charSet.length);
      const value = symbols.charSet.at(index);
      password.push(value);
    };
    if (numbers.isUsed === true) {
      const index = getRandomInt(numbers.charSet.length);
      const value = numbers.charSet.at(index);
      password.push(value);
    };
}
