// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

// Function to ask user if the user would like to begin generating a password
let chooseYesOrNo = confirm("Do you want to generate a password?");
if(chooseYesOrNo === true) {
    alert("Thank you! Click generate password to get started. Atleast one character type should be selected.");
} else {
    alert("Sorry you clicked cancel, maybe next time!");
}

// Function to prompt user for password options
let choicesArray = []
let passwordLength

function getPasswordOptions() {
   passwordLength = prompt("Enter the desired password length(It should be no more than '64 characters' and not less than '10 characters'.");
   if(passwordLength < 10 || passwordLength > 64) {
    alert("Password must be atleast '10 characters' and atmost '64 characters'. Thank you!");
   };


    let includeSpecialCharacters = confirm("Do you want to include Special Characters?");
        if(includeSpecialCharacters === true) {
          choicesArray = choicesArray.concat(specialCharacters)
        }

    let includeNumericCharacters = confirm("Do you want to include Numeric Characters?");
        if(includeNumericCharacters === true) {
            choicesArray = choicesArray.concat(numericCharacters)
        }

    let includeLowerCasedCharacters = confirm("Do you want to include Lower Cased Characters?");
        if(includeLowerCasedCharacters === true) {
            choicesArray = choicesArray.concat(lowerCasedCharacters)
        }

    let includeUpperCasedCharacters = confirm("Do you want to include Upper Cased Characters?");
        if(includeUpperCasedCharacters === true) {
            choicesArray = choicesArray.concat(upperCasedCharacters)
        }

}

// Function to generate password with user input
function generatePassword() {
    getPasswordOptions()
    let finalPassword = "";
    for(let i = 0; i < passwordLength; i++) {
        finalPassword += choicesArray[Math.floor(Math.random() * choicesArray.length)]
    } return finalPassword  
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);