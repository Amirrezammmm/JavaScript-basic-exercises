function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function showPrimes() {
    let primes = [];
    for (let i = 1; i <= 100; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    document.getElementById("result").innerText = "Prime Numbers: " + primes.join(", ");
}
