function multiplyAsync(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
      reject(new Error('Oba argumenty powinny być liczbami.'));
    } else {
      const result = x * y;
      resolve(result);
    }
  });
}

// Callback, który wypisuje wynik w konsoli
function printResult(result) {
  console.log('Wynik:', result);
}

// Przykład użycia
const num1 = 5;
const num2 = 10;

multiplyAsync(num1, num2)
  .then(printResult)
  .catch(error => console.error('Błąd:', error.message));
