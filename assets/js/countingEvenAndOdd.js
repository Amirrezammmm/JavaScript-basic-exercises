function createRandom(){
    arr =[]
    for(let i=0; i<10; i++){
        let random = Math.floor(Math.random() * 100) + 1;
        arr.push(random);
    }
    let randomNumbers = document.getElementById("randomNumbers");
    randomNumbers.innerHTML = arr.join(", ");
}
function countEvenAndOdd(){
    let randomNumbers = document.getElementById("randomNumbers").innerHTML.split(", ").map(Number);
    let even = randomNumbers.filter(num => num % 2 === 0).length;
    let odd = randomNumbers.filter(num => num % 2 !== 0).length;
    document.getElementById("evenCount").innerHTML = "Even Count: " + even;
    document.getElementById("oddCount").innerHTML = "Odd Count: " + odd;
}