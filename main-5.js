// Create a function that will return a boolean specifying if a number is a prime number

function isPrime(number) {
    if (number < 2) {
      return false;
    }
  
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  console.log(isPrime(7));  // Output: true
  console.log(isPrime(12)); // Output: false
  