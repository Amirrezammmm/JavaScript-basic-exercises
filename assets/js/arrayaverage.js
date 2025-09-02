let numbers = [12, 45, 23, 67, 89, 34, 56, 78, 90, 12];
document.getElementById("array").innerHTML = "The array is: " + numbers.join(", ");
function showAverage(){
    let sum = 0;
    let count = numbers.length;
    for (let i = 0; i < count; i++) {
        sum += numbers[i];
    }
    let average = sum / count;
    document.getElementById("average").innerHTML = "The average is: " + average;
}