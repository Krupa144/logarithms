function generatePrimes() {
  const n = parseInt(document.getElementById("inputNumber").value);
  const resultDiv = document.getElementById("result");

  if (isNaN(n) || n < 2) {
    resultDiv.innerHTML = "<p>Podaj liczbę większą lub równą 2.</p>";
    return;
  }

  const sieve = new Array(n + 1).fill(true);
  sieve[0] = sieve[1] = false;

  for (let i = 2; i * i <= n; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= n; j += i) {
        sieve[j] = false;
      }
    }
  }

  const primes = [];
  for (let i = 2; i <= n; i++) {
    if (sieve[i]) primes.push(i);
  }

  resultDiv.innerHTML = `<p>Liczby pierwsze do ${n}:</p><p>${primes.join(", ")}</p>`;
}
