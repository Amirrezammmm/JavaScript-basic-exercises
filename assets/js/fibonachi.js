    function showFibonacci() {
      let count = parseInt(document.getElementById("count").value);
      let result = document.getElementById("result");

      if (isNaN(count) || count <= 0) {
        result.innerText = "Please enter a valid positive number.";
        return;
      }

      let fib = [0, 1];
      for (let i = 2; i < count; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
      }

     
      result.innerText = "Fibonacci Series: " + fib.slice(0, count).join(", ");
    }