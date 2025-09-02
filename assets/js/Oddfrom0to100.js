let oddDiv = document.querySelector(".odd");
let oddNumbers = [];

for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    oddNumbers.push(i);
  }
}

oddDiv.innerHTML = oddNumbers.join(", ");