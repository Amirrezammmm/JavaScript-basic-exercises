function calculate(){
    let number = document.getElementById("number").value;

    let result = Math.pow(number, number);
    document.getElementById("power").value =  result;
}