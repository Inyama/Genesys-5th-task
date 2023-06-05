// Create a function that will be able to convert figures from Fahrenheit to Celsius.

function fahrenheitToCelsius(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
  }
  
  // Example usage:
  let temperatureInFahrenheit = 68;
  let temperatureInCelsius = fahrenheitToCelsius(temperatureInFahrenheit);
  console.log(temperatureInCelsius); // Output: 20
  