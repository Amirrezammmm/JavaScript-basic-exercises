function createRandom(){
    let arr = [];
    for(let i=0; i<100;i++){
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
    let randomNumbers = document.getElementById("randomNumbers");
    randomNumbers.innerHTML = arr.join(", ")
}
function oddTotal(){
    let myarr = document.getElementById("randomNumbers").innerHTML.split(", ");
    let oddNumbers = myarr.filter(num => parseInt(num) % 2 !== 0);

    let TotalOdd = document.getElementById("TotalOdd");
    TotalOdd.value = oddNumbers.length;
}
