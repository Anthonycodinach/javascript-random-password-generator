// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Arrays to hold password contents
var pwdLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var pwdUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    
var pwdNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var pwdCharacter = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]

// Function to generate password
function generatePassword() {
  var passwordChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]
            
    retVal = "";
for (var i = 0, n = passwordChars.length; i < length; ++i) {
    retVal += passwordChars.charAt(Math.floor(Math.random() * n));
}

  var numberOfCharacters=prompt("How many characters do you want in the password?")
  var includeSpecialCharacters=confirm("Do you want to include special characters in the password?")
  var includeLowerCaseCharacters=confirm("Do you want to include lower case characters in the password?")
  var includeUpperCaseCharacters=confirm("Do you want to include upper case characters in the password?")
  var includeUpperCaseCharacters=confirm("Do you want to include numbers in the password?")

   /* var randomNumber=Math.random() // Random number between 0 and 0.99
  var randomNumberUpToMax=randomNumber * max // Random number between 0 and max - 0.1
  var randomNumberInRange= min + randomNumberUpToMax;

  return Math.floor(randomNumberInRange); // Remove the decimal places
} */

        return "Unique Password";
 }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
