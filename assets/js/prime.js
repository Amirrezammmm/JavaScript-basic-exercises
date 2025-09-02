function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  function checkPrime() {
    const num = parseInt(document.getElementById("userNumber").value);
    const result = document.getElementById("result");

    if (isNaN(num)) {
      result.innerText = "Please enter a valid number.";
      return;
    }

    if (isPrime(num)) {
      result.innerText = "Your number is prime.";
    } else {
      result.innerText = "Your number is not prime.";
    }
  }