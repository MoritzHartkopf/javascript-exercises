
// converts F to C
const convertToCelsius = function(fahrenheit) {
  celsius = (fahrenheit -32) * 5/9;
  return Math.round(celsius * 10) / 10;
};

// converts C to F
const convertToFahrenheit = function(celsius) {
  fahrenheit = celsius * 9/5 + 32; 
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
