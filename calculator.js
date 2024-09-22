class Calculator {
  constructor() {}

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (b === 0) {
      console.log("You cannot divide by 0");
    }
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}

module.exports = Calculator;
