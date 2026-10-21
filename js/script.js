const lengthValue = document.getElementById('lengthValue');
const lengthInput = document.getElementById('length');
const generateBtn = document.getElementById('generateBtn');
const passwordInput = document.getElementById('password');
const message = document.getElementById("message")
const copyBtn = document.getElementById('copyBtn');

// const characters = {
//     lowercase: 'abcdefghijklmnopqrstuvwxyz',
//     uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//     numbers: '0123456789',
//     symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-=',
// };

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz" + 
"0123456789" + 
"!@#$%^&*()_+~`|}{[]:;?><,./-=";

// password length change
// lengthInput.addEventListener('input', () => {
//     lengthValue.textContent = lengthInput.value;
// });

// generate password
// function generatePassword() {
//     const length = Number(lengthInput.value);
//     let password = '';
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         password += characters[randomIndex];
//     }
//     return password;
// }

// generate button
// generateBtn.addEventListener('click', () => {
//     const pasword = generatePassword();
//     passwordInput.value = pasword;
//     message.textContent = ""
// });



// copy button
// copyBtn.addEventListener('click', () => {
//     if (passwordInput.value === "") {
//         message.textContent = "Please generate a password first!";
//         return;
//     } 
    // else {
    //     password.select();
    //     document.execCommand('copy');
    //     message.textContent = "Password copied to clipboard!";
    // }

//     navigator.clipboard.writeText(passwordInput.value)
//     message.textContent = "Password copied to clipboard!";
// });