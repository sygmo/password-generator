// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var generatedPass = "";

  // ask user for password length 
  var passLen = 0;
  // keep asking until value 8-128 is chosen
  while(passLen < 8 || passLen > 128) {
    passLen = prompt("Choose length of password (must be between 8 and 128):");
  }

  // ask user which characters should be included
  // at least one option must be chosen
  var includeLowerCase, includeUpperCase, includeNums, includeSpecials = false;
  while (!includeLowerCase && !includeUpperCase && !includeNums && !includeSpecials) {
    alert("Please include select at least one of the following choices:")
    includeLowerCase = confirm("Include lowercase letters?");
    includeUpperCase = confirm("Include uppercase letters?");
    includeNums = confirm("Include numbers?");
    includeSpecials = confirm("Include special characters?");
  }

  console.log("Length: " + passLen);
  console.log("Lowercase? " + includeLowerCase);
  console.log("Uppercase? " + includeUpperCase);
  console.log("Numbers? " + includeNums);
  console.log("Special chars? " + includeSpecials);

  // create arrays for different char types
  var lowers = "abcdefghijklmnopqrstuvwxyz".split('');
  var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
  var nums = "0123456789".split('');
  var specials = "~`!@#$%^&*()-_+={}[]|:;\"\'<>,.?/\\".split('');

  //console.log(specials);

  // combine chosen chars into one array
  var validChars = [];
  if (includeLowerCase) {
    validChars = validChars.concat(lowers);
  }
  if (includeUpperCase) {
    validChars = validChars.concat(uppers);
  }
  if (includeNums) {
    validChars = validChars.concat(nums);
  }
  if (includeSpecials) {
    validChars = validChars.concat(specials);
  }

  console.log(validChars);

  return generatedPass;

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
