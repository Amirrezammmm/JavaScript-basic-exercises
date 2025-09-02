function power(){
    let first = document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let result = Math.pow(first, second);
    document.getElementById("result").value = result;
}
function clearInputs(){
    document.getElementById("first").value = "";
    document.getElementById("second").value = "";
    document.getElementById("result").value = "";
    document.getElementById("first").focus();
}