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

  let charCount = prompt("How long is your password?", "8-120");
  
  while (charCount < 8 || charCount > 120) {
    prompt("Incorrect length... How long is your password?", "8-120");
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