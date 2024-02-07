const passwordBox = document.getElementById("password");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number ="1234567890";
const symbols = "~@#$%^&*()_+{}|?></][\=-";
const numberINp = document.getElementById("numberInput");
const allChars = upperCase + lowerCase+ symbols+ number


function createPassword(){
    const length = parseInt(numberINp.value);
    let password ="";
    
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];

    while(length>password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];

        passwordBox.value = password;
    }

  
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
