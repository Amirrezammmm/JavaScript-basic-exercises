function printTriangle() {
    const rows = parseInt(document.getElementById("rowsInput").value);
    let triangle = '';

    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= i; j++) {
        triangle += '*';
      }
      triangle += '\n';
    }
    document.getElementById("output").innerText = triangle;
}
function printTriangle_withNumber() {
    const rows = parseInt(document.getElementById("rowsInput").value);
    let triangle = '';

    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= i; j++) {
        triangle += j;
      }
      triangle += '\n';
    }
    document.getElementById("output").innerText = triangle;
}
function Rectangle() {
    const rows = parseInt(document.getElementById("rowsInput").value);
    let Rectangle = '';

    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= 4; j++) {
        Rectangle += '*';
      }
      Rectangle += '\n';
    }
    document.getElementById("output").innerText = Rectangle;
}
function ReverseRightTriangle(){
    const rows = parseInt(document.getElementById("rowsInput").value);
    let triangle = '';

    for (let i = rows; i >= 1; i--) {
      for (let j = 1; j <= i; j++) {
        triangle += '*';
      }
      triangle += '\n';
    }
    document.getElementById("output").innerText = triangle;
}
