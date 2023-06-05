// Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0;
  }
  
  // Example usage:
  console.log(isDivisible(10, 2, 5));  // Output: true
  console.log(isDivisible(12, 3, 4));  // Output: true
  console.log(isDivisible(15, 2, 7));  // Output: false
  