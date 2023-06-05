// Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers

function getPositiveNumbers(numbers) {
    let positiveNumbers = numbers.filter(function(number) {
      return number > 0;
    });
  
    return positiveNumbers;
  }
  
  // Example usage:
  let inputNumbers = [-2, 5, 0, -10, 7, -3, 12];
  let positiveNumbers = getPositiveNumbers(inputNumbers);
  console.log(positiveNumbers); // Output: [5, 7, 12]
  