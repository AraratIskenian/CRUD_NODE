let usName = document.getElementById('name');
let usEmail = document.getElementById('email');
let usPassword = document.getElementById('password');

async function sendData() {
    await fetch("addName"), {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({name:usName.value, email:usEmail.value, password:usPassword.value})
    }
}