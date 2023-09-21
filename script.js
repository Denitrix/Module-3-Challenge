// Assignment code here
function randomType() {
  var charType = selectedTypes[Math.floor(Math.random() * (selectedTypes.length))];
  return charType;
}

function randomChar(charType) {
  var character = charType[Math.floor(Math.random() * (charType.length))];
  return character;
}

function checkTypes(){
  if(true) { /* includeUppercase */
    console.log("The password will include uppercase characters.")
    selectedTypes.push(uppercase);
  }
  if(true) { /* includeLowercase */
  console.log("The password will include lowercase characters.")
    selectedTypes.push(lowercase);
  }
  if(true) { /* includeNumbers */
  console.log("The password will include numeric characters.")
    selectedTypes.push(numbers);
  }
  if(true) { /* includeSpecial */
  console.log("The password will include special characters.")
    selectedTypes.push(special);
  }
  // console.log("Selected types are ", selectedTypes) 
}

function checkPassword(){
  for(i = 0; i < selectedTypes.length; i ++){
    var type = selectedTypes[i];
    for (n = 0; n < passwordLength; n ++){
      if(!(password.includes(type[n]))){
        console.log("Password does not meet requirements. Generating new password.")
        return false;
      }
    }
  }
  return true;
}

function generatePassword(){
  password = "";
  var newChar = "";
  checkTypes()
  for(i = 0; i < passwordLength; i ++){
    newChar = randomChar(randomType());
    password += (newChar);
    // console.log(newChar);
  }
  if(checkPassword()){
    return password;
  } else {
    generatePassword();
  }
}

var password = "";
var passwordLength = 8;
var selectedTypes = [];
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var includeUppercase = true
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var special = "!@#$%^&*_+-=,./<>?;':{}[]";

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
