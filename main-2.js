// Create a function that will calculate the average of numbers in an array.

function calculateAverage(numbers) {
    let sum = 0;
    let count = numbers.length;
  
    for (let i = 0; i < count; i++) {
      sum += numbers[i];
    }
  
    let average = sum / count;
    return average;
  }
  
  // Example usage:
  let numbers = [5, 10, 15, 20, 25];
  let average = calculateAverage(numbers);
  console.log("The average is: " + average); //Output ==> 15
  