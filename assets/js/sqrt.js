function showSqrt() {
    let num = parseFloat(document.getElementById("num").value);
    if (isNaN(num)) {
      document.getElementById("result").textContent = "عدد معتبر وارد کنید.";
      return;
    }
    if (num < 0) {
      document.getElementById("result").textContent = "عدد منفی جذر ندارد.";
      return;
    }
    let sqrt = Math.sqrt(num);
    document.getElementById("result").textContent = "جذر عدد: " + sqrt;
  }