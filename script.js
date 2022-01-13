// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Generate Password Function//
function generatePassword() {
    //Values for Password//
    var special = ["!" , "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //Password Requirements//
    var passwordlength = document.getElementById("length").value;
    var hasspecial = document.getElementById("special").checked;
    var hasnumber = document.getElementById("numbers").checked;
    var hasuppercase = document.getElementById("uppercase").checked;
    var haslowercase = document.getElementById("lowercase").checked;

    //Password Generating//
  let pass = [];
    if (hasspecial) pass = pass.concat(special);
    if (hasnumber) pass = pass.concat(numbers);
    if (hasuppercase) pass = pass.concat(uppercase);
    if (haslowercase) pass = pass.concat(lowercase);
  var passwordinfo = [];
    for (let i=0; i<passwordlength; i++) {
      passwordinfo.push(pass[Math.floor(Math.random()*pass.length)])
          }
  return passwordinfo.join(""); 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
