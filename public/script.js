let prName = document.getElementById('name');
let prPrice = document.getElementById('price');
let prDes = document.getElementById('des');
let prImg = document.getElementById('img');

async function sendData() {
    await fetch("addName"), {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({name:prName.value, price:prPrice.value, description:prDes.value, img:prImg.value})
    }
}
