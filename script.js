// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  // Write all code here

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
  // randomly generae password string from choices
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
