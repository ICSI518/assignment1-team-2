// Function to subtract two numbers
// Take 2 numbers as input and return subtraction as output
function subtract(a, b) {
  return a - b;
}

// Function to add two numbers
// Take 2 numbers as input and gives their sum  as output
function add(a, b) {
  return a + b;
}

// Function to multiply two numbers
// Take 2 numbers as input and gives their product  as output
function multiply(a, b) {
  return a * b;
}

// Function to divide two numbers
// Take 2 numbers as input and gives their quotient  as output
function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;

}

// Example usage
const a = 10;
const b = 5;

// Display results on console
console.log(`Addition: ${a} + ${b} = ${add(a, b)}`);
console.log(`Subtraction: ${a} - ${b} = ${subtract(a, b)}`);
console.log(`Multiplication: ${a} * ${b} = ${multiply(a, b)}`);
console.log(`Division: ${a} / ${b} = ${divide(a, b)}`);
