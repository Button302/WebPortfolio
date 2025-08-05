function generatePassword(length,lower,upper,numbers,symbols) {
    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberschar = "0123456789";
    const symbolschar = "!@#$%^&*()_+{}[]|:;<>,.?/~`";

    let allowedChars = "";
    let password = "";

    allowedChars += lower? lowercasechars : "";
    allowedChars += upper? uppercasechars : "";
    allowedChars += numbers? numberschar : "";
    allowedChars += symbols? symbolschar : "";

    if(length <=0){
        return "Password length must be greater than 0";
    }
    if(allowedChars.length === 0){
        return `(at least one character type must be selected: lowercase, uppercase, numbers, symbols)`;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}
const user_length = document.getElementById('Password_Gen_length');
const user_symbols = document.getElementById('Generate_password_symbols');
const user_numbers = document.getElementById('Generate_password_numbers');
const user_upper = document.getElementById('Generate_password_upper');
const user_lower = document.getElementById('Generate_password_lower');
const btn = document.getElementById('Generate_password_btn');
const text = document.getElementById('Generate_password_p');

let length = 0;
let lower = false;
let upper = false;
let numbers = false;
let symbols = false;

btn.onclick = function() {
    if(user_length.value > 0) {
        length = user_length.value;
    }


    if(user_symbols.checked) {
        symbols = true;
    }
    else {
    symbols = false;
    }


    if(user_lower.checked) {
        lower = true;
    }
    else {
    lower = false;
    }


    if(user_upper.checked) {
        upper = true;
    }
    else {
    upper = false;
    }


    if(user_numbers.checked) {
        numbers = true;
    }
    else {
    numbers = false;
    }
    text.textContent = generatePassword(length, lower, upper, numbers, symbols);

}
