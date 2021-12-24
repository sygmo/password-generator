// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // ask user for password length (repeat until value 8-128 is chosen)
  var passLen = 0;
  while(passLen < 8 || passLen > 128) {
    passLen = prompt("Choose length of password (must be between 8 and 128):");
  }

  // ask user which characters should be included
  var includeLowerCase = confirm("Include lowercase letters?");
  var includeUpperCase = confirm("Include uppercase letters?");
  var includeNums = confirm("Include numbers?");
  var includeSpecials = confirm("Include special characters?");

  console.log("Length: " + passLen);
  console.log("Lowercase? " + includeLowerCase);
  console.log("Uppercase? " + includeUpperCase);
  console.log("Numbers? " + includeNums);
  console.log("Special chars? " + includeSpecials);

  // Present user series of prompts/confirms
    // length prompt - var
    // lower confirm - var
    // upper confirm - var
    // nums confirm - var
    // special confirm - var
  // length prompt / number between 8-128
    // if/conditional check if length is between 8-128
      // if true continue to confirms. if false ask length again
  // confirm for lower, upper, nums, special chars
  // input validation - correct nums, at least 1 character chosen
    // if/conditional check using || , true continue to generate, false ask confirm again
  // randomly generate password string from choices
    // arrays of lower, upper, nums, special
    // array of all chosen characters, concat?
    // choose from the all options array number of chars required (from length prompt)
      // for loop
      // Math.random choose index position from array
      // grab from chosen array, add to password array
      // convert array to string
      // return string
  // display password in text box - write to page
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
