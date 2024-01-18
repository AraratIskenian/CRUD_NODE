let usName = document.getElementById('name');
let usAge = document.getElementById('age');

async function sendData() {
    await fetch("http://localhost:3000/addInfo&quot"), {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({surname:name.value, age:age.value})
    })
    }