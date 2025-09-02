function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

function sortArray() {
    const input = document.getElementById("inputArray").value;
    const array = input.split(',').map(Number);

    if (array.some(isNaN)) {
        document.getElementById("output").innerHTML = "لطفاً فقط عدد وارد کنید.";
        return;
    }

    const sortedArray = quickSort(array);
    document.getElementById("output").innerHTML = sortedArray.join(", ");
}