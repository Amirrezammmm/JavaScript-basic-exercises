function checkPalindrome() {
    const input = document.getElementById("numberInput").value;
    const reversed = input.split('').reverse().join('');

    if (input === reversed) {
      document.getElementById("result").innerText = `عدد ${input} متقارن است `;
    } else {
      document.getElementById("result").innerText = `عدد ${input} متقارن نیست `;
    }
  }
  