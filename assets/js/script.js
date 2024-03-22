// Assignment code here
function randomType() {
  /* pick a random character type from the selected types */
  var charType =
    selectedTypes[Math.floor(Math.random() * selectedTypes.length)];
  return charType;
}

function randomChar(charType) {
  /* pick a random character from a specific character type */
  var character = charType[Math.floor(Math.random() * charType.length)];
  return character;
}

function askTypes() {
  /* checks which character types are needed and adds them to selectedTypes array*/
  passwordLength = prompt("How long should the password be?");
  if (8 <= passwordLength && passwordLength <= 128) {
  } else {
    alert("Password length must be between 8 and 128 characters long");
    passwordLength = prompt("How long should the password be?");
  }
  includeUppercase = confirm(
    "Include uppercase letters in the password?\nHit Cancel for no."
  );
  includeLowercase = confirm(
    "Include lowercase letters in the password?\nHit Cancel for no."
  );
  includeNumbers = confirm(
    "Include numbers in the password?\nHit Cancel for no."
  );
  includeSpecial = confirm(
    "Include special characters in the password?\nHit Cancel for no."
  );
}

function checkTypes() {
  /* checks which character types are needed and adds them to selectedTypes array*/
  if (includeUppercase) {
    selectedTypes.push(uppercase);
  }
  if (includeLowercase) {
    selectedTypes.push(lowercase);
  }
  if (includeNumbers) {
    selectedTypes.push(numbers);
  }
  if (includeSpecial) {
    selectedTypes.push(special);
  }
  // console.log("Selected types are ", selectedTypes)
}
/* checks if the generated password meets reqirements */
/* function checkPassword(){ 
  var passwordOk = false
  for(i = 0; i < selectedTypes.length; i ++){
    var type = selectedTypes[i];
    for (n = 0; n < type.length; n ++){
      if((password.includes(type[n]))){
        console.log("Password includes one of the following characters " + type);
        passwordOk = true
        break
      }
      console.log("Password does not include one of the following characters " + type)
      return false
      }
    }
  return passwordOk;
} */

function generatePassword() {
  password = "";
  var newChar = "";
  askTypes();
  while (password.length < passwordLength) {
    checkTypes();
    while (selectedTypes.length > 0) {
      charType = randomType();
      newChar = randomChar(charType);
      while (selectedTypes.includes(charType)) {
        if (selectedTypes[0] == charType) {
          selectedTypes.shift();
        } else {
          var temp = selectedTypes.shift();
          selectedTypes.push(temp);
        }
      }
      password += newChar;
    }
  }
  return password;
  /* if(checkPassword()){
    return password;
  } else {
    console.log("Password does not meet requirements. Generating new password.");
    return password
    // generatePassword();
  } */
}

var password = "";
var passwordLength = 8;
var selectedTypes = [];
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var includeUppercase = true;
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var special = "!@#$%^&*_+-=,./<>?;':{}[]";
var includeUppercase = true;
var includeLowercase = true;
var includeNumbers = true;
var includeSpecial = true;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
