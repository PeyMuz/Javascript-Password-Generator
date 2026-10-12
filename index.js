// DOM Elements - all the elements we need from HTML
const passwordInput = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthDisplay = document.getElementById("length-value");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateButton = document.getElementById("generate-btn");
const copyButton = document.getElementById("copy-btn");
const strengthBar = document.querySelector(".strength-bar");
const strengthText = document.querySelector(".strength-container p");

// Character sets
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const symbolCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?/";


//to update the slide kength
lengthSlider.addEventListener("input", () =>{
  lengthDisplay.textContent = lengthSlider.value;
});


generateButton.addEventListener("click", makepassword)


function makepassword (){
    const length = Number(lengthSlider.value);
    const includeUppercase = uppercaseCheckbox.checked;
    const includeLowercase = lowercaseCheckbox.checked;
    const includeNumbers = numbersCheckbox.checked;
    const includeSymbols = symbolsCheckbox.checked;


    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols){
       alert("Please select atleast one of the checkbox");
       return;
    }

    const newPassword = createRandomPassword(
        length,
        includeUppercase,
        includeLowercase,
        includeNumbers,
        includeSymbols
    );

    passwordInput.value = newPassword;
}

function createRandomPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {

}

