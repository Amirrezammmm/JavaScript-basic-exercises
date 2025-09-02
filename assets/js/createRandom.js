function generateRandom4Digit() {
    return Math.floor(1000 + Math.random() * 9000);
}

function showRandom() {
    document.getElementById("output").textContent = "عدد: " + generateRandom4Digit();
}