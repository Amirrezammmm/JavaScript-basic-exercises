function Names() {
    let array = ["Amirreza", "Ali", "Aref", "Amin", "Amir", "Arash", "Arian", "Arman", "Aryan", "Asad", "Mohammad", "Milad"];
    let result = [];


    for (let i = 0; i < array.length; i++) {
        if (array[i].startsWith("A") || array[i].startsWith("a")) {
            result.push(array[i]);
        }
    }


    let html = result.map(name => `<div>${name}</div>`).join("");

    let resultDiv = document.getElementById("nameList");
    resultDiv.innerHTML = html;
}
