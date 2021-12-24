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

  // generate random password of given length using chosen char options
  var passArray = []
  for (var i = 0; i < passLen; i++) {
    // get random index
    var index = Math.floor(Math.random() * validChars.length);
    passArray.push(validChars[index]);
  }
  generatedPass = passArray.join('')

  console.log(generatedPass);

  return generatedPass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
