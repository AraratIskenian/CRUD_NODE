let prName = document.getElementById('PrName');
let prPrice = document.getElementById('PrPrice');
let prImg = document.getElementById('PrImage');
let prUUID = document.getElementById('PrUUID');
let prDes = document.getElementById('PrDes');

async function sendData() {
    await fetch("addName"), {
    method: "POST",
    headers: {
    "Content-Type": "application/json"
    },
    body: JSON.stringify({name:prName.value, price:prPrice.value, img:prImg.value, UUID:prUUID.value, des:prDes.value,})
    }
}
