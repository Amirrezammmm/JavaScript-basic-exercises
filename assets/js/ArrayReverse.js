function arrayReversor(){
    let myArray = document.getElementById("array").innerText.split(", ").map(Number);
    let reversedArray = myArray.reverse();
    let arrayReversed = document.getElementById("arrayreversed");
    arrayReversed.innerHTML = "Array Reversed: " + reversedArray.join(", ");
}