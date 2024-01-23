const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const sympol = "@#$%^&*()_+!~{}[]/-=?<>,";
const allChars = upperCase + lowerCase + sympol + number;
function createPassword(){
let password = "";
password +=upperCase[Math.floor(Math.random()*upperCase.length)];
password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
password +=sympol[Math.floor(Math.random()*sympol.length)];
password += number[Math.floor(Math.random()*number.length)];
while (length >password.length){
    password+=allChars[Math.floor(Math.random()*allChars.length)];
}
passwordBox.value = password;
}

function copyPassword(){
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
}
