// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Function to get a random variable from the arrays 
function getRandomValueFromArray(array){
  var randomNumber = Math.floor(Math.random() * array.length) // Random number between 0 and 0.99  // Random number between 0 and max - 0.1
  return array[randomNumber];
}

// Arrays to hold password contents
var pwdLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var pwdUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var pwdNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

var pwdCharacter = ["!", "\"", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", "\\", ":", ";", "<", ">", "=", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"]

// Function to generate password
function generatePassword() {

  var numberOfCharacters = prompt("How many characters do you want in the password?");
  var includeSpecialCharacters = confirm("Do you want to include special characters in the password?");
  var includeLowerCaseCharacters = confirm("Do you want to include lower case characters in the password?");
  var includeUpperCaseCharacters = confirm("Do you want to include upper case characters in the password?");
  var includeNumbers = confirm("Do you want to include numbers in the password?");

  var options = [];
  var generatedPassword = "";
  var passwordLength = numberOfCharacters

  // Based on the user's answers, create an array of possible characters to choose from.
  if (includeSpecialCharacters) {
   options = options.concat(pwdCharacter)
  }
  if (includeLowerCaseCharacters)
    options = options.concat(pwdLowerCase)

  if (includeUpperCaseCharacters)
    options = options.concat(pwdUpperCase)

  if (includeNumbers)
    options = options.concat(pwdNumbers)
  // console.log(getRandomValueFromArray(options));
  // Add the random value to our generatedPassword variable
  // Repeat past two steps x number of times (numberOfCharacters)
  for (var i=generatedPassword.length;i<passwordLength;i++){
    generatedPassword+=getRandomValueFromArray(options);
  }

  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
