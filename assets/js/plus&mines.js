function resualt(){
    let firstNumber = document.getElementById("first_number").value;
    let secondNumber = document.getElementById("second_number").value;

    let plus = parseInt(firstNumber) + parseInt(secondNumber);
    let minus = parseInt(firstNumber) - parseInt(secondNumber);
    let multiply = parseInt(firstNumber) * parseInt(secondNumber);
    let divide = parseInt(firstNumber) / parseInt(secondNumber);

    document.getElementById("plus").innerHTML = "Addition: " + plus;
    document.getElementById("minus").innerHTML = "Subtraction: " + minus;
    document.getElementById("multiply").innerHTML = "Multiplication: " + multiply;
    document.getElementById("divide").innerHTML = "Division: " + divide;
}