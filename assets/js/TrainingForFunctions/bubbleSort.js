function bubbleSort(arr) {
    let len = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        len--; 
    } while (swapped);
    return arr;
}

function sortArray() {
    const input = document.getElementById("inputArray").value;
    const array = input.split(',').map(Number);

    if (array.some(isNaN)) {
        document.getElementById("output").innerHTML = "لطفاً فقط عدد وارد کنید.";
        return;
    }

    const sortedArray = bubbleSort(array);
    document.getElementById("output").innerHTML = sortedArray.join(", ");
}