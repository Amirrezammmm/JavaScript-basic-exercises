let evenDiv = document.querySelector(".even");

let evenNumbers = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    evenNumbers.push(i);
  }
}

evenDiv.innerHTML = evenNumbers.join(", ");