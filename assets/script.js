// Assignment Code
var generateBtn = document.querySelector("#generate");

// Instructor Provided Template: Anthony Cooper
function generatePassword() {
  var password = '';

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "0123456789";
  var special = "#$%&()*+,-./:;<=>?";
  var uppercase = lowercase.toUpperCase();

  // Added a new var to concat strings above
  var allCharacters = '';

  var inputLength = parseInt(prompt("Choose a lenght between 8 and 128"));

  while (inputLength < 8 || inputLength > 128) {
    // GOOD CODE GOES HERE
    // Changed text in alert
    alert('Password must be between 8 and 128 characters long');
    //loop back to first prompt
    inputLength = parseInt(prompt("Choose a lenght between 8 and 128"));
  }

  // confirm user for all character types
  var wantsLower = confirm('Would you like lowercase letters?');
  var wantsNumbers = confirm('Would you like numbers?');
  var wantsSpecial = confirm('Would you like special characters?');
  var wantsUpper = confirm('Would you like uppercase letters?');



  // if confirms are true add the proper letters, numbers or special characters to the allCharacters var
  if (wantsLower) {
    allCharacters += lowercase
  }
  if (wantsNumbers) {
    allCharacters += numbers
  }
  if (wantsSpecial) {
    allCharacters += special
  }
  if (wantsUpper) {
    allCharacters += uppercase
  }
  
   // while loop create to make sure user chooses at least one type
  while (wantsLower === false && wantsNumbers === false && wantsSpecial === false && wantsUpper === false){
    alert ("Please choose at least one character type");
    generatePassword();
  }

  // for loop to return the inputLength and set the password var equal to a random character in the allcharacters var
for (var i = 0; i < inputLength; i++) {
  password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length))
}

  return password;
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);