function average() {
    const first = parseFloat(document.getElementById("first_number").value);
    const second = parseFloat(document.getElementById("second_number").value);
    const third = parseFloat(document.getElementById("third_number").value);

    const sum = first + second + third;
    const avg = sum / 3;

    document.getElementById("result").textContent = "Average is " + avg.toFixed(2);
}
