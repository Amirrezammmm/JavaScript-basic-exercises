function isPerfectNumber(n) {
    if (n <= 1) return "NO";

    let sum = 0;
    for (let i = 1; i <= n / 2; i++) {
      if (n % i === 0) {
        sum += i;
      }
    }

    return sum === n ? "YES" : "NO";
  }

  function checkPerfect() {
    const input = document.getElementById("numberInput").value;
    const number = parseInt(input);
    
    if (isNaN(number)) {
      document.getElementById("result").innerText = "لطفاً یک عدد معتبر وارد کنید.";
      return;
    }

    const result = isPerfectNumber(number);
    document.getElementById("result").innerText = 
      result === "YES" 
      ? `عدد ${number} یک عدد کامل است ` 
      : `عدد ${number} کامل نیست `;
  }